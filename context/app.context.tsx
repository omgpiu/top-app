import { createContext, PropsWithChildren, useState } from 'react';
import { MenuItemType } from '../interfaces/MenuTypes';
import { TopLevelCategory } from '../interfaces/top-page.interface';


export interface IAppContext {
  menu: MenuItemType[]
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItemType[]) => void
}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: TopLevelCategory.Courses});
export const AppContextProvider = ({
                                     menu,
                                     firstCategory,
                                     children
                                   }: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItemType[]>(menu);
  const setMenu = (newMenu: MenuItemType[]) => {
    setMenuState(newMenu);
  };

  return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
    {children}
  </AppContext.Provider>;

};
