import React, { useEffect, useReducer } from 'react';
import ToDoReducer from './ToDoReducer';
import ToDoList from './ToDoList';
import ToDoAdd from './ToDoAdd';
import '../css/styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

const ToDoApp = () => {

    const [todos, dispatch] = useReducer(ToDoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = ToDoid => {
        dispatch({
            type: 'delete',
            payload: ToDoid
        });
    };

    const handleToggle = ToDoid => {
        dispatch({
            type: 'toggle',
            payload: ToDoid,
        });
    };

    const handleAddToDo = newToDo => {
        dispatch({
            type: 'add',
            payload: newToDo,
        });
    }

    return (
        <div>
            <h1>ToDoApp ({todos.length})</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <ToDoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>

                <div className='col-5'>
                    <ToDoAdd handleAddToDo={handleAddToDo}/>
                </div>
            </div>
        </div>
    );
}

export default ToDoApp;