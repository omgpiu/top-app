import React, { FunctionComponent, useRef, useState } from 'react';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import st from './Layout.module.css';
import { AppContextProvider, IAppContext } from '../context';
import { Up } from '../componetns';
import cn from 'classnames';


const Layout: React.FC<LayoutProps> = ({children}): JSX.Element => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
  const onFocusHandler = () => setIsDisplayed(true);
  const onKeyDownHandler = (key: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      bodyRef.current?.focus();

    }
    setIsDisplayed(false);
  };
  return (
    <div className={st.wrapper}>
      <a
        onFocus={onFocusHandler}
        onKeyDown={onKeyDownHandler}
        tabIndex={1}
        className={cn(st.skipLink, {
          [st.displayed]: isDisplayed
        })}>Сразу к содержанию</a>
      <Header className={st.header} />
      <Sidebar className={st.sidebar} children={<div>123</div>} />
      <main className={st.body} ref={bodyRef} tabIndex={0} role='main'>
        {children}
      </main>
      <Footer className={st.footer} />
      <Up />
    </div>
  );
};
export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };

};
