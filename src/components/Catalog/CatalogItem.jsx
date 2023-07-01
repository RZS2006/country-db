import React from 'react';
import { Link } from 'react-router-dom';

// Component
const CatalogItem = ({ country }) => {
	const { id, name, favorited, flags } = country;

	// Render
	return (
		<Link to={`/countries/${id}`}>
			<div className="catalog-item">
				<img
					className="catalog-item__flag"
					src={flags.svg}
					alt={`Flag of ${name.common}`}
				/>
				<div className="catalog-item__name-container">
					<h2
						className={`catalog-item__name ${
							name.common.length > 20 ? 'long' : 'short'
						}`}>
						{name.common}
					</h2>
					<small className="catalog-item__native-name">
						({name.official})
					</small>
				</div>
				<div className="catalog-item__favorite-status-container">
					{favorited && <small>Favorited</small>}
					<span
						className={`catalog-item__favorite-status-dot ${
							favorited ? 'favorited' : 'not-favorited'
						}`}></span>
				</div>
			</div>
		</Link>
	);
};

export default React.memo(CatalogItem);
