const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const {nombre, edad, clave} = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const imprimirInformacion = ({nombre, edad, clave, ragno = 'Capitan'}) => {
    console.log(nombre);
    console.log(edad);
    console.log(clave);
}

// imprimirInformacion(persona);

const usContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 45.235,
            lng: -5698.33
        }
    }
}

// const avenger = useContext(persona);
// console.log(avenger);

const {nombreClave, anios, latlng:{lat, lng}} = usContext(persona);
console.log(nombreClave, anios, lat, lng);