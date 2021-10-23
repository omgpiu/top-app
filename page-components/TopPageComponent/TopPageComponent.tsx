import React, { useEffect, useReducer } from 'react';
import { ITopPageComponent } from './TopPageComponent.props';
import { Advatages, Htag, Product, Sort, Tag } from '../../componetns';
import st from './TopPageComponent.module.css';
import { HHData } from '../../componetns/HHData/HHData';
import { TopLevelCategory } from '../../interfaces/top-page.interface';
import { SortEnum } from '../../componetns/Sort/Sort.props';
import { sortReducer } from './sort.reducer';


export const TopPageComponent = ({page, products, firstCategory}: ITopPageComponent): JSX.Element => {
  const [{products: sortedProducts, sort}, dispatch] = useReducer(sortReducer, {products, sort: SortEnum.Rating});
  const setSort = (sort: SortEnum) => dispatch({type: sort});

  useEffect(() => {
    dispatch({type: 'newState', newState: products});
  }, [products]);


  return (
    <div className={st.wrapper}>
      <div className={st.title}>
        <Htag tag='h1'>{page?.title}</Htag>
        {products && <Tag color='grey' size='m' aria-label={products.length + 'элементов'}>{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div role='list'>
        {sortedProducts && sortedProducts.map(p =>
          (<Product layout key={p._id} product={p} role='listitem'/>))}
      </div>
      <div className={st.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && <HHData {...page.hh} />}
      {page.advantages?.length && <Advatages advantages={page.advantages} />}
      {page.seoText && <div className={st.seo} dangerouslySetInnerHTML={{__html: page.seoText}} />}
      <Htag tag='h2'>Получаемые навыки</Htag>
      {page.tags.map(e => <Tag color='primary' key={e} children={e} />)}
    </div>
  );
};


