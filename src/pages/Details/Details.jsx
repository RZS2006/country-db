import React, { useMemo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './Details.css';

import Banner from '../../components/Banner/Banner';
import DetailsHeader from './DetailsHeader';
import DetailsImages from './DetailsImages';
import DetailsMaps from './DetailsMaps';
import DetailsData from './DetailsData';

import { useCountries } from '../../contexts/CountriesContext';

const Details = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const {
		data: { countries },
	} = useCountries();

	const country = useMemo(() => {
		return countries.find((country) => country.id === id);
	}, [countries, id]);

	if (!country) {
		navigate('/');
	}

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [country]);

	return (
		<>
			<Helmet>
				<title>{country.name.common} | CountryDB</title>
				<meta
					name="description"
					content="Get the information of all the countries in the world using CountryDB."
				/>
			</Helmet>
			<main className="details">
				<Banner />
				<div className="container">
					<DetailsHeader country={country} />
					<DetailsImages country={country} />
					<DetailsMaps country={country} />
					<DetailsData country={country} />
				</div>
			</main>
		</>
	);
};

export default Details;
