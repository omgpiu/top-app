import React from 'react';
import { Button, Htag } from '../componetns';


export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag="h1">Text</Htag>
            <Button appearance={ 'primary' }>Primary</Button>
            <Button appearance={ 'ghost' }>Ghost</Button>
        </>
    )
}
