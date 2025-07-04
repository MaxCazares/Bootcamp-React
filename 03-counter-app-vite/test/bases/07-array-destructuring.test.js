import { retornarArreglo } from "../../src/bases/07-array-destructuring"


describe('pruebas de 07-array-destructuring', () => {
    test('retornarArreglo', () => {

        const testArray = ['abc', 123]
        const [letters, numbers] = retornarArreglo()
                
        expect(typeof testArray[0]).toBe(typeof letters)
        expect(typeof testArray[1]).toBe(typeof numbers)

    })
})