import React from 'react';
import ReactDOM from 'react-dom';
// import CounterApp from './components/01-useState/CounterApp';
// import HookApp from './HookApp';
// import CounterCustom from './components/01-useState/CounterCustom';
// import SimpleForm from './components/02-useEffect/SimpleForm';
// import FormCustom from './components/02-useEffect/FormCustom';
// import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
// import FocusScreen from './components/04-useRef/FocusScreen';
// import RealExampleRef from './components/04-useRef/RealExampleRef';
// import LayoutEffect from './components/05-useLayoutEffect/LayoutEffect';
// import Memorize from './components/Memos/Memorize';
// import MemoHook from './components/Memos/MemoHook';
// import CallbackHook from './components/06-memos/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import ToDoApp from './components/08-useReducer/ToDoApp';
import MainApp from './components/09-useContext/MainApp';



ReactDOM.render(
    <React.StrictMode>
        <MainApp />
    </React.StrictMode>,
    document.querySelector('#root')
);

// import './components/08-useReducer/intro-reducer'