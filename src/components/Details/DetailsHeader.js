// --- CountryDB - DetailsHeader.js ---

// Imports
import React from 'react'

// Component
const DetailsHeader = () => {
    return (
        <div className="details__header">
            <div className="details__name-container">
                <h2 className="details__name">Germany</h2>
                <small className="details__native-name">(Deutschland)</small>
            </div>
            <div className="details__favorite-status-container">
                <small>Favorite</small>
                <span className="details__favorite-status-dot"></span>
            </div>
        </div>
    )
}

export default DetailsHeader
