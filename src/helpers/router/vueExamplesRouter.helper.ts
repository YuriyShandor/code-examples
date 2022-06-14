import SinglePage from '@/components/SinglePage.vue';
import VuexExamples from '@/components/vue/VuexExamples.vue';
import RouterExamples from '@/components/vue/RouterExamples.vue';
import AxiosExamples from '@/components/vue/AxiosExamples.vue';

class VueExamplesRouterHelper {
  readonly VUE_EXAMPLES_PAGE_NAME: string = 'Vue Examples';

  readonly VUE_EXAMPLES_PAGE_PATH: string = 'vue';

  readonly VUEX_EXAMPLES_PAGE_NAME: string = 'Vuex Examples';

  readonly VUEX_EXAMPLES_PAGE_PATH: string = 'vuex';

  readonly ROUTER_EXAMPLES_PAGE_NAME: string = 'Router Examples';

  readonly ROUTER_EXAMPLES_PAGE_PATH: string = 'router';

  readonly AXIOS_EXAMPLES_PAGE_NAME: string = 'Axios Examples';

  readonly AXIOS_EXAMPLES_PAGE_PATH: string = 'axios';

  routes() {
    return {
      name: this.VUE_EXAMPLES_PAGE_NAME,
      path: `/${this.VUE_EXAMPLES_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.VUEX_EXAMPLES_PAGE_NAME,
          path: this.VUEX_EXAMPLES_PAGE_PATH,
          component: VuexExamples,
        },
        {
          name: this.ROUTER_EXAMPLES_PAGE_NAME,
          path: this.ROUTER_EXAMPLES_PAGE_PATH,
          component: RouterExamples,
        },
        {
          name: this.AXIOS_EXAMPLES_PAGE_NAME,
          path: this.AXIOS_EXAMPLES_PAGE_PATH,
          component: AxiosExamples,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: this.VUE_EXAMPLES_PAGE_NAME,
      link: `/${this.VUE_EXAMPLES_PAGE_PATH}`,
      subItems: [
        {
          title: this.VUEX_EXAMPLES_PAGE_NAME,
          link: `/${this.VUE_EXAMPLES_PAGE_PATH}/${this.VUEX_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.ROUTER_EXAMPLES_PAGE_NAME,
          link: `/${this.VUE_EXAMPLES_PAGE_PATH}/${this.ROUTER_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.AXIOS_EXAMPLES_PAGE_NAME,
          link: `/${this.VUE_EXAMPLES_PAGE_PATH}/${this.AXIOS_EXAMPLES_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new VueExamplesRouterHelper();
