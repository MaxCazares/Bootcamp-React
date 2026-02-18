import { Fragment, useState } from "react"

export const CounterApp = ({value = 0}) => {

    const [counter, setCounter] = useState(value)

    const handleSubstract = () => setCounter(counter - 1)
    const handleReset = () => setCounter(value)
    const handleAdd = () => setCounter(counter + 1)

    return (
        <Fragment>
            <h1>Counter App</h1>
            <h2 data-testid='test-counter'>{counter}</h2>
            <button aria-label="btn-decrease" onClick={handleSubstract}>-1</button>
            <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
            <button aria-label="btn-increase" onClick={handleAdd}>+1</button>
        </Fragment>
    )
}