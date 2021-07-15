import React, { useContext } from 'react';
import { AppContext } from '../../context';
import st from './Menu.module.css';
import { FirstLevelMenuItem, IPageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/top-page.interface';
import { Book, Box, Cloud, Hat } from './icons';
import cn from 'classnames';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {id: TopLevelCategory.Courses, title: 'Курсы', icon: <Hat />, route: '/courses'},
  {id: TopLevelCategory.Services, title: 'Сервисы', icon: <Cloud />, route: '/services'},
  {id: TopLevelCategory.Books, title: 'Книги', icon: <Book />, route: '/books'},
  {id: TopLevelCategory.Products, title: 'Товары', icon: <Box />, route: '/products'},


];

export const Menu: React.FC = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);
  const firstLevelMenuRender = () => {
    return (
      <>
        {firstLevelMenu.map(flmenu => (
          <div key={flmenu.route}>
            <a href={`/${flmenu.route}`}>
              <div className={cn(st.firstLevel, {
                [st.firstLevelActive]: flmenu.id === firstCategory
              })}>
                {flmenu.icon}<span>{flmenu.title}</span>
              </div>
            </a>
            {
              flmenu.id === firstCategory && secondLevelMenuRender(flmenu.route)
            }

          </div>
        ))}
      </>
    );
  };
  const secondLevelMenuRender = (route: string) => {
    return (
      <>
        {menu.map(slmenu => (
          <div key={slmenu._id.secondCategory}>
            <div className={st.secondLevel}>
              {slmenu._id.secondCategory}
            </div>
            <div className={cn(
              st.secondLevelBlock, {
                [st.secondLevelBlockOpen]: slmenu.isOpen
              }
            )}>
              {thirdLevelMenuRender(slmenu.pages, route)}
            </div>
          </div>
        ))}
      </>
    );
  };
  const thirdLevelMenuRender = (pages: IPageItem[], route: string) => {
    return (
      pages.map(page => (
        <a href={`/${route}/${page.alias}`}
           className={cn(st.thirdLevel, {
             [st.thirdLevelActive]: true
           })}

        >{page.category}</a>


      ))
    );
  };
  return (
    <div className={st.wrapper}>
      {firstLevelMenuRender()}
    </div>

  );
};
