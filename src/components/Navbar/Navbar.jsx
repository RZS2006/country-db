import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import { useCountries } from '../../contexts/CountriesContext';

// Component
const Navbar = () => {
	// Context
	const {
		data: { countries },
	} = useCountries();

	// State
	const favorited = useMemo(
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
								{favorited}
							</span>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
