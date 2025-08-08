import { useEffect } from "react"
import { useState } from "react"

export const useFetch = (url) => {

    const initialState = {
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    }
    const [state, setState] = useState(initialState)

    useEffect(() => {
        getFetch()
    }, [url])

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    const getFetch = async () => {
        setLoadingState()
        const resp = await fetch(url)

        await new Promise(resolve => setTimeout(resolve, 500))

        if(!resp.ok){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            })
            return
        }

        const data = await resp.json()
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}