import React, { ForwardedRef, forwardRef } from 'react';
import { ITextarea } from './Textarea.props';
import TaCss from './Textarea.module.css';
import cn from 'classnames';


export const Textarea: React.FC<ITextarea> = forwardRef(({
                                                           className,
                                                           error,
                                                           ...props
                                                         }, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {

  return (
    <div className={cn(TaCss.wrapper, className)}>
            <textarea className={cn(TaCss.textarea, {
              [TaCss.error]: error
            })} ref={ref} {...props} />
      {error && <span className={TaCss.errorMessage}>{error.message}</span>}
    </div>

  );
});
