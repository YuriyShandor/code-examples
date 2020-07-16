import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Slick from '@/components/Slick.vue'
import SmoothScroll from '@/components/SmoothScroll.vue'
import UsersList from '@/components/UsersList.vue'

export default new VueRouter({
	// mode: 'history',
	routes: [
		{
			name: 'Home',
			path: '/',
			component: Home
		},
		{
			name: 'Slick',
			path: '/slick',
			component: Slick
		},
		{
			name: 'Smooth Scroll',
			path: '/smooth-scroll',
			component: SmoothScroll
		},
		{
			name: 'Users List',
			path: '/users',
			component: UsersList
		},
		{
			path: '*',
			redirect: Home
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
