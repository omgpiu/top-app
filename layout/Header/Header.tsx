import React, { useEffect, useState } from 'react';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import HeaderCSS from './Header.module.css';
import { LogoOWL } from '../../helpers/logo';
import st from '../Sidebar/Sidebar.module.css';
import { ButtonIcon } from '../../componetns/ButtonIcon/ButtonIcon';
import { motion, useReducedMotion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { useRouter } from 'next/router';

export const Header: React.FC<HeaderProps> = ({className, ...props}): JSX.Element => {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const onClickHandler = (value: boolean) => () => setIsOpened(value);
  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: '100%'
    }
  };
  useEffect(() => {
    setIsOpened(false);
  }, [router]);
  return (
    <header className={cn(className, HeaderCSS.header)}{...props}>
      <LogoOWL className={st.logo} />
      <ButtonIcon icon='menu' appearance='white' onClick={onClickHandler(true)} />
      <motion.div className={HeaderCSS.mobileMenu}
                  variants={variants}
                  initial='closed'
                  animate={isOpened ? 'opened' : 'closed'}

      >
        <Sidebar />
        <ButtonIcon className={HeaderCSS.menuClose} icon='close' appearance='white' onClick={onClickHandler(false)} />
      </motion.div>
    </header>
  );
};
