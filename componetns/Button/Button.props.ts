import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type StandardType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export type ButtonProps = {
    children?: ReactNode
    appearance: 'primary' | 'ghost'
    arrow?: 'right' | 'down' | 'none'
} & StandardType


