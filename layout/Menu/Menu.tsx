import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context';


export const Menu: React.FC = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);
  return (
    <ul>
      {menu.map(el => (<li key={el._id.secondCategory}>{el._id.secondCategory}</li>))}
    </ul>
  );
};
