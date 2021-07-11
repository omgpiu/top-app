import React from 'react';

import { FooterProps } from './Footer.props';
import st from './Footer.module.css'
import { classNameCheck } from '../../helpers';
import cn from 'classnames'
import format from 'date-fns/format'

export const Footer: React.FC<FooterProps> = ({ className, ...props }): JSX.Element => {

    return (
        <footer { ...props } className={ cn(classNameCheck(className), st.wrapper) }>
            <div className={ st.rights }>Omgpiu © 2019 - { format(new Date(), 'yyyy') } Все права защищены</div>
            <a href="https://google.com" target="_blank" className={ st.agreement }>Пользовательское соглашение</a>
            <a href="https://google.com" target="_blank" className={ st.politics }>Политика конфиденциальности</a>
        </footer>
    )
}
