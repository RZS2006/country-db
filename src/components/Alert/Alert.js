// --- CountryDB - Alert.js ---

// Imports
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import "./Alert.css";

// Component
const Alert = () => {

    // Render
    return (
        <section className="alert">
            <div className="container">
                <div className="alert__flex-container">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    <span className="alert__text">CountryDB ran into a problem: <strong>Unable to load countries</strong></span>
                </div>
            </div>
        </section>
    )
}

export default Alert
