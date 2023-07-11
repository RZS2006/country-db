import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Component
const Search = ({ ...props }) => {
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
						id="query"
						autoComplete="off"
						value={props.query}
						onChange={(e) => props.setQuery(e.target.value)}
					/>
				</label>
				<button
					className="search__query-submit primary"
					type="submit"
					onClick={(e) => props.search(e)}>
					Search
				</button>
				<button
					className="search__query-submit secondary"
					type="submit"
					aria-label="Search"
					onClick={(e) => props.search(e)}>
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</form>
			<div className="search__filter-container">
				<label
					className="search__input-label search__filter-label"
					htmlFor="hide-non-favorites">
					<input
						className="search__filter-checkbox"
						type="checkbox"
						name="hide-non-favorites"
						id="hide-non-favorites"
						checked={props.hideNonFavorites}
						onChange={() =>
							props.setHideNonFavorites(!props.hideNonFavorites)
						}
					/>
					Hide non-favorites
				</label>
				<label
					className="search__input-label search__filter-label"
					htmlFor="hide-favorites">
					<input
						className="search__filter-checkbox"
						type="checkbox"
						name="hide-favorites"
						id="hide-favorites"
						checked={props.hideFavorites}
						onChange={() =>
							props.setHideFavorites(!props.hideFavorites)
						}
					/>
					Hide favorites
				</label>
				<label
					className="search__input-label search__filter-label"
					htmlFor="sorting-property">
					Sorting property
					<select
						className="search__filter-select"
						name="sorting-property"
						id="sorting-property"
						value={props.sortingProperty}
						onChange={(e) =>
							props.setSortingProperty(e.target.value)
						}>
						<option value="alphabetical">Alphabetical</option>
						<option value="population">Population</option>
						<option value="alpha-2">Alpha-2</option>
						<option value="alpha-3">Alpha-3</option>
					</select>
				</label>
				<label
					className="search__input-label search__filter-label"
					htmlFor="sorting-order">
					Sorting order
					<select
						className="search__filter-select"
						name="sorting-order"
						id="sorting-order"
						value={props.sortingOrder}
						onChange={(e) => props.setSortingOrder(e.target.value)}>
						<option value="ascending">Ascending</option>
						<option value="descending">Descending</option>
					</select>
				</label>
			</div>
		</section>
	);
};

export default Search;
