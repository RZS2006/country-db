// --- CountryDB - Home.js ---

// Imports
import React, { useState, useEffect } from 'react';

import "./Home.css"

import Search from "./Search";
import Catalog from "../Catalog/Catalog";

// Component
const Home = (props) => {
    const { countries } = props;

    const [ query, setQuery ] = useState("")

    const [ hideNonFavorites, setHideNonFavorites ] = useState(false);
    const [ hideFavorites, setHideFavorites ] = useState(false);

    const [ displayedCountries, setDisplayedCountries ] = useState([]);

    useEffect(() => {
        setDisplayedCountries([...countries])
    }, [countries])

    useEffect(() => {
        let newDisplayedCountries = countries;
        // if(hideNonFavorites || hideFavorites) {
            if(hideNonFavorites) {
                newDisplayedCountries = newDisplayedCountries.filter(displayedCountry => displayedCountry.favorited);
            }
            if(hideFavorites) {
                newDisplayedCountries = newDisplayedCountries.filter(displayedCountry => !displayedCountry.favorited);
            }
            setDisplayedCountries(newDisplayedCountries);

        // } else {
            // setDisplayedCountries([...countries])
        // }
    }, [countries, hideNonFavorites, hideFavorites])

    useEffect(() => {
        let newDisplayedCountries = countries;
        newDisplayedCountries = newDisplayedCountries.filter(displayedCountry => {
            return displayedCountry.name.toLowerCase().indexOf(query.toLowerCase()) > -1
        })
        setDisplayedCountries(newDisplayedCountries);
    }, [query, countries])

    return (
        <main className="home">
            <div className="container">

                <Search 
                query={query} setQuery={setQuery}
                hideNonFavorites={hideNonFavorites} setHideNonFavorites={setHideNonFavorites}
                hideFavorites={hideFavorites} setHideFavorites={setHideFavorites} />

                <div className="home__divider"></div>
                <div className="home__results-container">
                    <div className="home__results-found-container">
                        <small>{`${displayedCountries.length} results found`}</small>
                    </div>
                    <Catalog countries={displayedCountries} noResultsMessage="No countries found" />
                </div>
            </div>
        </main>
    )
}

export default Home
