import { withLayout } from '../../layout/Layout';
import React from 'react';
import { Button, Htag, Ptag } from '../../componetns';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { IMenuItem } from '../../interfaces/menu.interface';
import { API } from '../../API/API';

const Search = (): JSX.Element => {

  return (
    <div style={{border: '1px solid black'}}>
      SEARCH PAGE
      <Htag tag='h1'>Text</Htag>
      <Button appearance={'primary'} arrow={'right'}>Primary</Button>
      <Button appearance={'ghost'} arrow={'right'}>Ghost</Button>
      <Ptag size={'default'}>Bla Bla</Ptag>
    </div>
  );
};


export default withLayout(Search);
export const getStaticProps: GetStaticProps<SearchProps> = async () => {
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


type SearchProps = {
  menu: IMenuItem[],
  firstCategory: number
} & Record<string, unknown>
