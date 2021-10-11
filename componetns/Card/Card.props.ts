import { DetailedHTMLProps, ForwardedRef, HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    color?: 'white' | 'grey';
    ref: ForwardedRef<HTMLDivElement>

}
