import React from 'react';
import { useState, useEffect, useContext } from 'react';

import { getCountries } from '../api';

// Exports
export const CountriesContext = React.createContext();

export const useCountries = () => {
	return useContext(CountriesContext);
};

// const CountriesProvider = ({ children }) => {
// 	const [countries, setCountries] = useState();

// 	useEffect(() => {
// 		const fetchCountries = async () => {
// 			try {
// 				const countries = await getCountries();
// 			} catch (e) {
// 				console.log(e);
// 			}
// 		};

// 		fetchCountries();
// 	}, []);

// 	return (
// 		<CountriesContext.Provider value={countries}>
// 			{children}
// 		</CountriesContext.Provider>
// 	);
// };

// export default CountriesProvider;
