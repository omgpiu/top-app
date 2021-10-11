import React, { ChangeEvent, useState } from 'react';
import { ISearch } from './Search.props';
import SearchCss from './Search.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import GlassIcon from './Magnifire.svg';
import { useRouter } from 'next/router';

export const Search: React.FC<ISearch> = ({className, children, ...rest}): JSX.Element => {
  const {push} = useRouter();
  const [search, setSearch] = useState<string>('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const onClickHandler = () => push({
    pathname: '/search', query: {
      q: search
    }
  });
  const onKeyDownHandler =(event: React.KeyboardEvent<HTMLElement>) => {
    if (event?.code == 'Enter') {
      onClickHandler();
    }
  };
  return (
    <div className={cn(SearchCss.search, className)}{...rest}>
      <Input
        className={SearchCss.input}
        value={search}
        onChange={onChangeHandler}
        placeholder='Поиск...'
        onKeyDown={onKeyDownHandler}
      />
      <Button appearance='primary'
              className={SearchCss.button}
              onClick={onClickHandler}
      >
        <GlassIcon />
      </Button>
    </div>
  );
};
