import React, { useContext, useState } from 'react';
import { AppContext } from '../../context';
import Link from 'next/link';
import st from './Menu.module.css';
import { FirstLevelMenuItem, IPageItem } from '../../interfaces/menu.interface';

import cn from 'classnames';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers';
import { motion, useReducedMotion } from 'framer-motion';


export const Menu: React.FC = (): JSX.Element => {
  const shouldReduceMotion = useReducedMotion();
  const [anounce, setAnounce] = useState<'closed' | 'opened' | undefined>();
  const router = useRouter();

  const {menu, setMenu, firstCategory} = useContext(AppContext);

  const variantsSecondLevel = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion ? {} : {
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
      opacity: shouldReduceMotion ? 1 : 0,
      height: 0,
    }
  };


  const openSecondLevel = (secondCategory: string) => () => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        setAnounce(m.isOpen ? 'closed' : 'opened');
        m.isOpen = !m.isOpen;
      }
      return m;
    }));

  };
  const openSecondLevelKey = (key: React.KeyboardEvent<HTMLButtonElement>, secondCategory: string) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      openSecondLevel(secondCategory)();
    }
  };
  const firstLevelMenuRender = () => {
    return (
      <ul className={st.firstLevelList}>
        {firstLevelMenu.map(flmenu => (
          <li key={flmenu.route} aria-expanded={flmenu.id == firstCategory}>
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

          </li>
        ))}
      </ul>
    );
  };
  const secondLevelMenuRender = (flmenu: FirstLevelMenuItem) => {
    return (
      <ul className={st.secondBlock}>
        {menu.map(slmenu => {
          if (slmenu.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {

            slmenu.isOpen = true;
          }
          return (
            <li key={slmenu._id.secondCategory}>
              <button className={st.secondLevel}
                      onKeyDown={(key) => openSecondLevelKey(key, slmenu._id.secondCategory)}
                      onClick={openSecondLevel(slmenu._id.secondCategory)}
                      aria-expanded={slmenu.isOpen}

              >

                {slmenu._id.secondCategory}
              </button>
              <motion.ul
                layout
                variants={variantsSecondLevel}
                initial={slmenu.isOpen ? 'visible' : 'hidden'}
                animate={slmenu.isOpen ? 'visible' : 'hidden'}
                className={st.secondLevelBlock}
              >
                {thirdLevelMenuRender(slmenu.pages, flmenu.route, slmenu.isOpen ?? false)}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    );
  };
  const thirdLevelMenuRender = (pages: IPageItem[], route: string, isOpened: boolean) => {
    return (pages.map(page => (
        <motion.li key={page.alias + page.category}
                   variants={variantsThirdLevel}

        >
          <Link href={`/${route}/${page.alias}`}>
            <a tabIndex={isOpened ? 0 : -1}
               className={cn(st.thirdLevel, {
                 [st.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath
               })}
               aria-current={`/${route}/${page.alias}` == router.asPath ? 'page' : false}
            > {page.category}</a>
          </Link>
        </motion.li>
      ))
    );
  };


  return (
    <nav className={st.wrapper} role='navigation'>
      {anounce && <span role='log' className='visuallyHidden'>{anounce === 'opened' ? 'развернуто' : 'свернуто'}</span>}
      {firstLevelMenuRender()}
    </nav>

  );
};
