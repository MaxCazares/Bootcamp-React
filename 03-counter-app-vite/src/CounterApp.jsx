import { Fragment, useState } from "react"

export const CounterApp = ({value = 0}) => {

    const [counter, setCounter] = useState(value)

    const handleSubstract = () => setCounter(counter - 1)
    const handleReset = () => setCounter(value)
    const handleAdd = () => setCounter(counter + 1)

    return (
        <Fragment>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleAdd}>+1</button>
        </Fragment>
    )
}