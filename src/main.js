import Vue from 'vue';
import App from './App.vue';
import VueScrollTo from 'vue-scrollto';
import VueLazyload from 'vue-lazyload';
import VueMoment from 'vue-moment';
import VTooltip from 'v-tooltip';
import VHover from 'v-hover';
import VueDirectionHover from 'vue-direction-hover';

Vue.config.productionTip = false;

Vue.use(VueScrollTo, {
  duration: 500,
  easing: 'ease-out'
});

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
});

Vue.use(VueMoment);

Vue.use(VTooltip);

Vue.use(VHover);
Vue.use(VueDirectionHover);

new Vue({
  render: h => h(App),
}).$mount('#app')
