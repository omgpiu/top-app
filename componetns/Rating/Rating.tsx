import React, { ForwardedRef, forwardRef, KeyboardEvent, useEffect, useState } from 'react';
import { RatingProps } from './Rating.props';
import StarIcon from './start.svg';
import cn from 'classnames';
import RatingCSS from './Rating.module.css';

export const Rating: React.FC<RatingProps> = forwardRef(({
                                                           error,
                                                           setRating,
                                                           rating,
                                                           isEditable = false,
                                                           ...rest
                                                         }, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(RatingCSS.star, {
            [RatingCSS.filled]: i < currentRating,
            [RatingCSS.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeRating(i + 1)}>
                     <StarIcon
                       tabIndex={isEditable ? 0 : -1}
                       onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && addBySpace(i + 1, e)}
                     />
                </span>

      );
    });
    setRatingArray(updatedArray);
  };
  const changeDisplay = (rating: number) => {
    if (!isEditable) return;
    constructRating(rating);
  };
  const changeRating = (rating: number) => {
    if (!isEditable) return;
    setRating && setRating(rating);
  };
  const addBySpace = (rating: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space') return;
    setRating && setRating(rating);

  };
  return (
    <div {...rest} ref={ref} className={cn(RatingCSS.wrapper, {
      [RatingCSS.error]: error
    })
    }>
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
      {error && <span className={RatingCSS.errorMessage}>{error.message}</span>}
    </div>

  );
});
