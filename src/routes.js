import VueRouter from 'vue-router'

import PagesRouterHelper from '@/helpers/router/pagesRouter.helper'
import VueExamplesRouterHelper from '@/helpers/router/vueExamplesRouter.helper'
import JavaScriptExamplesRouterHelper from '@/helpers/router/javascriptExamplesRouter.helper'
import UIElementsRouterHelper from '@/helpers/router/UIElementsRouter.helper'

import HomePage from '@/components/pages/HomePage.vue'
import Page404 from '@/components/pages/Page404.vue'
import SinglePage from '@/components/pages/SinglePage.vue'

import ModalsExamples from '@/components/ui-elements/ModalsExamples.vue'

export default new VueRouter({
	// mode: 'history',
	routes: [
		{
			name: PagesRouterHelper.constructor.HOME_PAGE_NAME,
			path: '/',
			component: HomePage
		},
		VueExamplesRouterHelper.routes(),
		JavaScriptExamplesRouterHelper.routes(),
		UIElementsRouterHelper.routes(),
		{
			path: '*',
			component: Page404
		}
	],
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}
})
