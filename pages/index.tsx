import React, { useState } from 'react';
import { Button, Htag, Ptag, Rating } from '../componetns';
import { withLayout } from '../layout/Layout';


function Home(): JSX.Element {
    const [rating, setRating] = useState(4)
    return (
        <>
            <Htag tag="h1">Text</Htag>
            <Button appearance={ 'primary' } arrow={ 'right' }>Primary</Button>
            <Button appearance={ 'ghost' } arrow={ 'right' }>Ghost</Button>
            <Ptag size={ 'default' }>Bla Bla</Ptag>
            <Rating rating={ rating } isEditable setRating={ setRating }/>
        </>
    )
}

export default withLayout(Home)
