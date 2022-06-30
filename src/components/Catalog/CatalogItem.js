// --- CountryDB - CatalogItem.js ---

// Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Component
const CatalogItem = ({ country }) => {
	// Render
	return (
		<Link to={`/countries/${country.id}`}>
			<div className="catalog-item">
				<img
					className="catalog-item__flag"
					src={country.flags.svg}
					alt={`Flag of ${country.name.common}`}
				/>
				<div className="catalog-item__name-container">
					<h2
						className={`catalog-item__name ${
							country.name.common.length > 20 ? 'long' : 'short'
						}`}>
						{country.name.common}
					</h2>
					<small className="catalog-item__native-name">
						({country.name.official})
					</small>
				</div>
				<div className="catalog-item__favorite-status-container">
					{country.favorited && <small>Favorited</small>}
					<span
						className={`catalog-item__favorite-status-dot ${
							country.favorited ? 'favorited' : 'not-favorited'
						}`}></span>
				</div>
			</div>
		</Link>
	);
};

export default React.memo(CatalogItem);
