import { ButtonProps } from './Button.props';
import React from 'react';
import ButtonCSS from './Button.module.css'
import cn from 'classnames'

export const Button: React.FC<ButtonProps> = ({ children, appearance }): JSX.Element => {
    return (
        <button className={ cn(ButtonCSS.button, {
            [ButtonCSS.primary]: appearance === 'primary',
            [ButtonCSS.ghost]: appearance === 'ghost',
        }) }>
            { children }
        </button>
    )
}
