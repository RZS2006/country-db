import React from 'react'
import { Link } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-container">
                    <div className="logo-container">   
                        <Link to="/">
                            <h1 className="logo">CountryDB</h1>
                        </Link>
                    </div>
                    <div className="favorites-container">
                        <Link to="/favorites">
                            <small>Favorites</small>
                            <span className="favorites-amount-badge">2</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
