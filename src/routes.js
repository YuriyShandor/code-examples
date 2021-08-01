import VueRouter from 'vue-router'

import PagesRouterHelper from '@/helpers/router/pagesRouter.helper'
import VueExamplesRouterHelper from '@/helpers/router/vueExamplesRouter.helper'

import HomePage from '@/components/pages/HomePage.vue'
import Page404 from '@/components/pages/Page404.vue'
import SinglePage from '@/components/pages/SinglePage.vue'

import VuexExamples from '@/components/vue/VuexExamples.vue'
import AxiosExamples from '@/components/vue/AxiosExamples.vue'
import RouterExamples from '@/components/vue/RouterExamples.vue'

export default new VueRouter({
	// mode: 'history',
	routes: [
		{
			name: PagesRouterHelper.constructor.HOME_PAGE_NAME,
			path: '/',
			component: HomePage,
			children: [
				{
					name: VueExamplesRouterHelper.constructor.VUEX_EXAMPLES_PAGE_NAME,
					path: VueExamplesRouterHelper.constructor.VUEX_EXAMPLES_PAGE_PATH,
					component: VuexExamples
				}
			]
		},
		{
			name: PagesRouterHelper.constructor.VUE_EXAMPLES_PAGE_NAME,
			path: `/${PagesRouterHelper.constructor.VUE_EXAMPLES_PAGE_PATH}`,
			component: SinglePage,
			children: [
				{
					name: VueExamplesRouterHelper.constructor.VUEX_EXAMPLES_PAGE_NAME,
					path: VueExamplesRouterHelper.constructor.VUEX_EXAMPLES_PAGE_PATH,
					component: VuexExamples
				},
				{
					name: VueExamplesRouterHelper.constructor.ROUTER_EXAMPLES_PAGE_NAME,
					path: VueExamplesRouterHelper.constructor.ROUTER_EXAMPLES_PAGE_PATH,
					component: RouterExamples
				},
				{
					name: VueExamplesRouterHelper.constructor.AXIOS_EXAMPLES_PAGE_NAME,
					path: VueExamplesRouterHelper.constructor.AXIOS_EXAMPLES_PAGE_PATH,
					component: AxiosExamples
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
