// --- CountryDB - DetailsData.js ---

// Imports
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { getCountryById, getCountryByLanguage } from '../../api/api';

const booleanToString = (boolean) => {
	return boolean ? 'Yes' : 'No';
};

// Component
const DetailsData = ({ country }) => {
	// State
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [borderCountries, setBorderCountries] = useState([]);
	const [languages, setLanguages] = useState({});

	// Side Effects
	// useEffect(() => {
	// 	const fetchBorderCountry = async (id) => {
	// 		try {
	// 			const borderCountry = await getCountryById(id);
	// 			console.log(borderCountry);

	// 			// setBorderCountries((prev) => [
	// 			// 	...prev,
	// 			// 	borderCountry.name.common,
	// 			// ]);
	// 		} catch (e) {
	// 			console.error(e);
	// 		}
	// 	};

	// 	if (country.borders) {
	// 		try {
	// 			country.borders.forEach((id) => {
	// 				fetchBorderCountry(id);
	// 			});
	// 		} catch (e) {
	// 			console.error(e);
	// 			setBorderCountries(country.borders);
	// 		}
	// 	}
	// }, [country]);

	// useEffect(() => {
	// 	const obj = {};
	// 	const fetchLanguage = async (langaugeId) => {
	// 		try {
	// 			if (langaugeId !== 'br') {
	// 				const fetchedLanguage = await getCountryByLanguage(
	// 					langaugeId
	// 				);
	// 				for (
	// 					let i = 0;
	// 					i < fetchedLanguage[0].languages.length;
	// 					i++
	// 				) {
	// 					if (
	// 						fetchedLanguage[0].languages[i].iso639_1 ===
	// 						langaugeId
	// 					) {
	// 						obj[langaugeId] =
	// 							fetchedLanguage[0].languages[i].name;
	// 						setLanguages({ ...obj });
	// 					}
	// 				}
	// 			} else {
	// 				obj[langaugeId] = 'Brazilian Portuguese';
	// 				setLanguages({ ...obj });
	// 			}
	// 		} catch (error) {
	// 			setLanguages(Object.keys(country.translations));
	// 			console.log(error);
	// 		}
	// 	};

	// 	Object.keys(country.translations).forEach((langaugeId) => {
	// 		const e = async () => {
	// 			await fetchLanguage(langaugeId);
	// 		};
	// 		e();
	// 	});
	// }, [country]);

	// Render

	console.log(country);

	return (
		<div className="details__data">
			<div className="details__data-section names">
				<div className="details__data-section-header">Names</div>
				<div className="details__data-section-content">
					<Entry name="Common Name" value={country.name.common} />
					<Entry name="Official Name" value={country.name.official} />

					<MultiEntry
						name="Alternative Names"
						data={country.altSpellings}>
						{country.altSpellings.map((altSpelling, i) => {
							return <Chip key={i} primary={altSpelling} />;
						})}
					</MultiEntry>
				</div>

				<div
					className={`details__data-section-dropdown ${
						dropdownOpen ? 'open' : 'closed'
					}`}>
					<div
						className="details__dropdown-button"
						onClick={() => setDropdownOpen((prev) => !prev)}>
						<span>Translations</span>
						<FontAwesomeIcon icon={faChevronDown} />
					</div>
					<div className="details__dropdown-panel">
						<div className="details__dropdown-panel-content">
							{Object.keys(country.translations).map((key, i) => {
								return (
									<Entry
										key={i}
										name={key}
										value={country.translations[key].common}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="details__data-section geography">
				<div className="details__data-section-header">Geography</div>
				<div className="details__data-section-content">
					{country.capital && (
						<MultiEntry name="Capital(s)" data={country.capital}>
							{country.capital.map((capital, i) => {
								return <Chip key={i} primary={capital} />;
							})}
						</MultiEntry>
					)}

					<Entry name="Region" value={country.region} />
					<Entry name="Subregion" value={country.subregion} />
					<Entry
						name="Land Area"
						value={
							<>
								{country.area.toLocaleString()} km<sup>2</sup>
							</>
						}
					/>
					<Entry
						name="Population"
						value={country.population.toLocaleString()}
					/>
					<Entry
						name="Independent"
						value={booleanToString(country.independent)}
					/>
					<Entry
						name="UN State"
						value={booleanToString(country.unMember)}
					/>
					<Entry
						name="Landlocked"
						value={booleanToString(country.landlocked)}
					/>
					{/* {borderCountries && (
						<MultiEntry
							entryKey="Land Borders"
							entryData={country.borders}>
							{country.borders.map((_, i) => {
								return (
									<Chip
										key={i}
										primary={borderCountries[i]}
									/>
								);
							})}
						</MultiEntry>
					)} */}
					<Entry
						name="Latitude/Longitude"
						value={
							country.latlng.length > 0 &&
							`${country.latlng[0].toFixed(2)}, 
							${country.latlng[1].toFixed(2)}`
						}
					/>
				</div>
			</div>
			<div className="details__data-section miscellaneous">
				<div className="details__data-section-header">
					Miscellaneous
				</div>
				<div className="details__data-section-content">
					<MultiEntry
						name="Languages"
						data={Object.keys(country.languages)}>
						{Object.values(country.languages).map((language, i) => {
							return <Chip key={i} primary={language} />;
						})}
					</MultiEntry>

					<MultiEntry
						name="Currencies"
						data={Object.keys(country.currencies)}>
						{Object.keys(country.currencies).map((key, i) => {
							return (
								<Chip
									key={i}
									primary={country.currencies[key].name}
									secondary={`${country.currencies[key].symbol}, ${key}`}
								/>
							);
						})}
					</MultiEntry>

					<MultiEntry name="Time Zone(s)" data={country.timezones}>
						{country.timezones.map((timezone, i) => {
							return <Chip key={i} primary={timezone} />;
						})}
					</MultiEntry>

					{country.tld && (
						<MultiEntry name="Internet TLD(s)" data={country.tld}>
							{country.tld.map((tld, i) => {
								return <Chip key={i} primary={tld} />;
							})}
						</MultiEntry>
					)}

					{country.gini && (
						<Entry
							name="Gini Index"
							value={`${Object.values(country.gini)[0]} (${
								Object.keys(country.gini)[0]
							})`}
						/>
					)}

					<Entry
						name="Demonym"
						value={country.demonyms['eng']['m']}
					/>
					<Entry name="Driving Side" value={country.car.side} />
				</div>
			</div>
			<div className="details__data-section codes">
				<div className="details__data-section-header">Codes</div>
				<div className="details__data-section-content">
					<Entry name="Alpha 2" value={country.cca2} />
					<Entry name="Alpha 3" value={country.cca3} />
					<Entry name="Numeric" value={country.ccn3} />
					<Entry name="CIOC" value={country.cioc} />
					<Entry name="FIFA" value={country.fifa} />
					<MultiEntry name="Driving Sign(s)" data={country.car.signs}>
						{country.car.signs.map((sign, i) => {
							return <Chip key={i} primary={sign} />;
						})}
					</MultiEntry>
				</div>
			</div>
		</div>
	);
};

export default React.memo(DetailsData);

const Entry = ({ name, value }) => {
	return (
		<div className="details__data-section-entry">
			<span className="details__entry-key">{name}:</span>
			<span className="details__entry-value">{value ? value : '-'}</span>
		</div>
	);
};

const MultiEntry = ({ name, data, children }) => {
	return (
		<div className="details__data-section-entry">
			<span className="details__entry-key">{name}:</span>
			<div className="details__entry-value multiple">
				{!data ? null : data.length > 0 ? children : '-'}
			</div>
		</div>
	);
};

const Chip = ({ primary, secondary }) => {
	return (
		<span className="details__entry-value-chip">
			<span>{primary}</span>
			{secondary && <small>({secondary})</small>}
		</span>
	);
};
