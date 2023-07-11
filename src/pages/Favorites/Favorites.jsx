import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

import './Favorites.css';

import Banner from '../../components/Banner/Banner';
import Catalog from '../../components/Catalog/Catalog';

import { useCountries } from '../../contexts/CountriesContext';

const Favorites = () => {
	const {
		data: { countries },
	} = useCountries();

	const favorited = useMemo(
		() => countries.filter((country) => country.favorited),
		[countries]
	);

	return (
		<>
			<Helmet>
				<title>Favorites | CountryDB</title>
				<meta
					name="description"
					content="Get the information of all the countries in the world using CountryDB."
				/>
			</Helmet>
			<main className="favorites">
				<Banner />
				<div className="container">
					<div className="favorites__title-container">
						<h2 className="favorites__title">Favorites</h2>
					</div>

					<Catalog
						countries={favorited}
						noResultsMessage="No countries favorited"
					/>
				</div>
			</main>
		</>
	);
};

export default Favorites;
