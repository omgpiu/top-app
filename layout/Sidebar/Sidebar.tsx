import React from 'react';
import { SidebarProps } from './Sidebar.props';


export const Sidebar: React.FC<SidebarProps> = ({ ...props }): JSX.Element => {

    return (
        <div { ...props }>
            SideBar
        </div>
    )
}
