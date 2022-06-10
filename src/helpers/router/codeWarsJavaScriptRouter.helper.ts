import SinglePage from '@/components/SinglePage.vue';

import CodeWarsJavaScriptGeneral from '@/components/codewars/CodeWarsJavaScriptGeneral.vue';
import CodeWarsJavaScriptArrays from '@/components/codewars/CodeWarsJavaScriptArrays.vue';
import CodeWarsJavaScriptNumbers from '@/components/codewars/CodeWarsJavaScriptNumbers.vue';
import CodeWarsJavaScriptStrings from '@/components/codewars/CodeWarsJavaScriptStrings.vue';

class CodeWarsJavaScriptRouterHelper {
  readonly CODEWARS_JAVASCRIPT_PAGE_NAME: string = 'CodeWars JavaScript';

  readonly CODEWARS_JAVASCRIPT_PAGE_PATH: string = 'codewars';

  readonly CODEWARS_JAVASCRIPT_GENERAL_PAGE_NAME: string = 'CodeWars JavaScript General';

  readonly CODEWARS_JAVASCRIPT_GENERAL_PAGE_PATH: string = 'general';

  readonly CODEWARS_JAVASCRIPT_ARRAYS_PAGE_NAME: string = 'CodeWars JavaScript Arrays';

  readonly CODEWARS_JAVASCRIPT_ARRAYS_PAGE_PATH: string = 'arrays';

  readonly CODEWARS_JAVASCRIPT_NUMBERS_PAGE_NAME: string = 'CodeWars JavaScript Numbers';

  readonly CODEWARS_JAVASCRIPT_NUMBERS_PAGE_PATH: string = 'numbers';

  readonly CODEWARS_JAVASCRIPT_STRINGS_PAGE_NAME: string = 'CodeWars JavaScript Strings';

  readonly CODEWARS_JAVASCRIPT_STRINGS_PAGE_PATH: string = 'strings';

  routes() {
    return {
      name: this.CODEWARS_JAVASCRIPT_PAGE_NAME,
      path: `/${this.CODEWARS_JAVASCRIPT_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.CODEWARS_JAVASCRIPT_GENERAL_PAGE_NAME,
          path: this.CODEWARS_JAVASCRIPT_GENERAL_PAGE_PATH,
          component: CodeWarsJavaScriptGeneral,
        },
        {
          name: this.CODEWARS_JAVASCRIPT_ARRAYS_PAGE_NAME,
          path: this.CODEWARS_JAVASCRIPT_ARRAYS_PAGE_PATH,
          component: CodeWarsJavaScriptArrays,
        },
        {
          name: this.CODEWARS_JAVASCRIPT_NUMBERS_PAGE_NAME,
          path: this.CODEWARS_JAVASCRIPT_NUMBERS_PAGE_PATH,
          component: CodeWarsJavaScriptNumbers,
        },
        {
          name: this.CODEWARS_JAVASCRIPT_STRINGS_PAGE_NAME,
          path: this.CODEWARS_JAVASCRIPT_STRINGS_PAGE_PATH,
          component: CodeWarsJavaScriptStrings,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: this.CODEWARS_JAVASCRIPT_PAGE_NAME,
      link: `/${this.CODEWARS_JAVASCRIPT_PAGE_PATH}`,
      subItems: [
        {
          title: this.CODEWARS_JAVASCRIPT_GENERAL_PAGE_NAME,
          link: `/${this.CODEWARS_JAVASCRIPT_PAGE_PATH}/${this.CODEWARS_JAVASCRIPT_GENERAL_PAGE_PATH}`,
        },
        {
          title: this.CODEWARS_JAVASCRIPT_ARRAYS_PAGE_NAME,
          link: `/${this.CODEWARS_JAVASCRIPT_PAGE_PATH}/${this.CODEWARS_JAVASCRIPT_ARRAYS_PAGE_PATH}`,
        },
        {
          title: this.CODEWARS_JAVASCRIPT_NUMBERS_PAGE_NAME,
          link: `/${this.CODEWARS_JAVASCRIPT_PAGE_PATH}/${this.CODEWARS_JAVASCRIPT_NUMBERS_PAGE_PATH}`,
        },
        {
          title: this.CODEWARS_JAVASCRIPT_STRINGS_PAGE_NAME,
          link: `/${this.CODEWARS_JAVASCRIPT_PAGE_PATH}/${this.CODEWARS_JAVASCRIPT_STRINGS_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new CodeWarsJavaScriptRouterHelper();
