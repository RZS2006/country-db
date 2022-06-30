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
	const { code } = useParams();

	// Context
	const countries = useContext(CountriesContext);

	// State
	const [country, setCountry] = useState();

	// Side Effects
	useEffect(() => {
		const displayedCountry = countries.find(
			(country) => country.id === code
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

				<div className="details__image-container">
					<img
						className="details__flag"
						src={country.flags.svg}
						alt={`Flag of ${country.name.common}`}
					/>
					<img
						className="details__coat-of-arms"
						src={country.coatOfArms.svg}
						alt={`Coat of Arms of ${country.name.common}`}
					/>
				</div>

				<DetailsData country={country} />
			</div>
		</main>
	);
};

export default Details;
