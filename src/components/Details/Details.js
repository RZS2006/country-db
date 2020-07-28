// --- CountryDB - Details.js ---

// Imports
import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from "react-router-dom";

import "./Details.css"

import Banner from "../Banner/Banner";
import DetailsHeader from "./DetailsHeader";
import DetailsData from "./DetailsData";

// Component
const Details = ({countries, toggleFavoriteStatus}) => {

    // State
    const { code } = useParams();
    const [ country, setCountry ] = useState()
    const [ redirect, setRedirect ] = useState(false)

    // Side Effects
    useEffect(() => {
        const displayedCountry = countries.find(country => country.alpha3Code === code)
        if (!displayedCountry) {
            setRedirect(true)
        } else {
            setCountry({...displayedCountry})
        }
    }, [countries, code])

    // Render
    if (redirect) return <Redirect to="/" />

    if (!country) return null

    return (
        <main className="details">
            <Banner />
            <div className="container">
                <DetailsHeader country={country} toggleFavoriteStatus={toggleFavoriteStatus} />
                <div className="details__divider"></div>
                <img className="details__flag" src={country.flag} alt={`Flag of ${country.name}`} />
                <DetailsData country={country} />
            </div>
        </main>
    )
}

export default Details
