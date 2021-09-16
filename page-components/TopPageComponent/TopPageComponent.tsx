import React from 'react';
import { ITopPageComponent } from './TopPageComponent.props';
import { Htag, Tag } from '../../componetns';
import st from './TopPageComponent.module.css'
import { HHData } from '../../componetns/HHData/HHData';
import { TopLevelCategory } from '../../interfaces/top-page.interface';
import { Advatages } from '../../componetns/Advantages/Advanages';

export const TopPageComponent = ({ page, products, firstCategory }: ITopPageComponent): JSX.Element => {

    return (
        <div className={ st.wrapper }>
            <div className={ st.title }>
                <Htag tag="h1">{ page.title }</Htag>
                { products && <Tag color="grey" size="m">{ products.length }</Tag> }
                <span>Сортировка</span>
                <div>
                    { products && products.map(p =>
                        (<div key={ p._id }>
                            { p.title }
                        </div>)) }
                </div>
            </div>
            <div className={ st.HHtitle }>
                <Htag tag="h2">Вакансии - { page.category }</Htag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            { firstCategory == TopLevelCategory.Courses && <HHData { ...page.hh } /> }
        <div>
          <Advatages data={[]}/>
        </div>
        </div>
    );
};


