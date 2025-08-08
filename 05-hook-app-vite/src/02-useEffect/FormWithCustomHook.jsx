import { useForm } from "../hooks/useForm"
import { Message } from "./Message"

export const FormWithCustomHook = () => {

    const initialState = {
        username: '',
        email: '',
        password: ''
    }
    const {formState, onInputChange, onResetForm} = useForm(initialState)
    const {username, email, password} = formState

    return (
        <div className="flex flex-col space-y-10 mx-auto w-1/2 p-4">
            <h1 className="text-4xl text-blue-500">Formulario simple</h1>

            <input
                type="text"
                className="border-b-2 shadow-2xl text-2xl text-blue-900"
                placeholder="user name"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            {
                (username == 'Maxo' && <Message />)
            }

            <input
                type="email"
                className="border-b-2 shadow-2xl text-2xl text-blue-900"
                placeholder="user@mail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="border-b-2 shadow-2xl text-2xl text-blue-900"
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={onInputChange}
            />

            <button 
                className="w-1/4 mx-auto p-2 rounded-xl shadow-2xl bg-amber-600 hover:bg-blue-400"
                onClick={onResetForm} >
                Limpiar formulario
            </button>
        </div>
    )
}
