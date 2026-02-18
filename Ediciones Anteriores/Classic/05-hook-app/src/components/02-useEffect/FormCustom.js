import React, {useEffect } from 'react';
import useForm from '../../hooks/useForm';
import '../css/styles.css'

const FormCustom = () => {

    const [values, handleInputchange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const {name, email, password} = values;

    useEffect(() => {
        console.log('el email cambio');
    }, [email]);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With Custom Hook</h1>
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
                    type='email'
                    name='email'
                    className='form-control mb-3'
                    placeholder='nombre@gmail.com'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputchange}
                />

                <input
                    type='password'
                    name='password'
                    className='form-control mb-3' 
                    placeholder='*******'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputchange}
                />
            </div>

            <button className='btn btn-primary' type='submit'>Enviar</button>
        </form>
    );
}
 
export default FormCustom;