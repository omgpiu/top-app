import React, { useEffect } from 'react';
import UpCSS from './Up.module.css';
import { useScrollY } from '../../helpers/useScrollY';
import { motion, useAnimation } from 'framer-motion';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    controls.start({opacity: y / document.body.scrollHeight});
  }, [y, controls]);
  return (
    <motion.div
      className={UpCSS.wrapper}
      animate={controls}
      initial={{opacity: 0}}
    >
      <ButtonIcon icon='up' appearance='primary' onClick={scrollToTop} />
    </motion.div>

  );
};
