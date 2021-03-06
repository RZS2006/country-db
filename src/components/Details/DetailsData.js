// --- CountryDB - DetailsData.js ---

// Imports
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { getCountryById, getCountryByLanguage } from '../../api/api';

// Component
const DetailsData = ({ country }) => {
	// State
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [borderCountries, setBorderCountries] = useState([]);
	const [languages, setLanguages] = useState({});

	// Side Effects
	useEffect(() => {
		const fetchBorderCountry = async borderCountryId => {
			try {
				const fetchedBorderCountry = await getCountryById(borderCountryId);
				setBorderCountries(prevState => [
					...prevState,
					fetchedBorderCountry.name,
				]);
			} catch (error) {
				console.log(error);
				setBorderCountries(country.borders);
			}
		};

		country.borders.forEach(borderCountryId => {
			const e = async () => {
				await fetchBorderCountry(borderCountryId);
			};
			e();
		});
	}, [country]);

	useEffect(() => {
		const obj = {};
		const fetchLanguage = async langaugeId => {
			try {
				if (langaugeId !== 'br') {
					const fetchedLanguage = await getCountryByLanguage(langaugeId);
					for (let i = 0; i < fetchedLanguage[0].languages.length; i++) {
						if (fetchedLanguage[0].languages[i].iso639_1 === langaugeId) {
							obj[langaugeId] = fetchedLanguage[0].languages[i].name;
							setLanguages({ ...obj });
						}
					}
				} else {
					obj[langaugeId] = 'Brazilian Portuguese';
					setLanguages({ ...obj });
				}
			} catch (error) {
				setLanguages(Object.keys(country.translations));
				console.log(error);
			}
		};

		Object.keys(country.translations).forEach(langaugeId => {
			const e = async () => {
				await fetchLanguage(langaugeId);
			};
			e();
		});
	}, [country]);

	// Render

	return (
		<div className="details__data">
			<div className="details__data-section names">
				<div className="details__data-section-header">Names</div>
				<div className="details__data-section-content">

					{/* Name */}
					<DataEntry entryKey="Name" entryValue={country.name} />

					{/* Native Name */}
					<DataEntry
						entryKey="Native Name"
						entryValue={country.nativeName}
					/>

					{/* Alternative Names */}
					<DataMultipleEntry
						entryKey="Alternative Names"
						entryData={country.altSpellings}>
						{country.altSpellings.map((altSpelling, index) => {
							return <Chip key={index} primary={altSpelling} />;
						})}
					</DataMultipleEntry>
				</div>

				{/* Translations */}
				<div
					className={`details__data-section-dropdown ${dropdownOpen ? 'open' : 'closed'}`}>
					<div
						className="details__dropdown-button"
						onClick={() => setDropdownOpen(prevState => !prevState)}>
						<span>Translations</span>
						<FontAwesomeIcon icon={faChevronDown} />
					</div>
					<div className="details__dropdown-panel">
						<div className="details__dropdown-panel-content">
							{Object.keys(country.translations).map((key, index) => {
								return (
									<DataEntry
										key={index}
										entryKey={languages[key]}
										entryValue={country.translations[key]}
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

					{/* Capital */}
					<DataEntry entryKey="Capital" entryValue={country.capital} />

					{/* Region */}
					<DataEntry entryKey="Region" entryValue={country.region} />

					{/* Subregion */}
					<DataEntry entryKey="Subregion" entryValue={country.subregion} />

					{/* Land Area */}
					<DataEntry entryKey="Land Area" entryValue={country.area ? `${country.area.toLocaleString()} km2` : country.area} />

					{/* Population */}
					<DataEntry entryKey="Population" entryValue={country.population ? country.population.toLocaleString() : country.population}/>
					
					{/* Land Borders */}
					{borderCountries && (
						<DataMultipleEntry
							entryKey="Land Borders"
							entryData={country.borders}>
							{country.borders.map((border, index) => {
								return (
									<Chip key={index} primary={borderCountries[index]} />
								);
							})}
						</DataMultipleEntry>
					)}

					{/* Latitude/Longtude */}
					<DataEntry entryKey="Latitude/Longitude" entryValue={country.latlng.length > 0 ? `${country.latlng[0]}, ${country.latlng[1]}` : null} />
				</div>
			</div>
			<div className="details__data-section miscellaneous">
				<div className="details__data-section-header">Miscellaneous</div>
				<div className="details__data-section-content">

					{/* Languages */}
					<DataMultipleEntry
						entryKey="Languages"
						entryData={country.languages}>
						{country.languages.map((language, index) => {
							return (
								<Chip
									key={index}
									primary={language.name}
									secondary={language.nativeName}
								/>
							);
						})}
					</DataMultipleEntry>

					{/* Currencies */}
					<DataMultipleEntry
						entryKey="Currencies"
						entryData={country.currencies}>
						{country.currencies.map((currency, index) => {
							return (
								<Chip
									key={index}
									primary={currency.name}
									secondary={currency.code}
								/>
							);
						})}
					</DataMultipleEntry>

					{/* Time Zones */}
					<DataMultipleEntry
						entryKey="Time Zones"
						entryData={country.timezones}>
						{country.timezones.map((timezone, index) => {
							return <Chip key={index} primary={timezone} />;
						})}
					</DataMultipleEntry>

					{/* Demonym */}
					<DataEntry entryKey="Demonym" entryValue={country.demonym} />

					{/* Internet TLD */}
					<DataMultipleEntry
						entryKey="Internet TLD"
						entryData={country.topLevelDomain}>
						{country.topLevelDomain.map((tld, index) => {
							return <Chip key={index} primary={tld} />;
						})}
					</DataMultipleEntry>

					{/* Unions */}
					<DataMultipleEntry
						entryKey="Unions"
						entryData={country.regionalBlocs}>
						{country.regionalBlocs.map((regionalBloc, index) => {
							return (
								<Chip
									key={index}
									primary={regionalBloc.name}
									secondary={regionalBloc.acronym}
								/>
							);
						})}
					</DataMultipleEntry>

					{/* Calling Codes */}
					<DataMultipleEntry
						entryKey="Calling Codes"
						entryData={country.callingCodes}>
						{country.callingCodes.map((callingCode, index) => {
							if (callingCode !== "") {
								return <Chip key={index} primary={`+${callingCode}`} />;
							} else {
								return "-"
							}
						})}
					</DataMultipleEntry>
				</div>
			</div>
			<div className="details__data-section codes">
				<div className="details__data-section-header">Codes</div>
				<div className="details__data-section-content">

					{/* Alpha 2 */}
					<DataEntry entryKey="Alpha 2" entryValue={country.alpha2Code} />

					{/* Alpha 3 */}
					<DataEntry entryKey="Alpha 3" entryValue={country.alpha3Code} />

					{/* Numeric */}
					<DataEntry entryKey="Numeric" entryValue={country.numericCode} />

					{/* CIOC */}
					<DataEntry entryKey="CIOC" entryValue={country.cioc} />
				</div>
			</div>
		</div>
	);
};

export default React.memo(DetailsData);

const DataEntry = props => {
	return (
		<div className="details__data-section-entry">
			<span className="details__entry-key">{props.entryKey}:</span>
			<span className="details__entry-value">
				{props.entryValue ? props.entryValue : '-'}
			</span>
		</div>
	);
};

const DataMultipleEntry = props => {
	return (
		<div className="details__data-section-entry">
			<span className="details__entry-key">{props.entryKey}:</span>
			<div className="details__entry-value multiple">
				{!props.entryData
					? null
					: props.entryData.length > 0
					? props.children
					: '-'}
			</div>
		</div>
	);
};

const Chip = props => {
	return (
		<span className="details__entry-value-chip">
			<span>{props.primary}</span>
			{props.secondary && <small>({props.secondary})</small>}
		</span>
	);
};
