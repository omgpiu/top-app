import React from 'react';
import { IProduct } from './Product.props';
import ProductCSS from './Product.module.css';
import Image from 'next/image';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { Divider } from '../Divider/Divider';
import { declOfNumber } from '../../helpers/declOfNumber';

export const Product: React.FC<IProduct> = ({className, product, ...rest}): JSX.Element => {
  return (
    <Card className={ProductCSS.product}>
      <div className={ProductCSS.logo}>
        <Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width='50px' height='50px' />
      </div>
      <div className={ProductCSS.title}>
        {product.title}
      </div>
      <div className={ProductCSS.price}>
        {product.price}
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
        {product.reviewCount} {declOfNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
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
      <Divider className={ProductCSS.hr} />
      <div className={ProductCSS.actions}>
        <Button appearance='primary'>Узнать подробнее</Button>
        <Button appearance='ghost' arrow='right' className={ProductCSS.reviewButton}> Читать отзывы</Button>
      </div>

    </Card>
  );
};
