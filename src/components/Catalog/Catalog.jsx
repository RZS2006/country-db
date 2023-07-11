import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';

import './Catalog.css';

import CatalogItem from './CatalogItem';

const Catalog = ({ countries, noResultsMessage }) => {
	return (
		<section className="catalog">
			{countries.length > 0 ? (
				<AutoSizer>
					{({ height, width }) => (
						<List
							height={height}
							width={width}
							inn
							itemData={countries}
							itemCount={countries.length}
							itemSize={100}>
							{({ data, index, style }) => {
								return (
									<div style={style}>
										<CatalogItem country={data[index]} />
									</div>
								);
							}}
						</List>
					)}
				</AutoSizer>
			) : (
				<CatalogNoResults message={noResultsMessage} />
			)}
		</section>
	);
};

const CatalogNoResults = ({ message }) => {
	return (
		<div className="catalog__no-results-container">
			<span className="catalog__no-results">{message}</span>
		</div>
	);
};

export default Catalog;
