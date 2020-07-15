// --- CountryDB - App.js ---

// Imports
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import Details from "./components/Details/Details";

import { getCountries } from "./api/api"

// Component
const App = () => {
    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const fetchedCountries = await getCountries();
            const fetchedCountriesWithFavoriteStatus = fetchedCountries.map(country => { return {...country, favorited: false} });
            setCountries(fetchedCountriesWithFavoriteStatus)
        }

        fetchCountries()
    }, [])

    return (
        <Router>
            <div className="app">
                <Navbar countries={countries}/>
                <Switch>
                    <Route path="/" exact render={() => <Home countries={countries}/>}/>
                    <Route path="/favorites" render={() => <Favorites />}/>
                    <Route path="/countries/:code" render={() => <Details />}/>
                </Switch>
            </div>
        </Router>
    ) 
}

export default App
