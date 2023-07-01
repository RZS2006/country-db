import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { getCountryById, getCountryByLanguage } from '../../api';

const booleanToString = (boolean) => {
	return boolean ? 'Yes' : 'No';
};

const capitalize = (string) => {
	if (typeof string !== 'string') return string;

	return string.charAt(0).toUpperCase() + string.slice(1);
};

// Component
const DetailsData = ({ country }) => {
	const {
		name,
		altSpellings,
		translations,
		capital,
		region,
		subregion,
		continents,
		area,
		population,
		independent,
		unMember,
		landlocked,
		borders,
		latlng,
		languages,
		currencies,
		timezones,
		tld,
		gini,
		demonyms,
		car,
	} = country;

	// State
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [countryBorders, setCountryBorders] = useState([]);
	// const [languages, setLanguages] = useState({});

	// Side Effects
	useEffect(() => {
		const fetchCountryBorder = async (id) => {
			const border = await getCountryById(id);
			setCountryBorders((prev) => [...prev, border[0].name.common]);
		};

		const fetchCountryBorders = async () => {
			try {
				if (borders) {
					borders.forEach((id) => fetchCountryBorder(id));
				}
			} catch (e) {
				console.error(e);

				if (borders) {
					setCountryBorders(borders);
				}
			}
		};

		fetchCountryBorders();
	}, [country]);

	// 	fetchCountryBorders();
	// 	// const fetchBorderCountry = async (id) => {
	// 	// 	try {
	// 	// 		const borderCountry = await getCountryById(id);
	// 	// 		console.log(borderCountry);

	// 	// 		setBorderCountries((prev) => [
	// 	// 			...prev,
	// 	// 			borderCountry.name.common,
	// 	// 		]);
	// 	// 	} catch (e) {
	// 	// 		console.error(e);
	// 	// 	}
	// 	// };

	// 	// if (country.borders) {
	// 	// 	try {
	// 	// 		country.borders.forEach((id) => {
	// 	// 			fetchBorderCountry(id);
	// 	// 		});
	// 	// 	} catch (e) {
	// 	// 		console.error(e);
	// 	// 		setBorderCountries(country.borders);
	// 	// 	}
	// 	// }
	// }, []);

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
	return (
		<div className="details__data">
			<div className="details__data-section names">
				<div className="details__data-section-header">Names</div>
				<div className="details__data-section-content">
					<Entry name="Common Name" value={name.common} />
					<Entry name="Official Name" value={name.official} />

					<MultiEntry name="Alternative Names" data={altSpellings}>
						{altSpellings.map((altSpelling, i) => {
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
							{Object.keys(translations).map((key, i) => {
								return (
									<Entry
										key={i}
										name={key}
										value={translations[key].common}
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
					{capital && (
						<MultiEntry name="Capital(s)" data={capital}>
							{capital.map((capital, i) => {
								return <Chip key={i} primary={capital} />;
							})}
						</MultiEntry>
					)}

					<Entry name="Region" value={region} />
					<Entry name="Subregion" value={subregion} />

					<MultiEntry name="Continents" data={continents}>
						{continents.map((continent, i) => {
							return <Chip key={i} primary={continent} />;
						})}
					</MultiEntry>

					<Entry
						name="Land Area"
						value={
							<>
								{area.toLocaleString()} km<sup>2</sup>
							</>
						}
					/>
					<Entry
						name="Population"
						value={population.toLocaleString()}
					/>
					<Entry
						name="Independent"
						value={booleanToString(independent)}
					/>
					<Entry name="UN State" value={booleanToString(unMember)} />
					<Entry
						name="Landlocked"
						value={booleanToString(landlocked)}
					/>
					{borders && (
						<MultiEntry name="Land Borders" data={countryBorders}>
							{countryBorders.map((border, i) => {
								return <Chip key={i} primary={border} />;
							})}
						</MultiEntry>
					)}
					<Entry
						name="Latitude/Longitude"
						value={`${latlng[0].toFixed(2)}° N, 
						${latlng[1].toFixed(2)}° E`}
					/>
				</div>
			</div>
			<div className="details__data-section miscellaneous">
				<div className="details__data-section-header">
					Miscellaneous
				</div>
				<div className="details__data-section-content">
					{languages && (
						<MultiEntry
							name="Languages"
							data={Object.keys(languages)}>
							{Object.values(languages).map((language, i) => {
								return <Chip key={i} primary={language} />;
							})}
						</MultiEntry>
					)}

					{currencies && (
						<MultiEntry
							name="Currencies"
							data={Object.keys(currencies)}>
							{Object.keys(currencies).map((key, i) => {
								return (
									<Chip
										key={i}
										primary={currencies[key].name}
										secondary={`${currencies[key].symbol}, ${key}`}
									/>
								);
							})}
						</MultiEntry>
					)}

					<MultiEntry name="Time Zone(s)" data={timezones}>
						{timezones.map((timezone, i) => {
							return <Chip key={i} primary={timezone} />;
						})}
					</MultiEntry>

					{tld && (
						<MultiEntry name="Internet TLD(s)" data={tld}>
							{tld.map((tld, i) => {
								return <Chip key={i} primary={tld} />;
							})}
						</MultiEntry>
					)}

					{gini && (
						<Entry
							name="Gini Index"
							value={`${Object.values(gini)[0]} (${
								Object.keys(gini)[0]
							})`}
						/>
					)}

					{demonyms && (
						<Entry name="Demonym" value={demonyms['eng']['m']} />
					)}

					<Entry name="Driving Side" value={car.side} />
					<Entry
						name="Starting Weekday"
						value={country.startOfWeek}
					/>
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

					{car.signs && (
						<MultiEntry name="Driving Sign(s)" data={car.signs}>
							{car.signs.map((sign, i) => {
								return <Chip key={i} primary={sign} />;
							})}
						</MultiEntry>
					)}
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
			<span className="details__entry-value">
				{capitalize(value) || '-'}
			</span>
		</div>
	);
};

const MultiEntry = ({ name, data, children }) => {
	return (
		<div className="details__data-section-entry">
			<span className="details__entry-key">{name}:</span>
			<div className="details__entry-value multiple">
				{!data || data.length < 1 || data[0] === '' ? '-' : children}
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
