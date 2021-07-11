import React, { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import st from './Layout.module.css'


const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {

    return (
        <div className={ st.wrapper }>
            <Header className={ st.header }/>
            <Sidebar className={ st.sidebar } children={ <div>123</div> }/>
            <div className={ st.body }>
                { children }
            </div>
            <Footer className={ st.footer }/>
        </div>
    )
}
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component { ...props } />
            </Layout>
        )
    }

}
