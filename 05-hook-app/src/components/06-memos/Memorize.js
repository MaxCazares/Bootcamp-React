import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter'
import '../css/styles.css';
import Small from './Small';

const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Counter <Small value={counter}/> </h1>
            <hr/>
            <button className='btn btn-outline-success' onClick={increment}>+1</button>
            <button className='btn btn-outline-warning ms-5' onClick={() => setShow(!show)}>Show / Hiden {JSON.stringify(show)}</button>
        </div>
    );
}
 
export default Memorize;