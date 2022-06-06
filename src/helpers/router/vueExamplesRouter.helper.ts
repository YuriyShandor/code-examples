import SinglePage from '@/components/SinglePage.vue';
import VuexExamples from '@/components/vue/VuexExamples.vue';
import RouterExamples from '@/components/vue/RouterExamples.vue';
import AxiosExamples from '@/components/vue/AxiosExamples.vue';

class VueExamplesRouterHelper {
  VUE_EXAMPLES_PAGE_NAME(): string {
    return 'Vue Examples';
  }

  VUE_EXAMPLES_PAGE_PATH(): string {
    return 'vue';
  }

  VUEX_EXAMPLES_PAGE_NAME(): string {
    return 'Vuex Examples';
  }

  VUEX_EXAMPLES_PAGE_PATH(): string {
    return 'vuex';
  }

  ROUTER_EXAMPLES_PAGE_NAME(): string {
    return 'Router Examples';
  }

  ROUTER_EXAMPLES_PAGE_PATH(): string {
    return 'router';
  }

  AXIOS_EXAMPLES_PAGE_NAME(): string {
    return 'Axios Examples';
  }

  AXIOS_EXAMPLES_PAGE_PATH(): string {
    return 'axios';
  }

  routes() {
    return {
      name: this.VUE_EXAMPLES_PAGE_NAME(),
      path: `/${this.VUE_EXAMPLES_PAGE_PATH()}`,
      component: SinglePage,
      children: [
        {
          name: this.VUEX_EXAMPLES_PAGE_NAME(),
          path: this.VUEX_EXAMPLES_PAGE_PATH(),
          component: VuexExamples,
        },
        {
          name: this.ROUTER_EXAMPLES_PAGE_NAME(),
          path: this.ROUTER_EXAMPLES_PAGE_PATH(),
          component: RouterExamples,
        },
        {
          name: this.AXIOS_EXAMPLES_PAGE_NAME(),
          path: this.AXIOS_EXAMPLES_PAGE_PATH(),
          component: AxiosExamples,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: this.VUE_EXAMPLES_PAGE_NAME(),
      link: `/${this.VUE_EXAMPLES_PAGE_PATH()}`,
      subItems: [
        {
          title: this.VUEX_EXAMPLES_PAGE_NAME(),
          link: `/${this.VUE_EXAMPLES_PAGE_PATH()}/${this.VUEX_EXAMPLES_PAGE_PATH()}`,
        },
        {
          title: this.ROUTER_EXAMPLES_PAGE_NAME(),
          link: `/${this.VUE_EXAMPLES_PAGE_PATH()}/${this.ROUTER_EXAMPLES_PAGE_PATH()}`,
        },
        {
          title: this.AXIOS_EXAMPLES_PAGE_NAME(),
          link: `/${this.VUE_EXAMPLES_PAGE_PATH()}/${this.AXIOS_EXAMPLES_PAGE_PATH()}`,
        },
      ],
    };
  }
}

export default new VueExamplesRouterHelper();
