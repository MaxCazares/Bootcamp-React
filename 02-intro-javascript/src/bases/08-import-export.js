import heroes from "./data/heroes.js";

console.log(heroes);

export const getHeroesById = id => heroes.find(heroe => heroe.id === id);
console.log(getHeroesById(2));

const getHeroesByOwner = owner => heroes.filter(heroe => heroe.owner === owner);
console.log(getHeroesByOwner('Marvel'));