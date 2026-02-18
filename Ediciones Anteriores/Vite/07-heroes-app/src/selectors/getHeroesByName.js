import heroes from "../data/heroes";

const getHeroesByName = (name = '') => {

    // console.log('aiudaaaaaaaaaaaaaa');
    
    if(name === ''){
        return []
    }else{
        name = name.toLowerCase();
        return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name));
    }
}
 
export default getHeroesByName;
