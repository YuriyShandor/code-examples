import { Commit } from 'vuex';

interface ImagesState {
  images: any[]
}

export default {
  state: {
    images: [],
  },
  getters: {
    IMAGES: (state: ImagesState) => state.images,
  },
  mutations: {
    ADD_IMAGE(state: ImagesState, payload: any) {
      state.images.push(payload);
    },

    REMOVE_IMAGE(state: ImagesState, payload: any) {
      if (state.images.includes(payload)) {
        state.images = state.images.filter((image: any) => image.id !== payload.id);
      }
    },
  },
  actions: {
    ADD_IMAGE({ commit }: { commit: Commit }, payload: any) {
      commit('ADD_IMAGE', payload);
    },

    REMOVE_IMAGE({ commit }: { commit: Commit }, payload: any) {
      commit('REMOVE_IMAGE', payload);
    },
  },
};
