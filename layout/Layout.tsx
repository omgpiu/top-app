import React, { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';


const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {

    return (
        <>
            <Header children={ <div>123</div> }/>
            <div>
                <Sidebar children={ <div>123</div> }/>
                <div>
                    { children }
                </div>
            </div>
            <Footer children={ <div>123</div> }/>
        </>
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
