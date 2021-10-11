import { CardProps } from './Card.props';
import cn from 'classnames';
import st from './Card.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const Card = forwardRef(({
                                  color = 'white',
                                  children,
                                  className,
                                  ...props
                                }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return (
    <div
      className={cn(st.card, className, {
        [st.grey]: color === 'grey'
      })}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});
