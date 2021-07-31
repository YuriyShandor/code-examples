import Vue from 'vue'
import axios from 'axios'

const $axios = axios.create({
	// customized XMLHttpRequest wrapper library
	headers: {
		'X-Requested-With': 'XMLHttpRequest'
	},
	withCredentials: true,
	baseURL: ConstantService.domain + '/api/v1'
})
// global request interceptor
$axios.interceptors.request.use((config) => {
	config.params = config.params || {}
	config.params['session-token'] = 'session-token'
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

/////////////Using In API Helpers///////////////
class UsersApiHelper {
	getUsers(page, quantity) {
		return $axios.get(`/users/users-full-list?page=${page}&quantity=${quantity}`)
	}

	addNewUser(userFirstName, userLastName, userAge) {
		const data = new FormData()
		data.append('user-first-name', userFirstName)
		data.append('user-last-name', userLastName)
		data.append('user-age', userAge)
	}
}

export default new UsersApiHelper()

