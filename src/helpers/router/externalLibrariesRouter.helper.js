/* eslint-disable */
import SinglePage from '@/components/pages/SinglePage'

import SwiperExamples from '@/components/external-libraries/swiper/SwiperExamples'

class ExternalLibrariesRouterHelper {
	static get EXTERNAL_LIBRARIES_PAGE_NAME() {
		return 'External Libraries Examples'
	}
	static get EXTERNAL_LIBRARIES_PAGE_PATH() {
		return 'external-libraries'
	}

	static get SWIPER_EXAMPLES_PAGE_NAME() {
		return 'Swiper Examples'
	}
	static get SWIPER_EXAMPLES_PAGE_PATH() {
		return 'swiper'
	}

	routes() {
		return {
			name: this.constructor.EXTERNAL_LIBRARIES_PAGE_NAME,
			path: `/${this.constructor.EXTERNAL_LIBRARIES_PAGE_PATH}`,
			component: SinglePage,
			children: [
				{
					name: this.constructor.SWIPER_EXAMPLES_PAGE_NAME,
					path: this.constructor.SWIPER_EXAMPLES_PAGE_PATH,
					component: SwiperExamples
				}
			]
		}
	}

	menuItems() {
		return {
			title: this.constructor.EXTERNAL_LIBRARIES_PAGE_NAME,
			link: `/${this.constructor.EXTERNAL_LIBRARIES_PAGE_PATH}`,
			subItems: [
				{
					title: this.constructor.SWIPER_EXAMPLES_PAGE_NAME,
					link: `/${this.constructor.EXTERNAL_LIBRARIES_PAGE_PATH}/${this.constructor.SWIPER_EXAMPLES_PAGE_PATH}`
				}
			]
		}
	}
}

export default new ExternalLibrariesRouterHelper()
