import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import ReviewFormCSS from './ReviewForm.module.css';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm, IReviewFormResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../API/API';
import { useState } from 'react';
import Cross from './Cross.svg';


export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
  const {register, control, handleSubmit, formState: {errors, isSubmitSuccessful}, reset} = useForm<IReviewForm>();
  const [error, setError] = useState<string>('');

  const onSubmit = async (value: IReviewForm) => {
    try {
      const {data} = await axios.post<IReviewFormResponse>(API.review.createDemo, {...value, productId});
      if (!data.message) {
        setError('Что-то пошло не так');
      }
    } catch (e) {
      setError('Что-то пошло не так,попробуйте обновить страницу');
    }


  };
  const onClickIconHandler = () => {
    reset();
    setError('');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={cn(ReviewFormCSS.reviewForm, className)}
        {...props}
      >
        <Input
          placeholder='Имя'
          error={errors.name}
          {...register('name', {required: {value: true, message: 'Заполните имя'}})}
        />
        <Input
          className={ReviewFormCSS.titleInput}
          placeholder='Заголовок отзыва'
          error={errors.title}
          {...register('title', {required: {value: true, message: 'Заполните заголовок'}})} />
        <div className={ReviewFormCSS.rating}>
          <span>Оценка:</span>
          <Controller
            rules={{required: {value: true, message: 'Укажите рейтинг'}}}
            name='rating'
            control={control}
            render={({field}) => <Rating
              error={errors.rating}
              rating={field.value}
              isEditable
              ref={field.ref}
              setRating={field.onChange} />}
          />
        </div>

        <Textarea
          error={errors.description}
          className={ReviewFormCSS.description}
          placeholder='Текст отзыва'
          {...register('description', {required: {value: true, message: 'Заполните отзыв '}})}
        />
        <div className={ReviewFormCSS.submit}>
          <Button appearance='primary'>Отправить</Button>
          <span
            className={ReviewFormCSS.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>

      {(isSubmitSuccessful || error) && < div className={cn(ReviewFormCSS.panel, {
        [ReviewFormCSS.success]: !error,
        [ReviewFormCSS.error]: error,
      })}>
        <span className={ReviewFormCSS.requestTitle}>{error || 'Ваш отзыв отправлен'}</span>
        {!error &&
        <span className={ReviewFormCSS.successDescription}>Спасибо, Ваш отзыв будет опубликован после проверки</span>}
        <Cross className={ReviewFormCSS.closeIcon} onClick={onClickIconHandler} />
      </div>}

    </form>
  );
};
