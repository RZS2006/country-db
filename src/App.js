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
import Alert from "./components/Alert/Alert";

import { getCountries } from "./api/api"

// Component
const App = () => {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ hasError, setHasError ] = useState(false);
    const [ countries, setCountries ] = useState();

    useEffect(() => {
        // const localStorageData = localStorage.getItem("countries");
        // if (localStorageData) {
        //     setCountries(JSON.parse(localStorageData));
        //     return
        // }

        const fetchCountries = async () => {
            try {
            const fetchedCountries = await getCountries();
            const fetchedCountriesWithFavoriteStatus = fetchedCountries.map(country => { return {...country, favorited: false} });
            setCountries(fetchedCountriesWithFavoriteStatus)
            setIsLoading(false)
            } catch (error) {
                setCountries([])
                setHasError(true)
                setIsLoading(false)
            }
        }

        fetchCountries()
    }, []);

    // useEffect(() => {
    //     localStorage.setItem("countries", JSON.stringify(countries))
    // }, [countries])

    const toggleFavoriteStatus = (code) => {
        const newCountries = countries.map(country => {
            if (country.alpha3Code === code) {
                country.favorited = !country.favorited
            }
            return country
        })
        setCountries(newCountries)
    }

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
                <Navbar countries={countries}/>
                {hasError && <Alert />}
                <Switch>

                    <Route path="/" exact render={() => <Home 
                                                         countries={countries}
                                                         isLoading={isLoading} />
                                                         } />
                                                        
                    <Route path="/favorites" render={() => <Favorites
                                                            countries={countries}
                                                            isLoading={isLoading} />
                                                            } />

                    <Route path="/countries/:code" render={() => <Details 
                                                                  countries={countries}
                                                                  toggleFavoriteStatus={toggleFavoriteStatus}
                                                                  isLoading={isLoading} />
                                                                  } />

                    <Route render={() => <Redirect to="/" />} />   
                                                              
                </Switch>
            </div>
        </Router>
    ) 
}

export default App
