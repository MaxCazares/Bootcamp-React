import { Fragment } from "react"
import PropTypes from 'prop-types'

const person = {
    'Name': 'Max',
    'Age': 25
}

const getFactorialNumber = number => {
    var factorial = 1;
    for (let i = 1; i <= number; i++) 
        factorial *= i;

    return factorial
}

export const FirstApp = ({title = 'React', factorial = 1}) => {
    return (
    <Fragment>
        <h2>{title}'s First App</h2>
        <code>{JSON.stringify(person)}</code>
        <p>{getFactorialNumber(factorial)}</p>
    </Fragment>
    )
}
