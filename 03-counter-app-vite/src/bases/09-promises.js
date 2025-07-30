import {getHeroesById} from './08-import-export'

export const getHeroesByIdAsync = id => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroesById(id);
            if(heroe){
                resolve(heroe); 
            }else{
                reject('iudaaaa, no se encontro el heroe');
            }
        }, 1000);
    });
};