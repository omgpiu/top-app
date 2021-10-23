import React from 'react';
import { ISortProps, SortEnum } from './Sort.props';
import SortIcon from './Sort.svg';
import st from './Sort.module.css';
import cn from 'classnames';

export const Sort: React.FC<ISortProps> = ({sort, setSort, className, ...props}): JSX.Element => {
  return <div className={cn(st.sort, className)} {...props}>
    <div className={st.hideDiv} id='sort'>Сортировка</div>
    <button
      id='rating'
      onClick={() => setSort(SortEnum.Rating)}
      className={cn({
        [st.active]: sort === SortEnum.Rating
      })}
      aria-selected={sort === SortEnum.Rating}
      aria-labelledby='sort rating'
    >
      <SortIcon className={st.icon} />
      По рейтингу
    </button>
    <button
      id='price'
      onClick={() => setSort(SortEnum.Price)}
      className={cn({
        [st.active]: sort === SortEnum.Price
      })}
      aria-selected={sort === SortEnum.Price}
      aria-labelledby='sort price'
    >
      <SortIcon className={st.icon} />
      По цене
    </button>

  </div>;
};
