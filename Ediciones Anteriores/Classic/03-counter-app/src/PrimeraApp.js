import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Valores por defecto en la desestructuración de los props
// const PrimeraApp = ({saludo = 'Hola Mundo'}) => {
const PrimeraApp = ({saludo, subtitulo}) => {

    // No es eficiente
    // if(!saludo){
    //     throw new Error('Es necesario el saludo');
    // }

    return ( 
        <Fragment>
            <h1>{saludo}!!!</h1>
            <p>{subtitulo}</p>
        </Fragment>
     );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Esta es mi primera aplicación'
}
 
export default PrimeraApp;