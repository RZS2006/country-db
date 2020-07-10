import React from 'react'
import { Link } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <nav className="nav">
                    <Link to="/" className="logo-container">
                        <h1 className="logo">CountryDB</h1>
                    </Link>
                    <Link to="/favorites" className="favorites-container">
                        Favorites
                        <span className="favorites-amount">2</span>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
