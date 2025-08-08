import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const initialState = {
        username: 'maxoCazares',
        email: 'maxoCaza@gmail.com'
    }
    const [formState, setFormState] = useState(initialState)
    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })

    }

    // useEffect(() => {
    //     console.log('Hey');
    // }, []);

    // useEffect(() => {
    //     console.log('formState cambió');
    // }, [formState]);

    // useEffect(() => {
    //     console.log('email cambió');
    // }, [email]);

    return (
        <div className="flex flex-col space-y-10 mx-auto w-1/2 p-4">
            <h1 className="text-4xl text-blue-500">Formulario simple</h1>

            <input
                type="text"
                className="border-b-2 shadow-2xl text-2xl text-blue-900"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            {
                (username == 'Maxo' && <Message/>)
            }

            <input
                type="email"
                className="border-b-2 shadow-2xl text-2xl text-blue-900"
                placeholder="max.cazares@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
        </div>
    )
}
