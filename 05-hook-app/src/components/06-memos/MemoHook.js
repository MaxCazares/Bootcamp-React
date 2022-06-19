import React, { useMemo, useState } from 'react';
import procesoPesado from '../../helpers/Procesopesado';
import useCounter from '../../hooks/useCounter'
import '../css/styles.css';

const MemoHook = () => {

    const {counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter <small>{counter}</small></h3>
            <hr/>
            <p>{memoProcesoPesado}</p>
            <button className='btn btn-outline-success' onClick={increment}>+1</button>
            <button className='btn btn-outline-warning ms-5' onClick={() => setShow(!show)}>Show / Hiden {JSON.stringify(show)}</button>
        </div>
    );
}
 
export default MemoHook;