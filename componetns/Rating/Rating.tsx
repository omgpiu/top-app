import React, { useEffect, useState } from 'react';
import { RatingProps } from './Rating.props';
import StarIcon from './start.svg'
import cn from 'classnames'
import RatingCSS from './Rating.module.css'

export const Rating: React.FC<RatingProps> = ({
                                                  setRating,
                                                  rating,
                                                  isEditable = false,
                                                  ...rest
                                              }): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    className={ cn(RatingCSS.star, {
                        [RatingCSS.filled]: i < currentRating
                    }) }
                />
            )
        })
        setRatingArray(updatedArray)
    }

    return (
        <div { ...rest }>
            { ratingArray.map((r, i) => (<span key={ i }>{ r }</span>)) }
        </div>

    )
}
