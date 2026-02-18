import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';
import '../css/styles.css';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const incrementar = () => setCounter(counter + 1);

    const incrementar = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);
    

    return (
        <div>
            <h1>useCallback Hook {counter}</h1>
            <hr/>
            <ShowIncrement increment={incrementar}/>
        </div>
    );
}
 
export default CallbackHook;