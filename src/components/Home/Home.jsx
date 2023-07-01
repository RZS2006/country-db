import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';

import Search from './Search';
import Catalog from '../Catalog/Catalog';

import { useCountries } from '../../contexts/CountriesContext';

// Component
const Home = () => {
	const countries = useCountries();
	const navigate = useNavigate();

	// State
	const [query, setQuery] = useState('');

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
				prevState.filter(
					(displayedCountry) => displayedCountry.favorited
				)
			);
		}
		if (hideFavorites) {
			setDisplayedCountries((prevState) =>
				prevState.filter(
					(displayedCountry) => !displayedCountry.favorited
				)
			);
		}
		if (query && query.trim().length > 0) {
			const queryValue = query.trim().toLowerCase();

			setDisplayedCountries((prevState) => {
				return prevState
					.filter(({ name: { common: countryName } }) => {
						return countryName.toLowerCase().includes(queryValue);
					})
					.sort(
						(
							{ name: { common: countryAName } },
							{ name: { common: countryBName } }
						) => {
							return (
								getRelevancy(
									countryBName.toLowerCase(),
									queryValue
								) -
								getRelevancy(
									countryAName.toLowerCase(),
									queryValue
								)
							);
						}
					);
			});
		}
	}, [countries, query, hideNonFavorites, hideFavorites]);

	// Functions
	const getRelevancy = (target, query) => {
		if (query === target) {
			return 2;
		} else if (target.startsWith(query)) {
			return 1;
		} else if (target.includes(query)) {
			return 0;
		} else {
			return -1;
		}
	};

	const search = (e) => {
		e.preventDefault();
		if (query && displayedCountries.length > 0) {
			const countryId = displayedCountries[0].id;
			navigate(`/countries/${countryId}`);
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

				<div className="home__results-container">
					<div className="home__results-found-container">
						<small>{`${displayedCountries.length} result(s) found`}</small>
					</div>
					<Catalog
						countries={displayedCountries}
						noResultsMessage="No countries found"
					/>
				</div>
			</div>
		</main>
	);
};

export default Home;
