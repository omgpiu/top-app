import { DetailedHTMLProps, ForwardedRef, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export type ComputeFocusReturnType = -1 | 0
export type RatingProps = {
  tabIndex?: ComputeFocusReturnType
  isEditable?: boolean
  rating: number
  setRating?: (rating: number) => void
  ref?: ForwardedRef<HTMLDivElement>
  error?: FieldError
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
