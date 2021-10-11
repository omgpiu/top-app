import { DetailedHTMLProps, ForwardedRef, HTMLAttributes } from 'react';
import { IProductModal } from '../../interfaces/product.interface';

export interface IProduct extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProductModal;
  ref: ForwardedRef<HTMLDivElement>;

}
