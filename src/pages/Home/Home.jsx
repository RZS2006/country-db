import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './Home.css';

import Search from './Search';
import Catalog from '../../components/Catalog/Catalog';

import { useCountries } from '../../contexts/CountriesContext';
import { getRelevancy } from '../../utils';

// Component
const Home = () => {
	const {
		data: { countries },
	} = useCountries();

	const navigate = useNavigate();

	// State
	const [query, setQuery] = useState('');

	const [hideNonFavorites, setHideNonFavorites] = useState(false);
	const [hideFavorites, setHideFavorites] = useState(false);
	const [sortingProperty, setSortingProperty] = useState('alphabetical');
	const [sortingOrder, setSortingOrder] = useState('ascending');

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
		case 'alpha-2':
			displayed = displayed.sort((a, b) => {
				return a.cca2.toString().localeCompare(b.cca2.toString());
			});
			break;
		case 'alpha-3':
			displayed = displayed.sort((a, b) => {
				return a.cca3.toString().localeCompare(b.cca3.toString());
			});
			break;
	}

	switch (sortingOrder) {
		case 'ascending':
			break;
		case 'descending':
			displayed = displayed.reverse();
			break;
	}

	if (query && query.trim().length > 0) {
		const value = query.trim().toLowerCase();

		displayed = displayed
			.filter(({ name: { common: name } }) => {
				return name.toLowerCase().includes(value);
			})
			.sort(
				({ name: { common: nameA } }, { name: { common: nameB } }) => {
					return (
						getRelevancy(nameB.toLowerCase(), value) -
						getRelevancy(nameA.toLowerCase(), value)
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
		<>
			<Helmet>
				<title>CountryDB: Database of the World</title>
				<meta
					name="description"
					content="Get the information of all the countries in the world using CountryDB."
				/>
			</Helmet>
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
		</>
	);
};

export default Home;
