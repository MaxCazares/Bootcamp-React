import {getHeroesById} from './08-import-export.js'

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroesById(20);
//         resolve(heroe); 
//         reject('iudaaaa, no se encontro el heroe');
//     }, 2000);
// });

// promesa.then((heroe) => console.log(heroe))
//     .catch(error => console.error(error))

const getHeroesByIdAsync = id => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroesById(id);
            if(heroe){
                resolve(heroe); 
            }else{
                reject('iudaaaa, no se encontro el heroe');
            }
        }, 2000);
    });
}

getHeroesByIdAsync(20)
    .then(heroe => console.log(heroe))
    .catch(error => console.error(error))

getHeroesByIdAsync(2)
    .then(console.log)
    .catch(console.error)