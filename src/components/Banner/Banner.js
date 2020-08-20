// --- CountryDB - Banner.js ---

// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './Banner.css';

// Component
const Banner = () => {
	// Render
	return (
		<section className="banner">
			<div className="container">
				<Link to="/">
					<div className="banner__link-container">
						<FontAwesomeIcon icon={faChevronLeft} />
						<small>Back to Catalog</small>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default Banner;
