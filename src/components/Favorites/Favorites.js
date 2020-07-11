import React from 'react'

import "./Favorites.css"

import Catalog from "../Catalog/Catalog"

const Favorites = () => {
    return (
        <main className="favorites">
            <div className="container">
                <div className="title-container">
                    <h2 className="title">Favorites</h2>
                </div>
                <Catalog />
            </div>
        </main>
    )
}

export default Favorites
