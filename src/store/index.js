import Vue from 'vue'
import Vuex from 'vuex'

import header from './modules/header'

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules: {
		header
	}
})
