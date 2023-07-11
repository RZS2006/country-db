import React from 'react';

const DetailsImages = ({ country }) => {
	const { name, flags, coatOfArms } = country;

	return (
		<div className="details__image-container">
			<div>
				<img
					className="details__flag"
					src={flags.svg}
					alt={`Flag of ${name.common}`}
				/>
				{flags.alt && (
					<p className="details__flag-description">{flags.alt}</p>
				)}
			</div>

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
