import React, { Fragment, useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './layout.css'

const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pQuote = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pQuote.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>Layout Effect | Breaking Bad Quotes</h1>
            <hr />
            
            <Fragment>
                <blockquote className='blockquote text-end'>
                    <p ref={pQuote} className='mb-3'>{quote}</p>
                </blockquote>

                <p>{JSON.stringify(boxSize, null, 3)}</p>

                <button className='btn btn-success' onClick={increment}>
                    Next Quote
                </button>
            </Fragment>
        </div>
    );
}

export default LayoutEffect;