// --- CountryDB - App.js ---

// Imports
import React, { useState, useEffect } from 'react';
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

import { getCountries } from "./api/api"

// Component
const App = () => {
    const [ hasError, setHasError ] = useState(false);
    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
            const fetchedCountries = await getCountries();
            const fetchedCountriesWithFavoriteStatus = fetchedCountries.map(country => { return {...country, favorited: false} });
            setCountries(fetchedCountriesWithFavoriteStatus)
            } catch (error) {
                setHasError(true)
            }
        }

        fetchCountries()
    }, [])

    const toggleFavoriteStatus = (code) => {
        const newCountries = countries.map(country => {
            if (country.alpha3Code === code) {
                country.favorited = !country.favorited
            }
            return country
        })
        setCountries(newCountries)
    }

    return (
        <Router>
            <div className="app">
                <Navbar countries={countries}/>
                <Switch>

                    <Route path="/" exact render={() => <Home 
                                                         countries={countries} 
                                                         toggleFavoriteStatus={toggleFavoriteStatus} />
                                                         } />
                                                        
                    <Route path="/favorites" render={() => <Favorites
                                                            countries={countries} 
                                                            toggleFavoriteStatus={toggleFavoriteStatus} />
                                                            } />

                    <Route path="/countries/:code" render={() => <Details 
                                                                  countries={countries}
                                                                  toggleFavoriteStatus={toggleFavoriteStatus} />
                                                                  } />

                    <Route render={() => <Redirect to="/" />} />   
                                                              
                </Switch>
            </div>
        </Router>
    ) 
}

export default App
