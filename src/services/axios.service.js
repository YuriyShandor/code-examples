import Vue from 'vue'
import axios from 'axios'

const $axios = axios.create({
  // customized XMLHttpRequest wrapper library
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true,
  baseURL: 'https://pixabay.com/api/'
})
// global request interceptor
$axios.interceptors.request.use((config) => {
  config.params = config.params || {}
  config.params['key'] = '17459503-b53b6c0cdbd4d3bcd974119dc'
  config.headers.Accept = 'application/json'
  return config
})

// global response interceptor
$axios.interceptors.response.use(
  response => {
    console.log(response)
    return response
  },
  error => {
    console.log(error)
    return error
  }
)

Vue.prototype.$axios = $axios

export default $axios