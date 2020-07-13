import Vue from 'vue'
import Vuex from 'vuex'

import globalVars from './modules/globalVars'

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules: {
		globalVars
	}
})
