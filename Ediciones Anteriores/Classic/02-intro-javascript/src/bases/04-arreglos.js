// arreglos

const arreglo = [1,2,3,4,5];
// arreglo.push(1);

let arreglo2 = [...arreglo, 6];
// arreglo2.push(6);

const arreglo3 = arreglo2.map(n => n * 2);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);