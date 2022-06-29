// --- CountryDB - api.js --- Final

// Exports
export const getCountries = async () => {
	try {
		const res = await fetch('https://restcountries.com/v3.1/all');
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
};

export const getCountryById = async (id) => {
	try {
		const res = await fetch(
			`https://restcountries.eu/rest/v3.1/alpha/${id}`
		);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
};

export const getCountryByLanguage = async (language) => {
	try {
		const res = await fetch(
			`https://restcountries.eu/rest/v3.1/lang/${language}`
		);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
};
