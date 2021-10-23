import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ISearch extends  DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>{

    children?: ReactNode
}
