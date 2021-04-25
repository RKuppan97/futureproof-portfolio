import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'
import BackButton from '../BackButton'

const NavBar = () => {
    return (
        <header className="nav-head">
            <nav className="nav-links">
                <NavLink className="home-link" exact to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/about">About</NavLink>
                <NavLink activeClassName="active" to="/projects">Projects</NavLink>
                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                <BackButton />
            </nav>
        </header>
    );
}

export default NavBar;