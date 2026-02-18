import { Fragment } from "react"
import { useCounter } from "../hooks/useCounter"

export const CounterWithCusotmHook = () => {

    const {counter, incrementValue, decrementValue, resetValue} = useCounter(100)
    const value = 11

    return (
        <Fragment>
            <h1 className="w-1/6 mx-auto m-5 bg-blue-300 shadow-2xl rounded-2xl p-3 text-4xl text-center">Counter: {counter}</h1>
            <div className="flex mx-auto w-1/5 space-x-10">
                <button
                    className="bg-red-400 mx-auto rounded-2xl shadow-2xl px-3 py-2 text-2xl text-center"
                    onClick={() => decrementValue(value)}
                > -{value}
                </button>
                <button
                    className="bg-red-400 mx-auto rounded-2xl shadow-2xl px-3 py-2 text-2xl text-center"
                    onClick={resetValue}
                > Reset
                </button>
                <button
                    className="bg-red-400 mx-auto rounded-2xl shadow-2xl px-3 py-2 text-2xl text-center"
                    onClick={() => incrementValue(value)}
                > +{value}
                </button>
            </div>
        </Fragment>
    )
}
