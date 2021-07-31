import Vue from 'vue'
import Vuex from 'vuex'

import globalMenu from './modules/globalMenu'
import users from './modules/users'

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules: {
		globalMenu,
		users
	}
})
