// --- CountryDB - Catalog.js ---

// Imports
import React from 'react';

import "./Catalog.css"

import CatalogItem from "./CatalogItem";

// Component
const Catalog = (props) => {
    const { countries, noResultsMessage } = props;

    return (
        <section className="catalog">
            {countries.length > 0 ? countries.map(country => <CatalogItem key={country.alpha3Code} country={country} /> )
            : <CatalogNoResults message={noResultsMessage}/>}
        </section>
    )
}

const CatalogNoResults = (props) => {
    return (
        <div className="catalog__no-results-container">
            <span className="catalog__no-results">{props.message}</span>
        </div>
    )
}

export default Catalog