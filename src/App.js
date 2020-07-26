// --- CountryDB - App.js ---

// Imports
import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import Details from "./components/Details/Details";
import Alert from "./components/Alert/Alert";

import { getCountries } from "./api/api"

// Component
const App = () => {

    // State
    const [ countries, setCountries ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ hasError, setHasError ] = useState(false);

    // Side Effects
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const countries = await getCountries();
                const formattedCountries = countries.map(country => { return {...country, favorited: false, id: country.alpha3Code }});

                const localStorageData = JSON.parse(localStorage.getItem("countries"));
                if (localStorageData) {
                    setCountries(localStorageData)
                } else {
                    setCountries(formattedCountries)
                }

                setIsLoading(false)
            } catch (error) {
                setCountries([])
                setIsLoading(false)
                setHasError(true)
                console.log(error)
            }
        }

        fetchCountries()
    }, []);

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            localStorage.setItem("countries", JSON.stringify(countries))
        }
    }, [countries])

    // Functions
    const toggleFavoriteStatus = (id) => {
        const updatedCountries = countries.map(country => {
            if (country.id === id) {
                country.favorited = !country.favorited
            }
            return country
        })

        setCountries(updatedCountries)
    }

    // Render
    if (isLoading) {
        return (
            <div className="loading-container">
                <span>Loading...</span>
            </div> 
        )
    }

    return (
        <Router>
            <div className="app">
                <Navbar countries={countries} />
                {hasError && <Alert />}
                <Switch>

                    <Route path="/" exact render={() => <Home 
                                                         countries={countries} />} />
                                                        
                    <Route path="/favorites" render={() => <Favorites
                                                            countries={countries} />} />

                    <Route path="/countries/:code" render={() => <Details 
                                                                  countries={countries}
                                                                  toggleFavoriteStatus={toggleFavoriteStatus} />} />

                    <Route render={() => <Redirect to="/" />} />   
                                                              
                </Switch>
            </div>
        </Router>
    ) 
}

export default App
