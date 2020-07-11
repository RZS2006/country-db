import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    return (
        <section className="search">
            <form className="query-container">
                <label className="input-label query-input-label" htmlFor="query">
                    Search for a country
                    <input className="query-input" type="text" name="query"/>
                </label>
                <button className="query-submit main" type="submit">Search</button>
                <button className="query-submit responsive" type="submit"><FontAwesomeIcon icon={faSearch}/></button>
            </form>
            <div className="filter-container">
                <label className="input-label filter-checkbox-label" htmlFor="hide-non-favorites">
                    <input className="filter-checkbox" type="checkbox" name="hide-non-favorites"/>
                    Hide Non-Favorites
                </label>
                <label className="input-label filter-checkbox-label" htmlFor="hide-favorites">
                    <input className="filter-checkbox" type="checkbox" name="hide-favorites"/>
                    Hide Favorites
                </label>
            </div>
        </section>
    )
}

export default Search
