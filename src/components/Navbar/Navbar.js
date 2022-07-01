// --- CountryDB - Navbar.js --- Final

// Imports
import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import { CountriesContext } from '../../contexts/CountriesContext';

// Component
const Navbar = () => {
	// Context
	const countries = useContext(CountriesContext);

	// State
	const favoritedCountriesNumber = useMemo(
		() => countries.filter((country) => country.favorited).length,
		[countries]
	);

	// Render
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar__flex-container">
					<Link to="/" className="navbar__logo">
						CountryDB
					</Link>

					<div className="navbar__favorites-container">
						<Link to="/favorites">
							<small>Favorites</small>
							<span className="navbar__favorites-amount-badge">
								{favoritedCountriesNumber}
							</span>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
