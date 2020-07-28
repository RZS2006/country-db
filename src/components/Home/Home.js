// --- CountryDB - Home.js ---

// Imports
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import "./Home.css";

import Search from "./Search";
import Catalog from "../Catalog/Catalog";

// Component
const Home = ({countries}) => {
    let history = useHistory()
    
    // State
    const [ query, setQuery ] = useState("")

    const [ hideNonFavorites, setHideNonFavorites ] = useState(false);
    const [ hideFavorites, setHideFavorites ] = useState(false);

    const [ displayedCountries, setDisplayedCountries ] = useState([]);

    // Side Effects
    useEffect(() => {
        setDisplayedCountries([...countries])
    }, [countries])

    useEffect(() => {
        setDisplayedCountries([...countries])
            if(hideNonFavorites) {
                setDisplayedCountries(prevState => prevState.filter(displayedCountry => displayedCountry.favorited))
            }
            if(hideFavorites) {
                setDisplayedCountries(prevState => prevState.filter(displayedCountry => !displayedCountry.favorited))
            }
            setDisplayedCountries(prevState => {
                return prevState.filter(displayedCountry => {
                    return displayedCountry.name.toLowerCase().indexOf(query.toLowerCase()) > -1
                })
            })
    }, [countries, query, hideNonFavorites, hideFavorites])

    // Functions
    const search = (e) => {
        e.preventDefault()
        if (query && displayedCountries.length > 0) {
            const countryID = displayedCountries[0].id;
            history.push(`/countries/${countryID}`)
        }
    }

    // Render
    return (
        <main className="home">
            <div className="container">

                <Search 
                query={query} setQuery={setQuery} search={search}
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
