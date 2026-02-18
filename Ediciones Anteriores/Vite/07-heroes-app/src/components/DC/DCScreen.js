import React from 'react';
import HeroList from '../Heroes/HeroList';

const DCScreen = () => {
    return (
        <>
            <h1>DC Screen</h1>
            <hr/>
            <HeroList publisher={'DC Comics'}/>
        </>
    );
}
 
export default DCScreen;