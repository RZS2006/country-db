import React from 'react';
import { useState, useEffect, useContext } from 'react';

import { getCountries } from '../api';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const CountriesContext = React.createContext();

export const useCountries = () => {
	return useContext(CountriesContext);
};

const CountriesProvider = ({ children }) => {
	const [countries, setCountries] = useState([]);
	const [favoritedCountries, setFavoritedCountries] = useLocalStorage(
		'favorited-countries',
		[]
	);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	if (!Array.isArray(favoritedCountries)) {
		setFavoritedCountries([]);
	}

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				let countries = await getCountries();

				countries = countries
					.map((country) => ({
						...country,
						id: country.cca3,
						favorited: favoritedCountries.includes(country.cca3),
					}))
					.sort((a, b) =>
						a.name.common
							.toString()
							.localeCompare(b.name.common.toString())
					);

				setCountries(countries);
				setLoading(false);
			} catch (e) {
				setLoading(false);
				setError(true);
				console.log(e);
			}
		};

		fetchCountries();
	}, []);

	const toggleFavoriteStatus = (id) => {
		const updated = countries.map((country) => {
			if (country.id === id) {
				country.favorited = !country.favorited;
			}
			return country;
		});

		setCountries(updated);

		setFavoritedCountries((prev) => {
			if (prev.includes(id)) {
				return prev.filter((country) => country !== id);
			} else {
				return [...prev, id];
			}
		});
	};

	const value = {
		data: { countries },
		methods: {
			toggleFavoriteStatus,
		},
		loading,
		error,
	};

	return (
		<CountriesContext.Provider value={value}>
			{children}
		</CountriesContext.Provider>
	);
};

export default CountriesProvider;
