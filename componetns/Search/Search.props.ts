import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ISearch extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{

    children?: ReactNode
}
