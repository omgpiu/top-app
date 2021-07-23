import React, { useContext } from 'react';
import { AppContext } from '../../context';
import Link from 'next/link';
import st from './Menu.module.css';
import { FirstLevelMenuItem, IPageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/top-page.interface';
import { Book, Box, Cloud, Hat } from './icons';
import cn from 'classnames';
import { useRouter } from 'next/router';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {id: TopLevelCategory.Courses, title: 'Курсы', icon: <Hat />, route: 'courses'},
  {id: TopLevelCategory.Services, title: 'Сервисы', icon: <Cloud />, route: 'services'},
  {id: TopLevelCategory.Books, title: 'Книги', icon: <Book />, route: 'books'},
  {id: TopLevelCategory.Products, title: 'Товары', icon: <Box />, route: 'products'},


];

export const Menu: React.FC = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => () => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpen = !m.isOpen;
      }
      return m;
    }));

  };

  const firstLevelMenuRender = () => {
    return (
      <>
        {firstLevelMenu.map(flmenu => (
          <div key={flmenu.route}>
            <Link href={`/${flmenu.route}`}>
              <a>
                <div className={cn(st.firstLevel, {
                  [st.firstLevelActive]: flmenu.id == firstCategory
                })}>
                  {flmenu.icon}
                  <span>{flmenu.title}</span>
                </div>
              </a>
            </Link>
            {
              flmenu.id === firstCategory && secondLevelMenuRender(flmenu)
            }

          </div>
        ))}
      </>
    );
  };
  const secondLevelMenuRender = (flmenu: FirstLevelMenuItem) => {
    return (
      <div className={st.secondBlock}>
        {menu.map(slmenu => {
          if (slmenu.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {

            slmenu.isOpen = true;
          }
          return (
            <div key={slmenu._id.secondCategory}>
              <div className={st.secondLevel} onClick={openSecondLevel(slmenu._id.secondCategory)}>
                {slmenu._id.secondCategory}
              </div>
              <div className={cn(st.secondLevelBlock, {
                [st.secondLevelBlockOpen]: slmenu.isOpen
              })}>
                {thirdLevelMenuRender(slmenu.pages, flmenu.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const thirdLevelMenuRender = (pages: IPageItem[], route: string) => {
    return (
      <>
        {pages.map(page => (
          <Link key={page.alias + page.category} href={`/${route}/${page.alias}`}>
            <a
              className={cn(st.thirdLevel, {
                [st.thirdLevelActive]: false
              })}

            > {page.category}</a>
          </Link>
        ))}
      </>
    );
  };


  return (
    <div className={st.wrapper}>
      {firstLevelMenuRender()}
    </div>

  );
};
