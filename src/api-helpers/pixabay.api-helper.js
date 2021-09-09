import $axios from '@/services/axios.service'
import axios from 'axios';

class PixabayApiHelper {
  getImages(searchField) {
    return axios.get('https://pixabay.com/api/' +
    '?key=17459503-b53b6c0cdbd4d3bcd974119dc' +
    `&q=${searchField}` +
    '&image_type=photo' +
    '&orientation=horizontal')
  }
}

export default new PixabayApiHelper()