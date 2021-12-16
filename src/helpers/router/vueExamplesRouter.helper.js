/* eslint-disable */
import SinglePage from '@/components/pages/SinglePage'

import VuexExamples from '@/components/vue/VuexExamples'
import RouterExamples from '@/components/vue/RouterExamples'
import AxiosExamples from '@/components/vue/AxiosExamples'

class VueExamplesRouterHelper {
	static get VUE_EXAMPLES_PAGE_NAME() {
		return 'Vue Examples'
	}
	static get VUE_EXAMPLES_PAGE_PATH() {
		return 'vue'
	}

	static get VUEX_EXAMPLES_PAGE_NAME() {
		return 'Vuex Examples'
	}
	static get VUEX_EXAMPLES_PAGE_PATH() {
		return 'vuex'
	}

	static get ROUTER_EXAMPLES_PAGE_NAME() {
		return 'Router Examples'
	}
	static get ROUTER_EXAMPLES_PAGE_PATH() {
		return 'router'
	}

	static get AXIOS_EXAMPLES_PAGE_NAME() {
		return 'Axios Examples'
	}
	static get AXIOS_EXAMPLES_PAGE_PATH() {
		return 'axios'
	}

	routes() {
		return {
			name: this.constructor.VUE_EXAMPLES_PAGE_NAME,
			path: `/${this.constructor.VUE_EXAMPLES_PAGE_PATH}`,
			component: SinglePage,
			children: [
				{
					name: this.constructor.VUEX_EXAMPLES_PAGE_NAME,
					path: this.constructor.VUEX_EXAMPLES_PAGE_PATH,
					component: VuexExamples
				},
				{
					name: this.constructor.ROUTER_EXAMPLES_PAGE_NAME,
					path: this.constructor.ROUTER_EXAMPLES_PAGE_PATH,
					component: RouterExamples
				},
				{
					name: this.constructor.AXIOS_EXAMPLES_PAGE_NAME,
					path: this.constructor.AXIOS_EXAMPLES_PAGE_PATH,
					component: AxiosExamples
				}
			]
		}
	}

	menuItems() {
		return {
			title: this.constructor.VUE_EXAMPLES_PAGE_NAME,
			link: `/${this.constructor.VUE_EXAMPLES_PAGE_PATH}`,
			subItems: [
				{
					title: this.constructor.VUEX_EXAMPLES_PAGE_NAME,
					link: `/${this.constructor.VUE_EXAMPLES_PAGE_PATH}/${this.constructor.VUEX_EXAMPLES_PAGE_PATH}`
				},
				{
					title: this.constructor.ROUTER_EXAMPLES_PAGE_NAME,
					link: `/${this.constructor.VUE_EXAMPLES_PAGE_PATH}/${this.constructor.ROUTER_EXAMPLES_PAGE_PATH}`
				},
				{
					title: this.constructor.AXIOS_EXAMPLES_PAGE_NAME,
					link: `/${this.constructor.VUE_EXAMPLES_PAGE_PATH}/${this.constructor.AXIOS_EXAMPLES_PAGE_PATH}`
				}
			]
		}
	}
}

export default new VueExamplesRouterHelper()
