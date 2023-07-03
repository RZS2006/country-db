import React from 'react';

// Component
const DetailsImages = ({ country }) => {
	const { name, flags, coatOfArms } = country;

	// Render
	return (
		<div className="details__image-container">
			<img
				className="details__flag"
				src={flags.svg}
				alt={`Flag of ${name.common}`}
			/>

			{coatOfArms.svg && (
				<img
					className="details__coat-of-arms"
					src={coatOfArms.svg}
					alt={`Coat of Arms of ${name.common}`}
				/>
			)}
		</div>
	);
};

export default DetailsImages;
