// --- CountryDB - Details.js ---

// Imports
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './Details.css';

import Banner from '../Banner/Banner';
import DetailsHeader from './DetailsHeader';
import DetailsData from './DetailsData';

import { CountriesContext } from '../../contexts/CountriesContext';

// Component
const Details = ({ toggleFavoriteStatus }) => {
	const navigate = useNavigate();

	// Context
	const countries = useContext(CountriesContext);

	// State
	const { code } = useParams();
	const [country, setCountry] = useState();

	// Side Effects
	useEffect(() => {
		const displayedCountry = countries.find(
			(country) => country.alpha3Code === code
		);

		if (!displayedCountry) {
			navigate('/');
		} else {
			setCountry({ ...displayedCountry });
		}
	}, [countries, code]);

	// Render
	if (!country) return null;

	return (
		<main className="details">
			<Banner />
			<div className="container">
				<DetailsHeader
					country={country}
					toggleFavoriteStatus={toggleFavoriteStatus}
				/>

				<div className="details__divider"></div>
				<img
					className="details__flag"
					src={country.flag}
					alt={`Flag of ${country.name}`}
				/>

				<DetailsData country={country} />
			</div>
		</main>
	);
};

export default Details;
