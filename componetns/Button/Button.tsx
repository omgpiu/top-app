import { ButtonProps } from './Button.props';
import React from 'react';
import ArrowIcon from './arrow.svg'
import ButtonCSS from './Button.module.css'
import cn from 'classnames'

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  appearance,
                                                  className,
                                                  arrow = 'none',
                                                  ...rest
                                              }): JSX.Element => {
    return (
        <button className={ cn(ButtonCSS.button, className, {
            [ButtonCSS.primary]: appearance === 'primary',
            [ButtonCSS.ghost]: appearance === 'ghost',
        }) }
                { ...rest }
        >
            { children }
            { arrow !== 'none' &&
            <span className={ cn(ButtonCSS.arrow, { [ButtonCSS.down]: arrow === 'down' }) }> <ArrowIcon/> </span> }
        </button>
    )
}
