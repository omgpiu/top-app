import React from 'react';
import { Button, Htag, Ptag, Search } from '../componetns';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { IMenuItem } from '../interfaces/menu.interface';
import { API } from '../API/API';


function Home({menu}: HomeProps): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance={'primary'} arrow={'right'}>Primary</Button>
      <Button appearance={'ghost'} arrow={'right'}>Ghost</Button>
      <Ptag size={'default'}>Bla Bla</Ptag>
      <Search />

    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  //сервер ожидает POST , вместо get <WTF>
  const {data: menu} = await axios.post<IMenuItem[]>(
    API.topPage.find,
    {firstCategory});
  return {
    props: {
      menu,
      firstCategory
    }
  };
};


type HomeProps = {
  menu: IMenuItem[],
  firstCategory: number
} & Record<string, unknown>
