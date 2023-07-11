const BASE_URL = 'https://restcountries.com/v3.1/';

export const getCountries = async () => {
	try {
		const res = await fetch(`${BASE_URL}all`);
		const data = await res.json();
		return data;
	} catch (e) {
		throw new Error(e);
	}
};

export const getCountryById = async (id) => {
	try {
		const res = await fetch(`${BASE_URL}alpha/${id}`);
		const data = await res.json();
		return data;
	} catch (e) {
		throw new Error(e);
	}
};

export const getCountryByLanguage = async (language) => {
	try {
		const res = await fetch(`${BASE_URL}lang/${language}`);
		const data = await res.json();
		return data;
	} catch (e) {
		throw new Error(e);
	}
};
