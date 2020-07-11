import React from 'react';

import "./Home.css"

import Search from "./Search";
import Catalog from "../Catalog/Catalog";

const Home = () => {
    return (
        <main className="home">
            <div className="container">
                <Search />
                <div className="divider"></div>
                <div className="results-container">
                    <div className="results-found-container">
                        <small>189 results found</small>
                    </div>
                    <Catalog />
                </div>
            </div>
        </main>
    )
}

export default Home
