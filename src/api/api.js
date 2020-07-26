export const getCountries = async () => {
    try {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    return data
    } catch(error) {
        throw new Error(error)
    }
}

// export const getCountryById = async (id) => {
//     try {
//     const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
//     const data = await res.json();
//     return data
//     } catch(error) {
//         throw new Error(error)
//     }
// }