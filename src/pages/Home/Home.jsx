import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';

import Search from './Search';
import Catalog from '../../components/Catalog/Catalog';

import { useCountries } from '../../contexts/CountriesContext';
import { getRelevancy } from '../../utils';

// Component
const Home = () => {
	const countries = useCountries();
	const navigate = useNavigate();

	// State
	const [query, setQuery] = useState('');

	const [hideNonFavorites, setHideNonFavorites] = useState(false);
	const [hideFavorites, setHideFavorites] = useState(false);
	const [sortingProperty, setSortingProperty] = useState('alphabetical');
	const [sortingOrder, setSortingOrder] = useState('descending');

	let displayed = [...countries];

	if (hideNonFavorites) {
		displayed = displayed.filter((country) => country.favorited);
	}
	if (hideFavorites) {
		displayed = displayed.filter((country) => !country.favorited);
	}

	switch (sortingProperty) {
		case 'alphabetical':
			displayed = displayed.sort((a, b) => {
				return a.name.common
					.toString()
					.localeCompare(b.name.common.toString());
			});
			break;
		case 'population':
			displayed = displayed.sort((a, b) => a.population - b.population);
			break;
		case 'area':
			displayed = displayed.sort((a, b) => a.area - b.area);
			break;
	}

	switch (sortingOrder) {
		case 'descending':
			break;
		case 'ascending':
			displayed = displayed.reverse();
			break;
	}

	if (query && query.trim().length > 0) {
		const queryValue = query.trim().toLowerCase();

		displayed = displayed
			.filter(({ name: { common: countryName } }) => {
				return countryName.toLowerCase().includes(queryValue);
			})
			.sort(
				(
					{ name: { common: countryAName } },
					{ name: { common: countryBName } }
				) => {
					return (
						getRelevancy(countryBName.toLowerCase(), queryValue) -
						getRelevancy(countryAName.toLowerCase(), queryValue)
					);
				}
			);
	}

	// Functions

	const search = (e) => {
		e.preventDefault();
		if (query && displayed.length > 0) {
			const countryId = displayed[0].id;
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
					sortingProperty={sortingProperty}
					setSortingProperty={setSortingProperty}
					sortingOrder={sortingOrder}
					setSortingOrder={setSortingOrder}
				/>

				<div className="home__results-container">
					<div className="home__results-found-container">
						<small>{`${displayed.length} result(s) found`}</small>
					</div>
					<Catalog
						countries={displayed}
						noResultsMessage="No countries found"
					/>
				</div>
			</div>
		</main>
	);
};

export default Home;
