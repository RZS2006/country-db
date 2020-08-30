// --- CountryDB - Favorites.js ---

// Imports
import React, { useContext } from "react";

import "./Favorites.css";

import Banner from "../Banner/Banner";
import Catalog from "../Catalog/Catalog";

import { CountriesContext } from "../../contexts/CountriesContext";

// Component
const Favorites = () => {

	// Context
	const countries = useContext(CountriesContext)

	// State
	const displayedCountries = countries.filter((country) => country.favorited);

	// Render
	return (
		<main className="favorites">
			<Banner />
			<div className="container">

				<div className="favorites__title-container">
					<h2 className="favorites__title">Favorites</h2>
				</div>

				<div className="favorites__divider"></div>

				<Catalog
					countries={displayedCountries}
					noResultsMessage="No countries favorited"
				/>
				
			</div>
		</main>
	);
};

export default Favorites;
