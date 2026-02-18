import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {

    const {setUser} = useContext(UserContext);

    const user = {
        id: 1234,
        name: 'Max',
        email: 'max@max.com'
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button className='btn btn-outline-success' onClick={() => setUser(user)}>Login</button>
        </div>
    );
}
 
export default LoginScreen;