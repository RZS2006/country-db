// --- CountryDB - Home.js ---

// Imports
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Home.css";

import Search from "./Search";
const Catalog = React.lazy(() => import("../Catalog/Catalog"));

// Component
const Home = ({ countries }) => {
	let history = useHistory();

	// State
	const [query, setQuery] = useState("");

	const [hideNonFavorites, setHideNonFavorites] = useState(false);
	const [hideFavorites, setHideFavorites] = useState(false);

	const [displayedCountries, setDisplayedCountries] = useState([]);

	// Side Effects
	useEffect(() => {
		setDisplayedCountries([...countries]);
	}, [countries]);

	useEffect(() => {
		setDisplayedCountries([...countries]);
		if (hideNonFavorites) {
			setDisplayedCountries((prevState) =>
				prevState.filter((displayedCountry) => displayedCountry.favorited)
			);
		}
		if (hideFavorites) {
			setDisplayedCountries((prevState) =>
				prevState.filter((displayedCountry) => !displayedCountry.favorited)
			);
		}
		if (query && query.trim().length > 0) {
			const queryValue = query.trim().toLowerCase();

			setDisplayedCountries((prevState) => {
				return prevState
					.filter((displayedCountry) => {
						return displayedCountry.name
							.toLowerCase()
							.includes(queryValue);
					})
					.sort((countryA, countryB) => {
						return (
							getRelevancy(countryB.name.toLowerCase(), queryValue) -
							getRelevancy(countryA.name.toLowerCase(), queryValue)
						);
					});
			});
		}
	}, [countries, query, hideNonFavorites, hideFavorites]);

	// Functions
	const getRelevancy = (item, query) => {
		if (query === item) {
			return 2;
		} else if (item.startsWith(query)) {
			return 1;
		} else if (item.includes(query)) {
			return 0;
		} else {
			return -1;
		}
	};

	const search = (e) => {
		e.preventDefault();
		if (query && displayedCountries.length > 0) {
			const countryID = displayedCountries[0].id;
			history.push(`/countries/${countryID}`);
		}
	};

	// Render
	return (
		<main className="home">
			<div className="container">
				<Search
					query={query}
					setQuery={setQuery}
					search={search}
					hideNonFavorites={hideNonFavorites}
					setHideNonFavorites={setHideNonFavorites}
					hideFavorites={hideFavorites}
					setHideFavorites={setHideFavorites}
				/>

				<div className="home__divider"></div>
				<div className="home__results-container">
					<div className="home__results-found-container">
						<small>{`${displayedCountries.length} results found`}</small>
					</div>
					<React.Suspense fallback={<span>Loading...</span>}>
						<Catalog
							countries={displayedCountries}
							noResultsMessage="No countries found"
						/>
					</React.Suspense>
				</div>
			</div>
		</main>
	);
};

export default Home;
