import { Heroes, type Hero, Owner } from "../data/heros.data"

export const getHeroById = (id: number): Hero | undefined => {
    return Heroes.find(hero => {
        return hero.id === id
    })
}

// console.log(getHeroById(45));

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    return Heroes.filter(hero => hero.owner === owner)
}

// console.log(getHeroesByOwner(Owner.Marvel));