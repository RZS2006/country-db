import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './Details.css';

import Banner from '../../components/Banner/Banner';
import DetailsHeader from './DetailsHeader';
import DetailsImages from './DetailsImages';
import DetailsData from './DetailsData';

import { useCountries } from '../../contexts/CountriesContext';
import DetailsMaps from './DetailsMaps';

// Component
const Details = ({ toggleFavoriteStatus }) => {
	const navigate = useNavigate();
	const { code } = useParams();

	// Context
	const countries = useCountries();

	// State
	const country = useMemo(() => {
		return countries.find((country) => country.id === code);
	}, [countries, code]);

	if (!country) {
		navigate('/');
	}

	// Render
	return (
		<main className="details">
			<Banner />
			<div className="container">
				<DetailsHeader
					country={country}
					toggleFavoriteStatus={toggleFavoriteStatus}
				/>
				<DetailsImages country={country} />
				<DetailsMaps country={country} />
				<DetailsData country={country} />
			</div>
		</main>
	);
};

export default Details;
