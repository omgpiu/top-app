import React, { useReducer } from 'react';
import { ITopPageComponent } from './TopPageComponent.props';
import { Advatages, Htag, Sort, Tag } from '../../componetns';
import st from './TopPageComponent.module.css';
import { HHData } from '../../componetns/HHData/HHData';
import { TopLevelCategory } from '../../interfaces/top-page.interface';
import { SortEnum } from '../../componetns/Sort/Sort.props';
import { sortReducer } from './sort.reducer';


export const TopPageComponent = ({page, products, firstCategory}: ITopPageComponent): JSX.Element => {
  const [{products: sortedProducts, sort}, dispatch] = useReducer(sortReducer, {products, sort: SortEnum.Rating});
  const setSort = (sort: SortEnum) => dispatch({type: sort});

  return (
    <div className={st.wrapper}>
      <div className={st.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && <Tag color='grey' size='m'>{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort} />
        <div>
          {sortedProducts && sortedProducts.map(p =>
            (<div key={p._id}>
              {p.title}
            </div>))}
        </div>
      </div>
      <div className={st.HHtitle}>
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


