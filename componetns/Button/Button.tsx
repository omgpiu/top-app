import { ButtonProps } from './Button.props';
import React from 'react';
import ArrowIcon from './arrow.svg';
import ButtonCSS from './Button.module.css';
import cn from 'classnames';
import { motion } from 'framer-motion';

export const Button = ({
                         children,
                         appearance,
                         className,
                         arrow = 'none',
                         ...rest
                       }: ButtonProps): JSX.Element => {

  return (
    <motion.button
      whileHover={{scale: 1.1}}
      className={cn(ButtonCSS.button, className, {
        [ButtonCSS.primary]: appearance === 'primary',
        [ButtonCSS.ghost]: appearance === 'ghost',
      })}
      {...rest}
    >
      {children}
      {arrow !== 'none' &&
      <span className={cn(ButtonCSS.arrow, {[ButtonCSS.down]: arrow === 'down'})}> <ArrowIcon /> </span>}
    </motion.button>
  );
};
