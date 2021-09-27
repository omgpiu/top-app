import { AdvantagesProps } from './Advantages.props';
import React from 'react';
import { Advantage } from './Advantage/Advantage';
import st from './Advantages.module.css';
import { Htag } from '../Htag/Htag';


export const Advatages: React.FC<AdvantagesProps> = ({
                                                       advantages
                                                     }): JSX.Element => {
  return (
    <div className={st.wrapper}>
      <Htag tag='h2'>Преимущества</Htag>
      {advantages.map(e => <Advantage key={e._id} title={e.title} description={e.description} />)}
    </div>

  );
};
