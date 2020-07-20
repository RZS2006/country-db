// --- CountryDB - DetailsData.js ---

// Imports
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Component
const DetailsData = (props) => {
    const { country } = props;

    return (
        <div className="details__data">
            <div className="details__data-section names">
                <div className="details__data-section-header">Names</div>
                <div className="details__data-section-content">
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Name:</span>
                        <span className="details__entry-value">{country.name}</span>
                    </div>
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Native Name:</span>
                        <span className="details__entry-value">{country.nativeName}</span>
                    </div>
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Alternative Names:</span>
                        <span className="details__entry-value multiple">
                            {country.altSpellings.map((altSpelling, index) => {
                                return (
                                    <span key={index} className="details__entry-value-chip">
                                        <span>{altSpelling}</span>
                                    </span>
                                )
                            })}
                        </span>
                    </div>
                </div>
                <div className="details__data-section-dropdown">
                    <div className="details__dropdown-button">
                        <span>Translations</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="details__dropdown-panel">
                        {Object.keys(country.translations).map((key, index) => {
                            return (
                                <div key={index} className="details__data-section-entry">
                                    <span className="details__entry-key">{key}:</span>
                                    <span className="details__entry-value">{country.translations[key]}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="details__data-section geography">
                <div className="details__data-section-header">Geography</div>
                <div className="details__data-section-content">
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Capital:</span>
                        <span className="details__entry-value">{country.capital}</span>
                    </div>
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Region:</span>
                        <span className="details__entry-value">{country.region}</span>
                    </div>
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Subregion:</span>
                        <span className="details__entry-value">{country.subregion}</span>
                    </div>
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Land Area:</span>
                        <span className="details__entry-value">{country.area.toLocaleString()} km<sup>2</sup></span>
                    </div>
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Population:</span>
                        <span className="details__entry-value">{country.population.toLocaleString()}</span>
                    </div>
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Land Borders:</span>
                        <span className="details__entry-value multiple">
                            {country.borders.map((border, index) => {
                                return (
                                    <span key={index} className="details__entry-value-chip">
                                        <span>{border}</span>
                                    </span>
                                )
                            })}
                        </span>
                    </div>
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Latitude / Longitude</span>
                        <span className="details__entry-value multiple">
                            {`${country.latlng[0]}, ${country.latlng[1]}`}
                        </span>
                    </div>
                </div> 
            </div>
            <div className="details__data-section miscellaneous">
                <div className="details__data-section-header">Miscellaneous</div>
                <div className="details__data-section-content">
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Languages:</span>
                        <span className="details__entry-value multiple">
                            {country.languages.map((langauge, index) => {
                                return (
                                    <span key={index} className="details__entry-value-chip">
                                        <span>{langauge.name}</span>
                                        <small>({langauge.nativeName})</small>
                                    </span>
                                )
                            })}
                        </span>
                    </div>
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Currencies:</span>
                        <span className="details__entry-value multiple">
                            {country.currencies.map((currency, index) => {
                                return (
                                    <span key={index} className="details__entry-value-chip">
                                        <span>{currency.name}</span>
                                        <small>({currency.code})</small>
                                    </span>
                                )
                            })}
                        </span>
                    </div>
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Time Zones:</span>
                        <span className="details__entry-value multiple">
                            {country.timezones.map((timezone, index) => {
                                return (
                                    <span key={index} className="details__entry-value-chip">
                                        <span>{timezone}</span>
                                    </span>
                                )
                            })}
                        </span>
                    </div>
                    <div className="details__data-section-entry">
                        <span className="details__entry-key">Demonym:</span>
                        <span className="details__entry-value">{country.demonym}</span>
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
