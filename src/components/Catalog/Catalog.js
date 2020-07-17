// --- CountryDB - Catalog.js ---

// Imports
import React from 'react';

import "./Catalog.css"

import CatalogItem from "./CatalogItem";

// Component
const Catalog = (props) => {
    const { countries } = props;

    return (
        <section className="catalog">
            {countries.map(country => { return <CatalogItem 
                                                key={country.alpha3Code} 
                                                country={country} /> })}
        </section>
    )
}

export default Catalog