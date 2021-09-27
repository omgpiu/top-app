import React from 'react';
import { SidebarProps } from './Sidebar.props';
import { Menu } from '../Menu/Menu';
import { LogoOWL } from '../../helpers/logo';
import cn from 'classnames';
import st from './Sidebar.module.css'


export const Sidebar: React.FC<SidebarProps> = ({className,...props}): JSX.Element => {
  console.log(className);
  return (
    <aside {...props} className={cn(className,st.sidebar)}>
        <LogoOWL className={st.logo}/>
        <div>Seacrh</div>
      <Menu />
    </aside>
  );
};
