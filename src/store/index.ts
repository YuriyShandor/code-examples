import { createStore } from 'vuex';

import images from './modules/images';

export default createStore({
  modules: {
    images,
  },
});
