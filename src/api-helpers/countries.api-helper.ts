import axios from 'axios';

class CountriesApiHelper {
  getCountriesFromRestCountries() {
    return axios.get('https://restcountries.com/v3.1/all');
  }
}

export default new CountriesApiHelper();
