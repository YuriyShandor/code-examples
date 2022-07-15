import { Commit } from 'vuex';

interface IImages {
  [key: string]: (string | number | boolean);
}

interface ImagesState {
  images: IImages
}

export default {
  namespaced: true,
  state: {
    images: [],
  },
  getters: {
    IMAGES: (state: ImagesState) => state.images,
  },
  mutations: {
    ADD_IMAGE(state: ImagesState, payload: string) {
      state.images.push(payload);
    },

    REMOVE_IMAGE(state: ImagesState, payload: string) {
      if (state.images.includes(payload)) {
        state.images.filter((imageLink: string) => imageLink !== payload);
      }
    },
  },
  actions: {
    ADD_IMAGE({ commit }: { commit: Commit }, payload: string) {
      commit('ADD_IMAGE', payload);
    },

    REMOVE_IMAGE({ commit }: { commit: Commit }, payload: string) {
      commit('REMOVE_IMAGE', payload);
    },
  },
};
