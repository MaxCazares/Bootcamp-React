const { getSaludo } = require("../src/bases/02-template-string")

describe('pruebas de 02-template-string', () => {
    
    test('getSaludo debe retornar Hola Max', () => { 
        const name = 'Max'   
        const message = getSaludo(name)

        expect(message). toBe(`Hola, soy ${name}`)
    })
})