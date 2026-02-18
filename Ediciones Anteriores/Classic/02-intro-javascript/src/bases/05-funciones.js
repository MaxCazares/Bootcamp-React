const saludar = nombre => `Hola, soy ${nombre}`;

// saludar = 30;
console.log(saludar('Goku'));

// function getUsuarioActivo(nombre){
//     return{
//         uid: 'abc567',
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo('Max');
// console.log(usuarioActivo);

const getUsuarioActivo = nombre => ({
    uid: 'abc567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Max');
console.log(usuarioActivo);