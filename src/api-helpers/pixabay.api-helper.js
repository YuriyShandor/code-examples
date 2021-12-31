import $axios from '@/services/axios.service'
import axios from 'axios'
import GlobalHelper from '@/helpers/global.helper'
class PixabayApiHelper {
  getImages(searchField, imagesQty, orientation = 'horizontal') {
    let pixabayImagesQueryParams = {
      key: '17459503-b53b6c0cdbd4d3bcd974119dc',
      q: searchField,
      image_type: 'photo',
      orientation: orientation,
      per_page: imagesQty,
      order: 'popular'
    }
    let queryString = GlobalHelper.paramsToQueryString(pixabayImagesQueryParams)
    return axios.get(`https://pixabay.com/api/${queryString}`)
  }
}

export default new PixabayApiHelper()