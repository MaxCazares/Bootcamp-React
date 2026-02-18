import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand">useContext</a>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                        <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;