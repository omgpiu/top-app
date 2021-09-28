import React from 'react';
import { ISortProps, SortEnum } from './Sort.props';
import SortIcon from './Sort.svg';
import st from './Sort.module.css';
import cn from 'classnames';

export const Sort: React.FC<ISortProps> = ({sort, setSort, className,...props}): JSX.Element => {
 console.log(sort)
  return <div className={cn(st.sort,className)} {...props}>

    <span
    onClick={()=>setSort(SortEnum.Rating)}
    className={cn({
      [st.active]:sort===SortEnum.Rating
    })}
    >
      <SortIcon className={st.icon}/>
      По рейтингу
    </span>
    <span
      onClick={()=>setSort(SortEnum.Price)}
      className={cn({
        [st.active]:sort===SortEnum.Price
      })}
    >
      <SortIcon  className={st.icon}/>
      По цене
    </span>

  </div>;
};
