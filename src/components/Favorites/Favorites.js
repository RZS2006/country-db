import React from 'react'

import "./Favorites.css"

import FavoriteItem from "./FavoriteItem";

const Favorites = () => {
    return (
        <div className="favorites">
            <div className="container">
                <div className="title-container">
                    <span>Favorites</span>
                </div>
                <div className="results-container">
                    <FavoriteItem />
                    <FavoriteItem />
                    <FavoriteItem />
                </div>
            </div>
        </div>
    )
}

export default Favorites
