// --- CountryDB - DetailsData.js ---

// Imports
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Component
const DetailsData = () => {
    return (
        <div className="details__data">
            <div className="details__data-section names">
                <div className="details__data-section-header">Names</div>
                <div className="details__data-section-content">
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Name:</span>
                        <span className="details__entry-value">Germany</span>
                    </div>
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Native Name:</span>
                        <span className="details__entry-value">Deutschland</span>
                    </div>
                </div>
                <div className="details__data-section-dropdown">
                    <div className="details__dropdown-button">
                        <span>Translations</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="details__dropdown-panel">
                        <div className="details__data-section-entry">
                            <span className="details__entry-key">Native Name:</span>
                            <span className="details__entry-value">Deutschland</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details__data-section geography">
                <div className="details__data-section-header">Geography</div>
                <div className="details__data-section-content">

                </div> 
            </div>
            <div className="details__data-section miscellaneous">
                <div className="details__data-section-header">Miscellaneous</div>
                <div className="details__data-section-content">
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Languages:</span>
                        <span className="details__entry-value multiple">
                            <span className="details__entry-value-chip">
                                <span>German</span>
                                <small>(Deutsch)</small>
                            </span>
                        </span>
                    </div>
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Currencies:</span>
                        <div className="details__entry-value multiple">
                            <span className="details__entry-value-chip">
                                <span>Euro</span>
                                <small>(EUR)</small>
                            </span>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="details__data-section codes">
                <div className="details__data-section-header">Codes</div>
                <div className="details__data-section-content">
                    
                </div>
            </div>
        </div>
    )
}

export default DetailsData
