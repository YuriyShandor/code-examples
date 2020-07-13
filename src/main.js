import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
Vue.use(Vuex)
import {store} from './store'

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, {
  duration: 500,
  easing: 'ease-out',
  offset: 700
});

import VScrollLock from 'v-scroll-lock'
Vue.use(VScrollLock)

import VueLazyload from 'vue-lazyload'
import VueMoment from 'vue-moment'
import VTooltip from 'v-tooltip'
import VHover from 'v-hover'
import VueDirectionHover from 'vue-direction-hover'
import VueScrollactive from 'vue-scrollactive'



Vue.config.productionTip = false;





Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
});

Vue.use(VueMoment);

Vue.use(VTooltip);

Vue.use(VHover);
Vue.use(VueDirectionHover);

Vue.use(VueScrollactive);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
