// --- CountryDB - Home.js ---

// Imports
import React from 'react';

import "./Home.css"

import Search from "./Search";
import Catalog from "../Catalog/Catalog";

// Component
const Home = () => {
    return (
        <main className="home">
            <div className="container">
                <Search />
                <div className="home__divider"></div>
                <div className="home__results-container">
                    <div className="home__results-found-container">
                        <small>189 results found</small>
                    </div>
                    <Catalog />
                </div>
            </div>
        </main>
    )
}

export default Home
