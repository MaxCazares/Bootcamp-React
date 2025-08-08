import { Fragment, useState } from "react"

export const CounterApp = () => {

    const startValue = {
        counter1: 10,
        counter2: 20,
        counter3: 30,
    }
    const [counter, setCounter] = useState(startValue)
    const {counter1, counter2, counter3} = counter        

    return (
        <Fragment >
            <h1 className="w-1/6 mx-auto m-5 bg-blue-300 shadow-2xl rounded-2xl p-3 text-4xl text-center">Counter1: {counter1}</h1>
            <h1 className="w-1/6 mx-auto m-5 bg-blue-300 shadow-2xl rounded-2xl p-3 text-4xl text-center">Counter2: {counter2}</h1>
            <h1 className="w-1/6 mx-auto m-5 bg-blue-300 shadow-2xl rounded-2xl p-3 text-4xl text-center">Counter3: {counter3}</h1>

            <div className="flex mx-auto w-1/5 space-x-10">
                <button
                    className="bg-red-400 mx-auto rounded-2xl shadow-2xl px-3 py-2 text-2xl text-center"
                    onClick={() => setCounter({
                        ...counter,
                        counter1: counter1 + 1,
                    })}> 
                +1
                </button>
            </div>
        </Fragment>
    )
}
