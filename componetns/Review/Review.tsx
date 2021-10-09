import { ReviewProps } from './Review.props';
import cn from 'classnames';
import st from './Review.module.css';
import UserReview from './UserReview.svg';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Rating } from '../Rating/Rating';

export const Review = ({review, className, ...props}: ReviewProps): JSX.Element => {
  const {name, title, description, createdAt, rating} = review;
  console.log(review);
  return (
    <div
      className={cn(st.review, className)}
      {...props}
    >
      <UserReview className={st.logo} />
      <div className={st.titleBlock}>
        <span className={st.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={st.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
      </div>
      <div className={st.rating}>
        <Rating rating={rating} />
      </div>
      <div className={st.description}>
        {description}
      </div>
    </div>
  );
};
