import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({todos, handleToggle, handleDelete}) => {
    return (
        <ul className='list-group '>
            {
                todos.map((todo, i) => (
                    <ToDoListItem 
                        key={todo.id} 
                        todo={todo} 
                        i={i} 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle}
                    />
                ))
            }
        </ul>
    );
}
 
export default ToDoList;