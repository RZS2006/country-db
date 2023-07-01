// --- CountryDB - DetailsHeader.js ---

// Imports
import React from 'react';

// Component
const DetailsHeader = ({ country, toggleFavoriteStatus }) => {
	const { id, name, favorited } = country;

	// Render
	return (
		<div className="details__header">
			<div className="details__name-container">
				<h2
					className={`details__name ${
						name.common.length > 20 ? 'long' : 'short'
					}`}>
					{country.name.common}
					<small className="details__native-name">
						({name.official})
					</small>
				</h2>
			</div>

			<span
				className={`details__favorite-status-container ${
					favorited ? 'favorited' : 'not-favorited'
				}`}
				onClick={() => toggleFavoriteStatus(id)}>
				<small>{favorited ? 'Favorited' : 'Add to Favorites'}</small>
				<span className="details__favorite-status-dot"></span>
			</span>
		</div>
	);
};

export default DetailsHeader;
