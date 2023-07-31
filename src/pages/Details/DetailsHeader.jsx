import React from 'react';

import { useCountries } from '../../contexts/CountriesContext';

const DetailsHeader = ({ country }) => {
	const { id, name, favorited } = country;
	const {
		methods: { toggleFavoriteStatus },
	} = useCountries();

	return (
		<>
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

				<button
					className={`details__favorite-status-container ${
						favorited ? 'favorited' : 'not-favorited'
					}`}
					onClick={() => toggleFavoriteStatus(id)}>
					{favorited ? 'Favorited' : 'Add to Favorites'}
					<span className="details__favorite-status-dot"></span>
				</button>
			</div>
		</>
	);
};

export default DetailsHeader;
