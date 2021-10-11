import React from 'react';


import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { withLayout } from '../../layout/Layout';
import { IMenuItem } from '../../interfaces/menu.interface';
import { ITopPageModel, TopLevelCategory } from '../../interfaces/top-page.interface';
import { ParsedUrlQuery } from 'querystring';
import { IProductModal } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers';
import { TopPageComponent } from '../../page-components';
import { API } from '../../API/API';


const TopPage = ({menu, page, products, firstCategory}: ITopPageProps): JSX.Element => {

  return (
    <>
      <TopPageComponent
        page={page}
        firstCategory={firstCategory}
        products={products}
      />

    </>
  );
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const mItem of firstLevelMenu) {
    const {data: menu} = await axios.post<IMenuItem[]>(
      API.topPage.find,
      {firstCategory: mItem.id});
    paths = paths.concat(menu.flatMap(m => m.pages.map(page => `/${mItem.route}/${page.alias}`)));
  }
  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<ITopPageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  const firstCategoryItem = firstLevelMenu.find(menu => menu.route == params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true
    };
  }
  //сервер ожидает POST , вместо get <WTF>
  try {
    const {data: menu} = await axios.post<IMenuItem[]>(
      API.topPage.find,
      {firstCategory: firstCategoryItem.id});
    if (menu.length == 0) {
      return {
        notFound: true
      };
    }
    const {data: page} = await axios.get<ITopPageModel>(
      API.topPage.byAlias + params.alias);
    const {data: products} = await axios.post<IProductModal[]>(
      API.product.find, {
        category: page.category,
        limit: 10
      });
    return {
      props: {
        firstCategory: firstCategoryItem.id,
        page,
        products,
        menu
      }
    };
  } catch {
    return {
      notFound: true
    };
  }


};


interface ITopPageProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: TopLevelCategory;
  page: ITopPageModel;
  products: IProductModal[];
}
