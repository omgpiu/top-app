import React, { useState } from 'react';
import { Button, Htag, Ptag, Rating } from '../componetns';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItemType } from '../Types/MenuTypes';


function Home({menu, firstCategory}: HomeProps): JSX.Element {
  const [rating, setRating] = useState(4);
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance={'primary'} arrow={'right'}>Primary</Button>
      <Button appearance={'ghost'} arrow={'right'}>Ghost</Button>
      <Ptag size={'default'}>Bla Bla</Ptag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map(el => (<li key={el._id.secondCategory}>{el._id.secondCategory}</li>))}
      </ul>

    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  //сервер ожидает POST , вместо get <WTF>
  const {data: menu} = await axios.post<MenuItemType[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {firstCategory});
  return {
    props: {
      menu,
      firstCategory
    }
  };
};


type HomeProps = {
  menu: MenuItemType[],
  firstCategory: number
} & Record<string, unknown>
