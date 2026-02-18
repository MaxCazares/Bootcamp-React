import { getHeroesByIdAsync } from "../../src/bases/09-promises"

describe('pruebas en 09-promises', () => {
    test('getHeroesByIdAsync debe de regresar un heroe', (done) => {

        const id = 1
        getHeroesByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })

                done()
                
            })

    })
})