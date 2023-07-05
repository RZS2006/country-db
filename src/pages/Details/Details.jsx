import React, { useMemo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './Details.css';

import Banner from '../../components/Banner/Banner';
import DetailsHeader from './DetailsHeader';
import DetailsImages from './DetailsImages';
import DetailsMaps from './DetailsMaps';
import DetailsData from './DetailsData';

import { useCountries } from '../../contexts/CountriesContext';

// Component
const Details = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	// Context
	const {
		data: { countries },
	} = useCountries();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, []);

	// State
	const country = useMemo(() => {
		return countries.find((country) => country.id === id);
	}, [countries, id]);

	if (!country) {
		navigate('/');
	}

	// Render
	return (
		<main className="details">
			<Banner />
			<div className="container">
				<DetailsHeader country={country} />
				<DetailsImages country={country} />
				<DetailsMaps country={country} />
				<DetailsData country={country} />
			</div>
		</main>
	);
};

export default Details;
