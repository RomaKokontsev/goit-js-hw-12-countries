import axios from 'axios';

function fetchCountries(searchQuery) {
  axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/name';
  return axios.get(`/${searchQuery}`).then(response => response.data);
}

export default fetchCountries;
