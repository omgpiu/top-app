import React from 'react';
import AdvantageIcon from './AdvantageIcon.svg';
import st from './Advantage.module.css';

interface IProps {
  title: string;
  description: string;
}

export const Advantage: React.FC<IProps> = ({title, description}): JSX.Element => {
  const renderTitle = title || 'Актуальность';
  const renderDescription = description || 'Выше указаны программы Adobe InDesign, \n' +
    '        Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге.\n' +
    '        Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис.\n' +
    '        В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.';

  return (
    <div className={st.wrapper}>
      <AdvantageIcon className={st.icon} />
      <span className={st.title}>{renderTitle}</span>
      <span className={st.text}>{renderDescription}</span>
    </div>
  );
};
