// --- CountryDB - CatalogItem.js ---

// Imports
import React from 'react'
import { Link } from "react-router-dom";

// Component
const CatalogItem = (props) => {
    const { country, toggleFavoriteStatus } = props;

    return (
        <Link to={`/countries/${country.alpha3Code}`}>
            <div className="catalog-item">
                <img className="catalog-item__flag" src={country.flag} alt={`Flag of ${country.name}`}/>
                <div className="catalog-item__name-container">
                    <h2 className={`catalog-item__name ${country.name.length > 20 ? "long" : "short"}`}>{country.name}</h2>
                    <small className="catalog-item__native-name">({country.nativeName})</small>
                </div>
                <div className="catalog-item__favorite-status-container">
                    {country.favorited && <small>Favorited</small>}
                    <span className={`catalog-item__favorite-status-dot ${country.favorited ? "favorited" : "not-favorited"}`}
                          onClick={(e) => {
                              e.preventDefault()
                              toggleFavoriteStatus(country.alpha3Code)}}></span>
                </div>
            </div>
        </Link>
    )
}

export default CatalogItem