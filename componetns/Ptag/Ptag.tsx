import React from 'react';
import { PtagProps } from './Ptag.props';
import PtagCSS from './Ptag.module.css'
import cn from 'classnames'
import { classNameCheck } from '../../helpers';

export const Ptag: React.FC<PtagProps> = ({ className, children, size = 'default', ...rest }): JSX.Element => {

    return (
        <p className={ cn(PtagCSS.p, classNameCheck(className), {
            [PtagCSS.small]: size === 'small',
            [PtagCSS.medium]: size === 'medium',
            [PtagCSS.default]: size === 'default',
            [PtagCSS.large]: size === 'large',
        }) }
           { ...rest }
        >{ children }</p>
    )
}
