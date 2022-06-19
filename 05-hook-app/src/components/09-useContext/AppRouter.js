import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import NavBar from './NavBar';

import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
  

const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <div className='container mt-5'>
                    <Routes>
                        <Route exact path='/' element={<HomeScreen/>}/>
                        <Route exact path='/about' element={<AboutScreen/>}/>
                        <Route exact path='/login' element={<LoginScreen/>}/>
                        <Route path='*' element={<Navigate to='/'/> }/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
 
export default AppRouter;