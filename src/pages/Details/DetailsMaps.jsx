import React from 'react';

// Component
const DetailsMaps = ({ country }) => {
	const { maps } = country;

	// Render
	return (
		<div className="details__map-container">
			<a href={maps.googleMaps} target="_blank" rel="noopener noreferrer">
				Google Maps
			</a>
			<a
				href={maps.openStreetMaps}
				target="_blank"
				rel="noopener noreferrer">
				Open Street Maps
			</a>
		</div>
	);
};

export default DetailsMaps;
