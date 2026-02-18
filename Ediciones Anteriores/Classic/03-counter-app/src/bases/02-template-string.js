// Template String

const nombre = 'Max';
const apellido = 'Cazares';

const nombreCompleto = `${nombre} ${apellido}`;

export function getSaludo(nombre = 'Gerardo'){
    return `Hola, soy ${nombre}`
}

// console.log(nombreCompleto);