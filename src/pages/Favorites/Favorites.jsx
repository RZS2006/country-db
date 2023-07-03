import React, { useMemo } from 'react';

import './Favorites.css';

import Banner from '../../components/Banner/Banner';
import Catalog from '../../components/Catalog/Catalog';

import { useCountries } from '../../contexts/CountriesContext';

// Component
const Favorites = () => {
	// Context
	const countries = useCountries();

	// State
	const favoritedCountries = useMemo(
		() => countries.filter((country) => country.favorited),
		[countries]
	);

	// Render
	return (
		<main className="favorites">
			<Banner />
			<div className="container">
				<div className="favorites__title-container">
					<h2 className="favorites__title">Favorites</h2>
				</div>

				<Catalog
					countries={favoritedCountries}
					noResultsMessage="No countries favorited"
				/>
			</div>
		</main>
	);
};

export default Favorites;
