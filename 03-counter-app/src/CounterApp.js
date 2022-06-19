import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const incrementarValue = () => {
        setCounter(counter + 1);
        // setCounter( c => c + 1 );
    }

    const deincrementarValue = () => setCounter(counter - 1);

    const resetValue = () => setCounter(value);

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={incrementarValue}>+1</button>
            <button onClick={resetValue}>Reset</button>
            <button onClick={deincrementarValue}>-1</button>
        </Fragment>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 10
}

export default CounterApp;