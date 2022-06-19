import React, { Fragment, useEffect, useState } from 'react';
import Message from './Message';
import '../css/styles.css'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const {name, email} = formState;

    useEffect(() => {
        // console.log('Hey');
    }, []);

    useEffect(() => {
        // console.log('formState cambió');
    }, [formState]);

    useEffect(() => {
        // console.log('email cambió');
    }, [email]);

    const handleInputchange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    }

    return (
        <Fragment>
            <h1>useEffect</h1>
            <hr/>

            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control mb-3'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputchange}
                />

                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='nombre@gmail.com'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputchange}
                />
            </div>

            {(name === '123') && <Message/>}

        </Fragment>
    );
}
 
export default SimpleForm;