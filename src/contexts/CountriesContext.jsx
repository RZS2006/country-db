import React from 'react';
import { useState, useEffect, useContext } from 'react';

import { getCountries } from '../api';

// Exports
export const CountriesContext = React.createContext();

export const useCountries = () => {
	return useContext(CountriesContext);
};

const CountriesProvider = ({ children }) => {
	const [countries, setCountries] = useState();

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				setCountries(await getCountries());

				console(countries);
			} catch (e) {
				console.log(e);
			}
		};

		fetchCountries();
	}, []);

	const toggleFavoriteStatus = (id) => {
		return null;
	};

	const value = {
		data: countries,
		methods: {
			toggleFavoriteStatus,
		},
	};

	return (
		<CountriesContext.Provider value={value}>
			{children}
		</CountriesContext.Provider>
	);
};

export default CountriesProvider;
