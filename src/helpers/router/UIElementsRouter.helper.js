/* eslint-disable */
import SinglePage from '@/components/pages/SinglePage'

import ModalsExamples from '@/components/ui-elements/ModalsExamples'

class UIElementsRouterHelper {
	static get UI_ELEMENTS_PAGE_NAME() {
		return 'UI Elements Page'
	}
	static get UI_ELEMENTS_PAGE_PATH() {
		return 'ui-elements'
	}

	static get MODALS_EXAMPLES_PAGE_NAME() {
		return 'Modals Examples'
	}
	static get MODALS_EXAMPLES_PAGE_PATH() {
		return 'modals'
	}

	routes() {
		return {
			name: this.constructor.UI_ELEMENTS_PAGE_NAME,
			path: `/${this.constructor.UI_ELEMENTS_PAGE_PATH}`,
			component: SinglePage,
			children: [
				{
					name: this.constructor.MODALS_EXAMPLES_PAGE_NAME,
					path: this.constructor.MODALS_EXAMPLES_PAGE_PATH,
					component: ModalsExamples
				}
			]
		}
	}

	menuItems() {
		return {
			title: this.constructor.UI_ELEMENTS_PAGE_NAME,
			link: `/${this.constructor.UI_ELEMENTS_PAGE_PATH}`,
			subItems: [
				{
					title: this.constructor.MODALS_EXAMPLES_PAGE_NAME,
					link: `/${this.constructor.UI_ELEMENTS_PAGE_PATH}/${this.constructor.MODALS_EXAMPLES_PAGE_PATH}`
				}
			]
		}
	}
}

export default new UIElementsRouterHelper()
