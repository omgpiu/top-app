import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import up from './AppIcon.svg';
import close from './BigCross.svg';
import menu from './Burger.svg';

export const icons = {
  up,
  close,
  menu
};

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: 'up' | 'close' | 'menu';
  appearance: 'primary' | 'white';
}
