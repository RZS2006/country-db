import React from 'react'
import { Link } from "react-router-dom";

const CatalogItem = () => {
    return (
        <Link to="/countries/de">
            <div className="catalog-item">
                <img className="country-flag" src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="flag of Germany"/>
                <h2 className="country-name">Germany <small className="country-native-name">(Deutschland)</small> </h2>
                <div className="country-favorite-status">
                    <small>Favorite</small>
                    <span className="country-favorite-status-dot"></span>
                </div>
            </div>
        </Link>
    )
}

export default CatalogItem
