import React from 'react'

import "./Details.css"

import Banner from "../Banner/Banner";

const Details = () => {
    return (
        <main className="details">
            <Banner />
            <div className="container">
                <div className="header">
                <div className="d-country-name">Germany <span className="d-country-native-name">(Deutschland)</span></div>
                <div className="d-favorites-container">
                    <small>Favorite</small>
                    <span className="country-favorite-status-dot"></span>
                </div>
                </div>
                <img className="d-country-image "src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="Germany Flag"/>
                <div className="section-country-names">
                    <div className="section-header">Names</div>
                    <span className="data-key">Name: <span className="data-value">Germany</span></span>
                    <span className="data-key">Native Name: <span className="data-value">Deutschland</span></span>
                    <div className="country-translations">
                        Translations
                        <span>&#8964;</span>
                    </div>
                </div>
                <div className="section-country-other">
                    <div className="section-header">Other</div>
                    <span className="data-key">Languages: 
                        <span className="data-values-tag">
                            <span className="data-value-tag">German <span className="secondary">(Deutsch)</span></span>
                        </span>
                    </span>
                    <span className="data-key">Currencies:
                        <span className="data-values-tag">
                            <span className="data-value-tag">Euro <span className="secondary">(EUR)</span></span>
                        </span>
                    </span>
                </div>
            </div>
        </main>
    )
}

export default Details
