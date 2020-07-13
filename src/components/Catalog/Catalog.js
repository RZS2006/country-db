// --- CountryDB - Catalog.js ---

// Imports
import React from 'react';

import "./Catalog.css"

import CatalogItem from "./CatalogItem";

// Component
const Catalog = () => {
    return (
        <section className="catalog">
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
        </section>
    )
}

export default Catalog