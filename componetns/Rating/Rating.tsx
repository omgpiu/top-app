import React, { ForwardedRef, forwardRef, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { ComputeFocusReturnType, RatingProps } from './Rating.props';
import StarIcon from './start.svg';
import cn from 'classnames';
import RatingCSS from './Rating.module.css';


export const Rating: React.FC<RatingProps> = forwardRef(({
                                                           error,
                                                           setRating,
                                                           rating,
                                                           isEditable = false,
                                                           tabIndex,
                                                           ...rest
                                                         }, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  const computeFocus = (rating: number, index: number): ComputeFocusReturnType => {
    if (!isEditable) return -1;
    if (!rating && index === 0) return tabIndex ?? 0;
    if (rating === index + 1) return tabIndex ?? 0;
    return -1;
  };
  const changeRating = (rating: number) => {
    if (!isEditable) return;
    setRating && setRating(rating);
  };
  const handleKey = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (!isEditable || !setRating) return;
    if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }

  };
  const changeDisplay = (rating: number) => {
    if (!isEditable) return;
    constructRating(rating);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          tabIndex={computeFocus(rating, i)}
          className={cn(RatingCSS.star, {
            [RatingCSS.filled]: i < currentRating,
            [RatingCSS.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeRating(i + 1)}
          onKeyDown={handleKey}
          ref={r => ratingArrayRef.current?.push(r)}
        >
        <StarIcon />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating, tabIndex]);

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
