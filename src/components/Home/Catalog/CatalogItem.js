import React from 'react'
import { Link } from "react-router-dom";

const CatalogItem = () => {
    return (
        <Link to="/countries/de" className="catalog-item">
            <img className="country-image "src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="Germany Flag"/>
            <span className="country-name">Germany <span className="country-native-name">(Deutschland)</span> </span>
            <div className="country-favorite-status">
                Favorite
                <span></span>
            </div>
        </Link>
    )
}

export default CatalogItem
