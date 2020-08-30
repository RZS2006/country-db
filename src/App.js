// --- CountryDB - App.js ---

// Imports
import React, { useState, useEffect, useRef } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import Details from "./components/Details/Details";
import Alert from "./components/Alert/Alert";
import Loading from "./components/Loading/Loading";

import { getCountries } from "./api/api";

import { CountriesContext } from "./contexts/CountriesContext";

// Component
const App = () => {
	
	// State
	const [ countries, setCountries ] = useState();
	const [ favoritedCountries, setFavoritedCountries ] = useState();
	const [ isLoading, setIsLoading ] = useState(true);
	const [ hasError, setHasError ] = useState(false);

	// Side Effects
	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const countries = await getCountries();
				const countriesWithId = countries.map((country) => {
					return { ...country, id: country.alpha3Code };
				});

				const localStorageData = JSON.parse(
					localStorage.getItem("favoritedCountries")
				);
				if (localStorageData) {
					const countriesWithFavorited = countriesWithId.map((country) => {
						return {
							...country,
							favorited: localStorageData[country.id],
						};
					});
					setCountries(countriesWithFavorited);
					setFavoritedCountries({ ...localStorageData });
				} else {
					const favoritedCountriesObject = {};
					countriesWithId.forEach((country) => {
						return (favoritedCountriesObject[country.id] = false);
					});
					const countriesWithFavorited = countriesWithId.map((country) => {
						return {
							...country,
							favorited: favoritedCountriesObject[country.id],
						};
					});
					setCountries(countriesWithFavorited);
					setFavoritedCountries({ ...favoritedCountriesObject });
				}

				setIsLoading(false);
			} catch (error) {
				setCountries([]);
				setFavoritedCountries({});
				setIsLoading(false);
				setHasError(true);
				console.log(error);
			}
		};

		fetchCountries();
	}, []);

	const isInitialMount = useRef(true);
	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			localStorage.setItem(
				"favoritedCountries",
				JSON.stringify(favoritedCountries)
			);
		}
	}, [favoritedCountries]);

	// Functions
	const toggleFavoriteStatus = (id) => {
		const updatedFavoritedCountries = { ...favoritedCountries };
		updatedFavoritedCountries[id] = !updatedFavoritedCountries[id];
		setFavoritedCountries(updatedFavoritedCountries);

		const updatedCountries = countries.map((country) => {
			if (country.id === id) {
				country.favorited = !country.favorited;
			}
			return country;
		});

		setCountries(updatedCountries);
	};

	// Render
	if (isLoading) {
		return <Loading />;
	}

	return (
		<CountriesContext.Provider value={countries}>
			<Router>
				<div className="app">
					<Navbar />
					{hasError && <Alert />}
					<Switch>
						<Route
							path="/"
							exact
							render={() => <Home />}
						/>

						<Route
							path="/favorites"
							render={() => <Favorites />}
						/>

						<Route
							path="/countries/:code"
							render={() => <Details toggleFavoriteStatus={toggleFavoriteStatus}/>}
						/>

						<Route render={() => <Redirect to="/" />} />
					</Switch>
				</div>
			</Router>
		</CountriesContext.Provider>
	);
};

export default App;
