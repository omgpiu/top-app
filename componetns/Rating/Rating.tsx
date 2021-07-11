import React, { KeyboardEvent, useEffect, useState } from 'react';
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
                        [RatingCSS.filled]: i < currentRating,
                        [RatingCSS.editable]: isEditable
                    }) }
                    onMouseEnter={ () => changeDisplay(i + 1) }
                    onMouseLeave={ () => changeDisplay(rating) }
                    onClick={ () => changeRating(i + 1) }
                    tabIndex={ isEditable ? 0 : -1 }
                    onKeyDown={ (e: KeyboardEvent<SVGElement>) => isEditable && addBySpace(i + 1, e) }
                />
            )
        })
        setRatingArray(updatedArray)
    }
    const changeDisplay = (rating: number) => {
        if (!isEditable) return
        constructRating(rating)
    }
    const changeRating = (rating: number) => {
        if (!isEditable) return
        setRating && setRating(rating)
    }
    const addBySpace = (rating: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code !== 'Space') return
        setRating && setRating(rating)

    }
    return (
        <div { ...rest }>
            { ratingArray.map((r, i) => (<span key={ i }>{ r }</span>)) }
        </div>

    )
}
