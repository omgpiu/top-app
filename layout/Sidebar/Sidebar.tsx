import React from 'react';
import { SidebarProps } from './Sidebar.props';
import { Menu } from '../Menu/Menu';


export const Sidebar: React.FC<SidebarProps> = ({...props}): JSX.Element => {

  return (
    <aside {...props}>
      <Menu />
    </aside>
  );
};
