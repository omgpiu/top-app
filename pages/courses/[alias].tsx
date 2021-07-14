import React from 'react';


import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { withLayout } from '../../layout/Layout';
import { MenuItemType } from '../../interfaces/MenuTypes';
import { ITopPageModel } from '../../interfaces/top-page.interface';
import { ParsedUrlQuery } from 'querystring';
import { IProductModal } from '../../interfaces/product.interface';

const firstCategory = 0;
const Course = ({menu, page, products}: ICourseProps): JSX.Element => {

  return (
    <>

      {products && products.length}
    </>
  );
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const {data: menu} = await axios.post<MenuItemType[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {firstCategory});
  return {
    paths: menu.flatMap(m => m.pages.map(page => '/courses/' + page.alias)),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<ICourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }
  //сервер ожидает POST , вместо get <WTF>
  const {data: menu} = await axios.post<MenuItemType[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {firstCategory});
  const {data: page} = await axios.get<ITopPageModel>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
  const {data: products} = await axios.post<IProductModal[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
      category: page.category,
      limit: 10
    });


  return {
    props: {
      firstCategory,
      page,
      products,
      menu
    }
  };
};


interface ICourseProps extends Record<string, unknown> {
  menu: MenuItemType[]
  firstCategory: number
  page: ITopPageModel
  products: IProductModal[]
}
