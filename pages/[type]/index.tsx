import { withLayout } from '../../layout/Layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { IMenuItem } from '../../interfaces/menu.interface';
import React from 'react';
import { firstLevelMenu } from '../../helpers';
import { ParsedUrlQuery } from 'querystring';

const Type = ({ firstCategory }: TypeProps): JSX.Element => {

    return (
        <div>
            TYPE PAGE:{ firstCategory }
        </div>
    );
};


export default withLayout(Type);
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(p => '/' + p.route),
        fallback: true
    };
};
export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    const firstCategoryItem = firstLevelMenu.find(menu => menu.route == params.type)
    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }
    //сервер ожидает POST , вместо get <WTF>
    const { data: menu } = await axios.post<IMenuItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
        { firstCategory: firstCategoryItem.id });
    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    };
};


type TypeProps = {
    menu: IMenuItem[],
    firstCategory: number
} & Record<string, unknown>
