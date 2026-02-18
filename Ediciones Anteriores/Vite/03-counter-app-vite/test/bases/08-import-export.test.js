import heroes from "./data/heroes";
import { getHeroesById, getHeroesByOwner } from "../../src/bases/08-import-export"

describe('pruebas en 08-import-export', () => {
    test('getHeroesById', () => {
        const id = 2
        const hero = getHeroesById(id)

        expect(hero).toEqual({
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        })

    })

    test('getHeroesByOwner con owner = DC', () => {
        const owner = 'DC'
        const DCHeroes = heroes.filter(h => h.owner === owner)
        const heroesByOwner = getHeroesByOwner(owner)
        expect(DCHeroes.length).toBe(heroesByOwner.length)
    })

})