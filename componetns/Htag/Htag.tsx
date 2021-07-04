import React from 'react';
import { HtagProps } from './Htag.props';
import HtagCSS from './Htag.module.css'

export const Htag: React.FC<HtagProps> = ({ children, tag }): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <h1 className={ HtagCSS.h1 }>{ children }</h1>
        case 'h2':
            return <h2  className={ HtagCSS.h2 }>{ children }</h2>
        case 'h3':
            return <h3  className={ HtagCSS.h3 }>{ children }</h3>
        default:
            return <></>
    }
}
