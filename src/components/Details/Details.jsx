import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './Details.css';

import Banner from '../Banner/Banner';
import DetailsHeader from './DetailsHeader';
import DetailsData from './DetailsData';

import { useCountries } from '../../contexts/CountriesContext';

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

	const { name, flags, coatOfArms } = country;

	console.log(country);

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

					{coatOfArms.svg && (
						<img
							className="details__coat-of-arms"
							src={coatOfArms.svg}
							alt={`Coat of Arms of ${name.common}`}
						/>
					)}
				</div>

				<div className="details__map-container">
					<a
						href={country.maps.googleMaps}
						target="_blank"
						rel="noopener noreferrer">
						Google Maps
					</a>
					<a
						href={country.maps.openStreetMaps}
						target="_blank"
						rel="noopener noreferrer">
						Open Street Maps
					</a>
				</div>

				<DetailsData country={country} />
			</div>
		</main>
	);
};

export default Details;
