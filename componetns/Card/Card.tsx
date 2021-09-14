import { CardProps } from './Card.props';
import cn from 'classnames';
import st from './Card.module.css'
export const Card = ({ color='white', children, className, ...props }: CardProps): JSX.Element => {
    return (
        <div
            className={cn(st.card,className,{
                [st.grey]:color==='grey'
            })}
            { ...props }
        >
            {children}
        </div>
    );
};
