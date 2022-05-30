import SinglePage from '@/components/pages/SinglePage.vue';
import VuexExamples from '@/components/vue/VuexExamples.vue';
import RouterExamples from '@/components/vue/RouterExamples.vue';
import AxiosExamples from '@/components/vue/AxiosExamples.vue';

class VueExamplesRouterHelper {
  static VUE_EXAMPLES_PAGE_NAME(): string {
    return 'Vue Examples';
  }

  static VUE_EXAMPLES_PAGE_PATH(): string {
    return 'vue';
  }

  static VUEX_EXAMPLES_PAGE_NAME(): string {
    return 'Vuex Examples';
  }

  static VUEX_EXAMPLES_PAGE_PATH(): string {
    return 'vuex';
  }

  static ROUTER_EXAMPLES_PAGE_NAME(): string {
    return 'Router Examples';
  }

  static ROUTER_EXAMPLES_PAGE_PATH(): string {
    return 'router';
  }

  static AXIOS_EXAMPLES_PAGE_NAME(): string {
    return 'Axios Examples';
  }

  static AXIOS_EXAMPLES_PAGE_PATH(): string {
    return 'axios';
  }

  routes() {
    return {
      name: VueExamplesRouterHelper.VUE_EXAMPLES_PAGE_NAME,
      path: `/${VueExamplesRouterHelper.VUE_EXAMPLES_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: VueExamplesRouterHelper.VUEX_EXAMPLES_PAGE_NAME,
          path: VueExamplesRouterHelper.VUEX_EXAMPLES_PAGE_PATH,
          component: VuexExamples,
        },
        {
          name: VueExamplesRouterHelper.ROUTER_EXAMPLES_PAGE_NAME,
          path: VueExamplesRouterHelper.ROUTER_EXAMPLES_PAGE_PATH,
          component: RouterExamples,
        },
        {
          name: VueExamplesRouterHelper.AXIOS_EXAMPLES_PAGE_NAME,
          path: VueExamplesRouterHelper.AXIOS_EXAMPLES_PAGE_PATH,
          component: AxiosExamples,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: VueExamplesRouterHelper.VUE_EXAMPLES_PAGE_NAME,
      link: `/${VueExamplesRouterHelper.VUE_EXAMPLES_PAGE_PATH}`,
      subItems: [
        {
          title: VueExamplesRouterHelper.VUEX_EXAMPLES_PAGE_NAME,
          link: `/${VueExamplesRouterHelper.VUE_EXAMPLES_PAGE_PATH}/${VueExamplesRouterHelper.VUEX_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: VueExamplesRouterHelper.ROUTER_EXAMPLES_PAGE_NAME,
          link: `/${VueExamplesRouterHelper.VUE_EXAMPLES_PAGE_PATH}/${VueExamplesRouterHelper.ROUTER_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: VueExamplesRouterHelper.AXIOS_EXAMPLES_PAGE_NAME,
          link: `/${VueExamplesRouterHelper.VUE_EXAMPLES_PAGE_PATH}/${VueExamplesRouterHelper.AXIOS_EXAMPLES_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new VueExamplesRouterHelper();
