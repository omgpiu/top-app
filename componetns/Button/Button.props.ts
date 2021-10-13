import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type StandardType = Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'>
export type ButtonProps = {
  children?: ReactNode
  appearance: 'primary' | 'ghost'
  arrow?: 'right' | 'down' | 'none'
} & StandardType


