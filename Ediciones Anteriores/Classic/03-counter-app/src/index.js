import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css'

const root = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp saludo='Hola Mundo' />, root);
ReactDOM.render(<CounterApp value={123} />, root);