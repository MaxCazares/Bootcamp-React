const activo = !true;
let mensaje;

if(activo){
    mensaje = 'Activo'
}else{
    mensaje = 'Inactivo'
}

mensaje = activo ? 'Activo' : 'Inactivo';
mensaje = activo ? 'Activo' : null;

mensaje = activo && 'Activo';

console.log(mensaje);