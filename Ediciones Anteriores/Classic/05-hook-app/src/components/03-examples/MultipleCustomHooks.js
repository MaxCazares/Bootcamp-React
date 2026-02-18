import React, { Fragment } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import '../css/styles.css'

const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {loading ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
                :
                (
                    <Fragment>
                        <blockquote className='blockquote text-end'>
                            <p className='mb-3'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>

                        {/* <button className='btn btn-success' onClick={increment}>
                            Next Quote
                        </button> */}
                    </Fragment>
                )
            }
        <button className='btn btn-success' onClick={increment}>
            Next Quote
        </button>
        </div>
    );
}

export default MultipleCustomHooks;