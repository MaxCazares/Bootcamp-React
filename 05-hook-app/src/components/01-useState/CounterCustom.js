import React, { Fragment } from 'react';
import useCounter from '../../hooks/useCounter';

import './counter.css';

const CounterCustom = () => {

    const {state, increment, decrement, reset} = useCounter(100);

    return (
        <Fragment>
            <h1>Counter Hook: {state}</h1>
            <hr/>
            <button className='btn btn-primary m-5' onClick={() => increment(2)}>+1</button>
            <button className='btn btn-primary m-5' onClick={reset}>Reset</button>
            <button className='btn btn-primary m-5' onClick={() => decrement(3)}>-1</button>
        </Fragment>
    );
}
 
export default CounterCustom;