// --- CountryDB - Navbar.js ---

// Imports
import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

// Component
const Navbar = ({ countries }) => {
	const favoritedCountriesAmount = countries.filter(
		(country) => country.favorited
	).length;

	// Render
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar__flex-container">
					<div className="navbar__logo-container">
						<Link to="/">
							<h1 className="navbar__logo">CountryDB</h1>
						</Link>
					</div>
					<div className="navbar__favorites-container">
						<Link to="/favorites">
							<small>Favorites</small>
							<span className="navbar__favorites-amount-badge">
								{favoritedCountriesAmount}
							</span>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
