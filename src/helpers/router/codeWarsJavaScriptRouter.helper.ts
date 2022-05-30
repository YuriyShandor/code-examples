import SinglePage from '@/components/pages/SinglePage.vue';

import CodeWarsJavaScriptGeneral from '@/components/codewars/CodeWarsJavaScriptGeneral.vue';
import CodeWarsJavaScriptArrays from '@/components/codewars/CodeWarsJavaScriptArrays.vue';
import CodeWarsJavaScriptNumbers from '@/components/codewars/CodeWarsJavaScriptNumbers.vue';
import CodeWarsJavaScriptStrings from '@/components/codewars/CodeWarsJavaScriptStrings.vue';

class CodeWarsJavaScriptRouterHelper {
  static CODEWARS_JAVASCRIPT_PAGE_NAME(): string {
    return 'CodeWars JavaScript';
  }

  static CODEWARS_JAVASCRIPT_PAGE_PATH(): string {
    return 'codewars';
  }

  static CODEWARS_JAVASCRIPT_GENERAL_PAGE_NAME(): string {
    return 'CodeWars JavaScript General';
  }

  static CODEWARS_JAVASCRIPT_GENERAL_PAGE_PATH(): string {
    return 'general';
  }

  static CODEWARS_JAVASCRIPT_ARRAYS_PAGE_NAME(): string {
    return 'CodeWars JavaScript Arrays';
  }

  static CODEWARS_JAVASCRIPT_ARRAYS_PAGE_PATH(): string {
    return 'arrays';
  }

  static CODEWARS_JAVASCRIPT_NUMBERS_PAGE_NAME(): string {
    return 'CodeWars JavaScript Numbers';
  }

  static CODEWARS_JAVASCRIPT_NUMBERS_PAGE_PATH(): string {
    return 'numbers';
  }

  static CODEWARS_JAVASCRIPT_STRINGS_PAGE_NAME(): string {
    return 'CodeWars JavaScript Strings';
  }

  static CODEWARS_JAVASCRIPT_STRINGS_PAGE_PATH(): string {
    return 'strings';
  }

  routes() {
    return {
      name: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_PAGE_NAME,
      path: `/${CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_GENERAL_PAGE_NAME,
          path: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_GENERAL_PAGE_PATH,
          component: CodeWarsJavaScriptGeneral,
        },
        {
          name: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_ARRAYS_PAGE_NAME,
          path: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_ARRAYS_PAGE_PATH,
          component: CodeWarsJavaScriptArrays,
        },
        {
          name: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_NUMBERS_PAGE_NAME,
          path: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_NUMBERS_PAGE_PATH,
          component: CodeWarsJavaScriptNumbers,
        },
        {
          name: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_STRINGS_PAGE_NAME,
          path: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_STRINGS_PAGE_PATH,
          component: CodeWarsJavaScriptStrings,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_PAGE_NAME,
      link: `/${CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_PAGE_PATH}`,
      subItems: [
        {
          title: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_GENERAL_PAGE_NAME,
          link: `/${CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_PAGE_PATH}/${CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_GENERAL_PAGE_PATH}`,
        },
        {
          title: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_ARRAYS_PAGE_NAME,
          link: `/${CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_PAGE_PATH}/${CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_ARRAYS_PAGE_PATH}`,
        },
        {
          title: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_NUMBERS_PAGE_NAME,
          link: `/${CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_PAGE_PATH}/${CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_NUMBERS_PAGE_PATH}`,
        },
        {
          title: CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_STRINGS_PAGE_NAME,
          link: `/${CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_PAGE_PATH}/${CodeWarsJavaScriptRouterHelper.CODEWARS_JAVASCRIPT_STRINGS_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new CodeWarsJavaScriptRouterHelper();
