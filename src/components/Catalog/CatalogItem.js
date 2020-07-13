// --- CountryDB - CatalogItem.js ---

// Imports
import React from 'react'
import { Link } from "react-router-dom";

// Component
const CatalogItem = () => {
    return (
        <Link to="/countries/de">
            <div className="catalog-item">
                <img className="catalog-item__flag" src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="flag of Germany"/>
                <div className="catalog-item__name-container">
                    <h2 className="catalog-item__name">Germany</h2>
                    <small className="catalog-item__native-name">(Deutschland)</small>
                </div>
                <div className="catalog-item__favorite-status-container">
                    <small>Favorite</small>
                    <span className="catalog-item__favorite-status-dot"></span>
                </div>
            </div>
        </Link>
    )
}

export default CatalogItem
