import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const { counter, incrementValue, decrementValue } = useCounter(1)
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    return (
        <div className="flex flex-col w-1/2 mx-auto space-y-5">

            <h1>Información de Pokémon</h1>
            {isLoading && <h3>Cargando</h3>}
            <h2>{data?.name}</h2>

            <button
                onClick={() => decrementValue(1)}
                className="border-2 bg-red-800">
                Anterior
            </button>
            <button 
                onClick={() => incrementValue(1)}
                className="border-2 bg-green-800">
                Siguiente
            </button>

        </div>
    )
}
