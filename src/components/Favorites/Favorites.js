// --- CountryDB - Favorites.js ---

// Imports
import React from 'react'

import "./Favorites.css"

import Banner from "../Banner/Banner";
import Catalog from "../Catalog/Catalog"

// Component
const Favorites = (props) => {
    const { countries, toggleFavoriteStatus } = props

    return (
        <main className="favorites">
            <Banner />
            <div className="container">
                <div className="favorites__title-container">
                    <h2 className="favorites__title">Favorites</h2>
                </div>
                <div className="favorites__divider"></div>
                <Catalog 
                countries={countries}
                toggleFavoriteStatus={toggleFavoriteStatus} />
            </div>
        </main>
    )
}

export default Favorites
