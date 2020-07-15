export const getCountries = async () => {
    try {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    return data
    } catch(error) {
        console.log(error)
    }
}

export const getCountryByCode = async (code) => {
    try {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
    const data = await res.json();
    return data
    } catch(error) {
        console.log(error)
    }
}