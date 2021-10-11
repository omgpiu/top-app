import { DetailedHTMLProps, ForwardedRef, TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface ITextarea extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  className?: string;
  ref: ForwardedRef<HTMLTextAreaElement>;
  error?: FieldError;
}
