import React from "react";
import ReactDOM from "react-dom/client";

import './styles.css'

import {App} from './HelloWorldApp.jsx'     
import {FirstApp} from './FirstApp.jsx'
import {CounterApp} from './CounterApp.jsx'


ReactDOM.createRoot((document.getElementById('root'))).render(
    <React.StrictMode>
        {/* <App/>
        <FirstApp title="Max" factorial={10}/> */}
        <CounterApp value={123}/>
    </React.StrictMode>
)

