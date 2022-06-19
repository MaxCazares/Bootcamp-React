const personajes = ['Goku', 'Vegeta', 'trunks'];

const [p1, p3, p2] = personajes;

// console.log(p1);
// console.log(p2);
// console.log(p3);

const [, c] = personajes;
// console.log(c);

const usState = valor => [valor, () => console.log('Hola mundo')];

const [nombre, setNombre] = usState('goku');
// console.log(nombre);
// setNombre();