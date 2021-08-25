import $axios from '@/services/axios.service'

class PixabayApiHelper {
  getImages(searchField) {
    return $axios.get(`?q=${searchField}
                           &image_type=photo
                           &orientation=horizontal`)
  }
}

export default new PixabayApiHelper()