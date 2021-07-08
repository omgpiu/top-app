import React from 'react';
import { Button, Htag, Ptag } from '../componetns';


export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag="h1">Text</Htag>
            <Button appearance={ 'primary' } arrow={ 'right' }>Primary</Button>
            <Button appearance={ 'ghost' } arrow={ 'right' }>Ghost</Button>
            <Ptag size={ 'default' }>Bla Bla</Ptag>
        </>
    )
}
