// --- CountryDB - Details.js ---

// Imports
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import "./Details.css"

import Banner from "../Banner/Banner";
import DetailsHeader from "./DetailsHeader";
import DetailsData from "./DetailsData";

// Component
const Details = (props) => {
    const { countries, toggleFavoriteStatus } = props;
    const { code } = useParams();
    const [country, setCountry] = useState()

    useEffect(() => {
        const country = countries.find(country => country.alpha3Code === code)
        setCountry({...country})
    }, [countries, code])

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
