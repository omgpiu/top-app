import React from 'react';
import { ISortProps, SortEnum } from './Sort.props';
import SortIcon from './Sort.svg';
import st from './Sort.module.css';
import cn from 'classnames';

export const Sort: React.FC<ISortProps> = ({sort, setSort, className, ...props}): JSX.Element => {
  const onKeyDownHandler = (key: React.KeyboardEvent<HTMLSpanElement>, sorting: SortEnum) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      setSort(sorting);
    }
  };
  return <div className={cn(st.sort, className)} {...props}>
    <span
      tabIndex={0}
      onKeyDown={(key) => onKeyDownHandler(key, SortEnum.Rating)}
      onClick={() => setSort(SortEnum.Rating)}
      className={cn({
        [st.active]: sort === SortEnum.Rating
      })}
    >
      <SortIcon className={st.icon} />
      По рейтингу
    </span>
    <span
      tabIndex={0}
      onKeyDown={(key) => onKeyDownHandler(key, SortEnum.Price)}
      onClick={() => setSort(SortEnum.Price)}
      className={cn({
        [st.active]: sort === SortEnum.Price
      })}
    >
      <SortIcon className={st.icon} />
      По цене
    </span>

  </div>;
};
