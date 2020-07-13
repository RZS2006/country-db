// --- CountryDB - Favorites.js ---

// Imports
import React from 'react'

import "./Favorites.css"

import Banner from "../Banner/Banner";
import Catalog from "../Catalog/Catalog"

// Component
const Favorites = () => {
    return (
        <main className="favorites">
            <Banner />
            <div className="container">
                <div className="favorites__title-container">
                    <h2 className="favorites__title">Favorites</h2>
                </div>
                <div className="favorites__divider"></div>
                <Catalog />
            </div>
        </main>
    )
}

export default Favorites
