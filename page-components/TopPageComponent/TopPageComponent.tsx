import React from 'react';
import { ITopPageComponent } from './TopPageComponent.props';

export const TopPageComponent = ({ products }: ITopPageComponent): JSX.Element => {

    return (
        <>
            { products && products.length }
        </>
    );
};


