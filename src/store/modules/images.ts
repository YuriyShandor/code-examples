import { PixabayImageObject } from '@/types';

export default {
  state: {
    pixabaySelectedImages: [] as Array<PixabayImageObject>,
  },
  getters: {
    PIXABAY_SELECTED_IMAGES: (state) => state.pixabaySelectedImages,
  },
  mutations: {
    ADD_PIXABAY_SELECTED_IMAGE(state, payload: PixabayImageObject) {
      state.pixabaySelectedImages.push(payload);
    },

    REMOVE_PIXABAY_SELECTED_IMAGE(state, payload: PixabayImageObject) {
      if (state.pixabaySelectedImages.includes(payload)) {
        state.pixabaySelectedImages = state.pixabaySelectedImages.filter((image: PixabayImageObject) => image.id !== payload.id);
      }
    },
  },
  actions: {
    ADD_PIXABAY_SELECTED_IMAGE(context, payload: PixabayImageObject) {
      context.commit('ADD_PIXABAY_SELECTED_IMAGE', payload);
    },

    REMOVE_PIXABAY_SELECTED_IMAGE(context, payload: PixabayImageObject) {
      context.commit('REMOVE_PIXABAY_SELECTED_IMAGE', payload);
    },
  },
};
