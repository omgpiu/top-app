import { DetailedHTMLProps, ForwardedRef, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export type RatingProps = {
  isEditable?: boolean
  rating: number
  setRating?: (rating: number) => void
  ref?: ForwardedRef<HTMLDivElement>
  error?: FieldError
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
