import React from 'react';

import "./Catalog.css"

import CatalogItem from "./CatalogItem";

const Catalog = () => {
    return (
        <div className="catalog">
            <div className="results-found-container">
                <span>189 results found</span>
            </div>
            <div className="results-container">
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
            </div>
        </div>
    )
}

export default Catalog