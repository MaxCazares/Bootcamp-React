// literal object

const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Nueva York',
        zip: 45646
    }
};

console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);