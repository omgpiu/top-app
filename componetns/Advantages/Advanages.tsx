import { AdvantagesProps } from './Advantages.props';
import React from 'react';
import { Advantage } from './Advantage/Advantage';
import st from './Advantages.module.css'
export const Advatages: React.FC<AdvantagesProps> = ({
                                                       data
                                                     }): JSX.Element => {
  return (
    <div className={st.wrapper}>
      <div className={st.header}>Преимущества</div>
      <Advantage />
    </div>

  );
};
