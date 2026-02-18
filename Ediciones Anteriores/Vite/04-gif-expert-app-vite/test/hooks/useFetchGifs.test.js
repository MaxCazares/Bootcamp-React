const { renderHook, waitFor } = require("@testing-library/react")
const { useFetchGifs } = require("../../src/hooks/useFetchGifs")

describe('Pruebas en useFetchGifs', () => {
    test('Debe de regresar el estado inicial', () => {
        
        const {result} = renderHook(() => useFetchGifs('Vegeta'))
        const {images, isLoading} = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
        
    })
    test('Debe de regresar un arreglo de imagenes y el isLoading en false', async() => {
        
        const {result} = renderHook(() => useFetchGifs('Vegeta'))
        
        await waitFor(
            () => expect(result.current.images.length).toBe(0)
        )
        
        const {images, isLoading} = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
        
    })
})