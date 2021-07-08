import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type PtagProps = {
    size?: 'small' | 'default' | 'medium' | 'large'
    children: ReactNode
} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
