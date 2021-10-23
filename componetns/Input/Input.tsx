import React, { ForwardedRef, forwardRef } from 'react';
import { IInput } from './Input.props';
import InputCSS from './Input.module.css';
import cn from 'classnames';

export const Input: React.FC<IInput> = forwardRef(({
                                                     error,
                                                     className,
                                                     ...props
                                                   }, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={cn(className, InputCSS.wrapper)}>
      <input className={cn(InputCSS.input, {
        [InputCSS.error]: error
      })} ref={ref} {...props} />
      {error && <span role='alert' className={InputCSS.errorMessage}>{error.message}</span>}
    </div>

  );
});
