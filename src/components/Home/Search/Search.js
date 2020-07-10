import React from 'react'

import "./Search.css"

const Search = () => {
    return (
        <div className="search">
            <form className="search-query-container">
                <label htmlFor="query">
                    Search for a country
                    <input type="text" name="query" id="query"/>
                </label>
                <input type="submit" value="Search"/>
            </form>
            <div className="search-checkbox-container">
                <label htmlFor="hide-non-favorites">
                    <input type="checkbox" name="hide-non-favorites" id="hide-non-favorites"/>
                    Hide Non-Favorites
                </label>
                <label htmlFor="hide-favorites">
                    <input type="checkbox" name="hide-favorites" id="hide-favorites"/>
                    Hide Favorites
                </label>
            </div>
        </div>
    )
}

export default Search
