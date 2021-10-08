import React from 'react';
import { DividerProps } from './DividerProps';
import cn from 'classnames';
import st from './Divider.module.css'

export const Divider: React.FC<DividerProps> = ({className,...rest}): JSX.Element => {
  return <hr className={cn(className,st.hr)}/>;
};
