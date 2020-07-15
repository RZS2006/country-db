// --- CountryDB - Catalog.js ---

// Imports
import React from 'react';

import "./Catalog.css"

import CatalogItem from "./CatalogItem";

// Component
const Catalog = (props) => {
    return (
        <section className="catalog">
            {props.countries.map(country => { return <CatalogItem key={country.alpha3Code} country={country}/> })}
        </section>
    )
}

export default Catalog