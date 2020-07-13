export default {
	state: {
		cabinetConfig: undefined
	},
	getters: {
		CABINET_CONFIG: state => {
			return state.cabinetConfig
		}
	},
	mutations: {
		SET_CABINET_CONFIG: (state, payload) => {
			state.cabinetConfig = payload
		}
	},
	actions: {
		SET_CABINET_CONFIG: async (context, payload) => {
			context.commit('SET_CABINET_CONFIG', payload)
		}
	}
}
