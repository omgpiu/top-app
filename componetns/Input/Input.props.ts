import { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  ref?: ForwardedRef<HTMLInputElement>;
  error?: FieldError;
}
