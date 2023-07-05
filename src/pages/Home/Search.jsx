import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Component
const Search = ({
	query,
	setQuery,
	search,
	hideNonFavorites,
	setHideNonFavorites,
	hideFavorites,
	setHideFavorites,
	sortingProperty,
	setSortingProperty,
	sortingOrder,
	setSortingOrder,
}) => {
	// Render
	return (
		<section className="search">
			<form className="search__query-container">
				<label
					className="search__input-label search__query-input-label"
					htmlFor="query">
					Search for a country
					<input
						className="search__query-input"
						type="text"
						name="query"
						autoComplete="off"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</label>
				<button
					className="search__query-submit primary"
					type="submit"
					onClick={(e) => search(e)}>
					Search
				</button>
				<button
					className="search__query-submit secondary"
					type="submit"
					onClick={(e) => search(e)}>
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</form>
			<div className="search__filter-container">
				<label
					className="search__input-label search__filter-checkbox-label"
					htmlFor="hide-non-favorites">
					<input
						className="search__filter-checkbox"
						type="checkbox"
						name="hide-non-favorites"
						checked={hideNonFavorites}
						onChange={() => setHideNonFavorites(!hideNonFavorites)}
					/>
					Hide non-favorites
				</label>
				<label
					className="search__input-label search__filter-checkbox-label"
					htmlFor="hide-favorites">
					<input
						className="search__filter-checkbox"
						type="checkbox"
						name="hide-favorites"
						checked={hideFavorites}
						onChange={() => setHideFavorites(!hideFavorites)}
					/>
					Hide favorites
				</label>
				<label
					className="search__input-label search__filter-checkbox-label"
					htmlFor="sorting-property">
					Sorting Property
					<select
						name="sorting-property"
						id="sorting-property"
						value={sortingProperty}
						onChange={(e) => setSortingProperty(e.target.value)}>
						<option value="alphabetical">Alphabetical</option>
						<option value="population">Population</option>
						<option value="area">Area</option>
					</select>
				</label>
				<label
					className="search__input-label search__filter-checkbox-label"
					htmlFor="sorting-order">
					Sorting Order
					<select
						name="sorting-order"
						id="sorting-order"
						value={sortingOrder}
						onChange={(e) => setSortingOrder(e.target.value)}>
						<option value="descending">Descending</option>
						<option value="ascending">Ascending</option>
					</select>
				</label>
			</div>
		</section>
	);
};

export default Search;
