import React, { useContext } from 'react';
import { AppContext } from '../../context';
import Link from 'next/link';
import st from './Menu.module.css';
import { FirstLevelMenuItem, IPageItem } from '../../interfaces/menu.interface';

import cn from 'classnames';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers';
import { motion } from 'framer-motion';


export const Menu: React.FC = (): JSX.Element => {

  const router = useRouter();

  const {menu, setMenu, firstCategory} = useContext(AppContext);

  const variantsSecondLevel = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hidden: {
      marginBottom: 0
    }
  };
  const variantsThirdLevel = {
    visible: {
      opacity: 1,
      //высота элемента
      height: 29,
    },
    hidden: {
      opacity: 0,
      height: 0,
    }
  };


  const openSecondLevel = (secondCategory: string) => () => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpen = !m.isOpen;
      }
      return m;
    }));

  };
  const openSecondLevelKey = (key: React.KeyboardEvent<HTMLDivElement>, secondCategory: string) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      openSecondLevel(secondCategory)();
    }
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
              <div className={st.secondLevel} tabIndex={0}
                   onKeyDown={(key) => openSecondLevelKey(key, slmenu._id.secondCategory)}
                   onClick={openSecondLevel(slmenu._id.secondCategory)}>
                {slmenu._id.secondCategory}
              </div>
              <motion.div
                layout
                variants={variantsSecondLevel}
                initial={slmenu.isOpen ? 'visible' : 'hidden'}
                animate={slmenu.isOpen ? 'visible' : 'hidden'}
                className={st.secondLevelBlock}
              >
                {thirdLevelMenuRender(slmenu.pages, flmenu.route, slmenu.isOpen ?? false)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };
  const thirdLevelMenuRender = (pages: IPageItem[], route: string, isOpened: boolean) => {
    return (
      <>
        {pages.map(page => (
          <motion.div key={page.alias + page.category}
                      variants={variantsThirdLevel}
            // initial={'hidden'}

          >
            <Link href={`/${route}/${page.alias}`}>
              <a tabIndex={isOpened ? 0 : -1}
                 className={cn(st.thirdLevel, {
                   [st.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath
                 })}

              > {page.category}</a>
            </Link>
          </motion.div>
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
