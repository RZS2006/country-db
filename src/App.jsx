import React, { useState, useEffect, useRef } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import Details from './pages/Details/Details';
import Alert from './components/Alert/Alert';
import Loading from './components/Loading/Loading';

import { getCountries } from './api';

import CountriesProvider, {
	CountriesContext,
	useCountries,
} from './contexts/CountriesContext';

// Component
const App = () => {
	const {
		methods: { toggleFavoriteStatus },
		loading,
		error,
	} = useCountries();

	// State
	// const [countries, setCountries] = useState();
	// const [favoritedCountries, setFavoritedCountries] = useState();
	// const [isLoading, setIsLoading] = useState(true);
	// const [hasError, setHasError] = useState(false);

	// // Side Effects
	// useEffect(() => {
	// 	const fetchCountries = async () => {
	// 		try {
	// 			const countries = await getCountries();
	// 			const countriesWithId = countries.map((country) => ({
	// 				...country,
	// 				id: country.cca3,
	// 			}));

	// 			const localStorageData = JSON.parse(
	// 				localStorage.getItem('favoritedCountries')
	// 			);

	// 			if (localStorageData !== null) {
	// 				const countriesWithFavorited = countriesWithId.map(
	// 					(country) => ({
	// 						...country,
	// 						favorited: localStorageData[country.id],
	// 					})
	// 				);

	// 				countriesWithFavorited.sort((a, b) =>
	// 					a.name.common
	// 						.toString()
	// 						.localeCompare(b.name.common.toString())
	// 				);

	// 				setCountries(countriesWithFavorited);
	// 				setFavoritedCountries({ ...localStorageData });
	// 			} else {
	// 				const favoritedCountriesObject = {};
	// 				countriesWithId.forEach((country) => {
	// 					return (favoritedCountriesObject[country.id] = false);
	// 				});

	// 				const countriesWithFavorited = countriesWithId.map(
	// 					(country) => ({
	// 						...country,
	// 						favorited: favoritedCountriesObject[country.id],
	// 					})
	// 				);

	// 				countriesWithFavorited.sort((a, b) =>
	// 					a.name.common
	// 						.toString()
	// 						.localeCompare(b.name.common.toString())
	// 				);

	// 				setCountries(countriesWithFavorited);
	// 				setFavoritedCountries(favoritedCountriesObject);
	// 			}

	// 			setIsLoading(false);
	// 		} catch (e) {
	// 			setCountries([]);
	// 			setFavoritedCountries({});
	// 			setIsLoading(false);
	// 			setHasError(true);
	// 			console.error(e);
	// 		}
	// 	};

	// 	fetchCountries();
	// }, []);

	// const isInitialMount = useRef(true);
	// useEffect(() => {
	// 	if (isInitialMount.current) {
	// 		isInitialMount.current = false;
	// 	} else {
	// 		localStorage.setItem(
	// 			'favoritedCountries',
	// 			JSON.stringify(favoritedCountries)
	// 		);
	// 	}
	// }, [favoritedCountries]);

	// Functions
	// const toggleFavoriteStatus = (id) => {
	// 	const updatedFavoritedCountries = { ...favoritedCountries };
	// 	updatedFavoritedCountries[id] = !updatedFavoritedCountries[id];
	// 	setFavoritedCountries(updatedFavoritedCountries);

	// 	const updatedCountries = countries.map((country) => {
	// 		if (country.id === id) {
	// 			country.favorited = !country.favorited;
	// 		}
	// 		return country;
	// 	});

	// 	setCountries(updatedCountries);
	// };

	// Render
	if (loading) {
		return <Loading />;
	}

	return (
		<Router>
			<div className="app">
				<Navbar />
				{error && <Alert />}
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/countries/:id" element={<Details />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
