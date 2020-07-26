// --- CountryDB - Alert.js ---

// Imports
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import "./Alert.css" 

// Component
const Alert = () => {
    return (
        <section className="alert">
            <div className="container">
                <FontAwesomeIcon icon={faExclamationCircle} />
                <span className="alert__text">CountryDB ran into a problem: <strong>Unable to load countries</strong></span>
            </div>
        </section>
    )
}

export default Alert
