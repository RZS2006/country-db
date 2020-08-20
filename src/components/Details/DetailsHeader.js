// --- CountryDB - DetailsHeader.js ---

// Imports
import React from 'react';

// Component
const DetailsHeader = ({ country, toggleFavoriteStatus }) => {
	// Render
	return (
		<div className="details__header">
			<div className="details__name-container">
				<h2
					className={`details__name ${
						country.name.length > 20 ? 'long' : 'short'
					}`}>
					{country.name}
					<small className="details__native-name">
						({country.nativeName})
					</small>
				</h2>
			</div>
			<div
				className={`details__favorite-status-container ${
					country.favorited ? 'favorited' : 'not-favorited'
				}`}
				onClick={() => {
					toggleFavoriteStatus(country.id);
				}}>
				<small>
					{country.favorited ? 'Favorited' : 'Add to Favorites'}
				</small>
				<span className="details__favorite-status-dot"></span>
			</div>
		</div>
	);
};

export default DetailsHeader;
