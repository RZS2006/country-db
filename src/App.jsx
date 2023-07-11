import React from 'react';
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

import { useCountries } from './contexts/CountriesContext';

const App = () => {
	const { loading, error } = useCountries();

	if (loading) {
		return <Loading />;
	}

	return (
		<Router>
			<Navbar />
			{error && <Alert />}
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/countries/:id" element={<Details />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</Router>
	);
};

export default App;
