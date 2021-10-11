import React, { useRef, useState } from 'react';
import { IProduct } from './Product.props';
import ProductCSS from './Product.module.css';
import Image from 'next/image';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { Divider } from '../Divider/Divider';
import { declOfNumber } from '../../helpers/declOfNumber';
import { priceRu } from '../../helpers';
import cn from 'classnames';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const Product: React.FC<IProduct> = ({className, product, ...rest}): JSX.Element => {

  const reviewRef = useRef<HTMLDivElement>(null);

  //state
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

  //variables
  const arrowDirection = isReviewOpened ? 'down' : 'right';

  //functions
  const onClickReviewHandler = () => setIsReviewOpened(!isReviewOpened);
  const scrollToReview = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };


  return (
    <div className={className} {...rest}>
      <Card className={ProductCSS.product}>
        <div className={ProductCSS.logo}>
          <Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width='70px' height='70px' />
        </div>
        <div className={ProductCSS.title}>
          {product.title}
        </div>
        <div className={ProductCSS.price}>
          <span><span className='visualyHidden'>цена</span>{priceRu(product.price)}</span>
          {product.oldPrice && <Tag className={ProductCSS.oldPrice} color='green'>
            <span className='visualyHidden'>скидка</span>
            {priceRu(product.price - product.oldPrice)}
          </Tag>}
        </div>
        <div className={ProductCSS.credit}>
          {product.credit}
        </div>
        <div className={ProductCSS.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={ProductCSS.tags}>
          {product.categories.map(c => <Tag className={ProductCSS.category} color='ghost' key={c}>{c}</Tag>)}
        </div>
        <div className={ProductCSS.priceTitle}>
          цена
        </div>
        <div className={ProductCSS.creditTitle}>
          кредит
        </div>
        <div className={ProductCSS.rateTitle}>
          <a href='#ref' onClick={scrollToReview}>
            {product.reviewCount} {declOfNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
          </a>
        </div>
        <Divider className={ProductCSS.hr} />
        <div className={ProductCSS.description}>
          {product.description}
        </div>
        <div className={ProductCSS.feature}>
          {product.characteristics.map(c => (
            <div className={ProductCSS.characteristics} key={c.name}>
              <span className={ProductCSS.characteristicsName}>{c.name}</span>
              <span className={ProductCSS.characteristicsDots}></span>
              <span className={ProductCSS.characteristicsValue}>{c.value}</span>
            </div>))}
        </div>
        <div className={ProductCSS.advBlock}>
          {product.advantages && <div className={ProductCSS.advantages}>
            <div className={ProductCSS.advTitle}>
              Преимущества
            </div>
            <div>
              {product.advantages}
            </div>
          </div>}
          {product.disadvantages && <div className={ProductCSS.disadvantages}>
            <div>
              Недостатки
            </div>
            <div>
              {product.disadvantages}
            </div>
          </div>}
        </div>
        <Divider className={cn(ProductCSS.hr, ProductCSS.hr2)} />
        <div className={ProductCSS.actions}>
          <Button appearance='primary'>Узнать подробнее</Button>
          <Button appearance='ghost' arrow={arrowDirection} className={ProductCSS.reviewButton}
                  onClick={onClickReviewHandler}
          > Читать отзывы</Button>
        </div>
      </Card>
      <Card ref={reviewRef} color='grey' className={cn(ProductCSS.reviews, {
        [ProductCSS.opened]: isReviewOpened,
        [ProductCSS.closed]: !isReviewOpened
      })}>
        {product.reviews.length ? product.reviews.map(r => {
          return (< div key={r._id}>
            <Review review={r} />
            <Divider />
          </div>);
        }) : 'Отзывов еще нет'}
        <Divider />
        <ReviewForm productId={product._id} />
      </Card>
    </div>
  );
};
