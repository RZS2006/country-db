// --- CountryDB - Details.js ---

// Imports
import React from 'react'

import "./Details.css"

import Banner from "../Banner/Banner";
import DetailsHeader from "./DetailsHeader";
import DetailsData from "./DetailsData";

// Component
const Details = () => {
    return (
        <main className="details">
            <Banner />
            <div className="container">
                <DetailsHeader />
                <div className="details__divider"></div>
                <img className="details__flag" src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="flag of Germany"/>
                <DetailsData />
            </div>
        </main>
    )
}

export default Details
