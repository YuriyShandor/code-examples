import VueRouter from 'vue-router'

import PagesRouterHelper from '@/helpers/router/pagesRouter.helper'
import VueRouterHelper from '@/helpers/router/vueRouter.helper'

import HomePage from '@/components/pages/HomePage.vue'
import Page404 from '@/components/pages/Page404.vue'
import SinglePage from '@/components/pages/SinglePage.vue'

import VuexExamples from '@/components/vue/VuexExamples.vue'

export default new VueRouter({
	// mode: 'history',
	routes: [
		{
			name: PagesRouterHelper.constructor.HOME_PAGE_NAME,
			path: '/',
			component: HomePage
		},
		{
			name: PagesRouterHelper.constructor.VUE_TEMPLATES_PAGE_NAME,
			path: `/${PagesRouterHelper.constructor.VUE_TEMPLATES_PAGE_PATH}`,
			component: SinglePage,
			children: [
				{
					name: VueRouterHelper.constructor.VUEX_TEMPLATES_PAGE_NAME,
					path: VueRouterHelper.constructor.VUEX_TEMPLATES_PAGE_PATH,
					component: VuexExamples
				}
			]
		},
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
