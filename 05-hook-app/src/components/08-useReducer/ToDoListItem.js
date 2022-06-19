import React from 'react';

const ToDoListItem = ({todo, i, handleToggle, handleDelete}) => {
    return (
        <li key={todo.id} className='list-group-item'>
            <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}>
                {i + 1} - {todo.desc} 
            </p>
            <button className='btn btn-outline-danger' onClick={() => handleDelete(todo.id)}>
                Borrar
            </button>
        </li>
    );
}
 
export default ToDoListItem;