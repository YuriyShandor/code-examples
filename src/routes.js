import VueRouter from 'vue-router'

import HomePage from '@/components/home-page/HomePage.vue'
import Page404 from '@/components/page-404/Page404.vue'

export default new VueRouter({
	// mode: 'history',
	routes: [
		{
			name: 'Home',
			path: '/',
			component: HomePage
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
