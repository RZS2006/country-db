// --- CountryDB - Details.js ---

// Imports
import React, { useState, useEffect, useContext, useMemo } from 'react';
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
	const country = useMemo(() => {
		return countries.find((country) => country.id === code);
	}, [countries]);

	if (!country) {
		navigate('/');
	}

	const { name, flags, coatOfArms } = country;

	// Render
	return (
		<main className="details">
			<Banner />
			<div className="container">
				<DetailsHeader
					country={country}
					toggleFavoriteStatus={toggleFavoriteStatus}
				/>

				<div className="details__image-container">
					<img
						className="details__flag"
						src={flags.svg}
						alt={`Flag of ${name.common}`}
					/>
					<img
						className="details__coat-of-arms"
						src={coatOfArms.svg}
						alt={`Coat of Arms of ${name.common}`}
					/>
				</div>

				<DetailsData country={country} />
			</div>
		</main>
	);
};

export default Details;
