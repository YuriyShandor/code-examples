import VueRouter from 'vue-router'

import HomePage from '@/components/home-page/HomePage.vue'


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
			redirect: HomePage
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
