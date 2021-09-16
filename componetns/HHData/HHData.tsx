import { HHDataProps } from './HHData.props';

import st from './HHData.module.css'
import RateIcon from './rate.svg'
import { Card } from '../Card/Card';
import React from 'react';
import { priceRu } from '../../helpers';

export const HHData = ({ count,juniorSalary,middleSalary,seniorSalary }: HHDataProps): JSX.Element => {
    return (
        <div className={ st.hh }>
            <Card className={ st.count }>
                <div className={ st.title }>Всего вакансий</div>
                <div className={ st.countValue }>{ count }</div>
            </Card>
            <Card className={st.salary}>
                <div>
                    <div className={ st.title }>Начальный</div>
                    <div className={ st.salaryValue }>{ priceRu(juniorSalary) }</div>
                    <div className={ st.salaryRate }>
                        <RateIcon className={ st.filled }/>
                        <RateIcon/>
                        <RateIcon/>
                    </div>
                </div>

                <div>
                    <div className={ st.title }>Средний</div>
                    <div className={ st.salaryValue }>{ priceRu(middleSalary) }</div>
                    <div className={ st.salaryRate }>
                        <RateIcon className={ st.filled }/>
                        <RateIcon className={ st.filled }/>
                        <RateIcon/>
                    </div>
                </div>
                <div>
                    <div className={ st.title }>Профессионал</div>
                    <div className={ st.salaryValue }>{ priceRu(seniorSalary) }</div>
                    <div className={ st.salaryRate }>
                        <RateIcon className={ st.filled }/>
                        <RateIcon className={ st.filled }/>
                        <RateIcon className={ st.filled }/>
                    </div>
                </div>
            </Card>
        </div>
    );
};
