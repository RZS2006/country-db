// --- CountryDB - DetailsHeader.js ---

// Imports
import React from 'react'

// Component
const DetailsHeader = (props) => {
    const { country, toggleFavoriteStatus } = props;

    return (
        <div className="details__header">
            <div className="details__name-container">
                <h2 className="details__name">{country.name}</h2>
                <small className="details__native-name">({country.nativeName})</small>
            </div>
            <div className={`details__favorite-status-container ${country.favorited ? "favorited" : "not-favorited"}`} onClick={() => {toggleFavoriteStatus(country.alpha3Code)}}>
                <small>{country.favorited ? "Favorited" : "Add to Favorites"}</small>
                <span className="details__favorite-status-dot"></span>
            </div>
        </div>
    )
}

export default DetailsHeader
