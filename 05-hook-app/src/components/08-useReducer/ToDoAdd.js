import React, { Fragment } from 'react';
import useForm from '../../hooks/useForm';

const ToDoAdd = ({handleAddToDo}) => {

    const [{ description }, handleInputchange, reset] = useForm({
        description: '',
    });

    const handleSubmit = e => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        handleAddToDo(newToDo);

        reset();

    };

    return (
        <Fragment>
            <h4>Agregar ToDo</h4>
            <hr />

            <form className='d-grid gap-2' onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='description' 
                    lassName='form-control' 
                    value={description}
                    placeholder='Aprender MongoDB...' 
                    autoComplete='off' 
                    onChange={handleInputchange}
                />

                <button className='btn btn-outline-info btn-block mt-1' type='submit'>
                    Agregar
                </button>
                
            </form>
        </Fragment>
    );
}
 
export default ToDoAdd;