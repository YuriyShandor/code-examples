export default {
  state: {
    exampleText: ''
  },
  getters: {
    GET_EXAMPLE_TEXT: state => {
      return state.exampleText
    }
  },
  mutations: {
    SET_EXAMPLE_TEXT: (state, payload) => {
      state.exampleText = payload
    }
  },
  actions: {
    SET_EXAMPLE_TEXT: (context, payload) => {
      context.commit('SET_EXAMPLE_TEXT', payload)
    }
  }
}