import React from 'react';
import AdvantageIcon from './AdvantageIcon.svg';
import st from './Advantage.module.css'

export const Advantage: React.FC = (): JSX.Element => {
  return (
    <div className={st.wrapper}>
        <AdvantageIcon className={st.icon}/>
        <div className={st.title}>Мобильность специалиста</div>
      <div className={st.text}>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</div>
    </div>
  );
};
