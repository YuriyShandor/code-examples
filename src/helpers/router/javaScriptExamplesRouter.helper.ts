/* eslint-disable */
import SinglePage from '@/components/SinglePage.vue';

import JavaScriptGeneralExamples from '@/components/javascript/JavaScriptGeneralExamples.vue';
import JavaScriptArraysExamples from '@/components/javascript/JavaScriptArraysExamples.vue';
import JavaScriptNumbersExamples from '@/components/javascript/JavaScriptNumbersExamples.vue';
import JavaScriptStringsExamples from '@/components/javascript/JavaScriptStringsExamples.vue';

class JavaScriptExamplesRouterHelper {
  static JAVASCRIPT_EXAMPLES_PAGE_NAME(): string {
    return 'JavaScript Examples';
  }

  static JAVASCRIPT_EXAMPLES_PAGE_PATH(): string {
    return 'javascript';
  }

  static JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME(): string {
    return 'General Examples';
  }

  static JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH(): string {
    return 'general';
  }

  static JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME(): string {
    return 'Arrays Examples';
  }

  static JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH(): string {
    return 'arrays';
  }

  static JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_NAME(): string {
    return 'Numbers Examples';
  }

  static JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_PATH(): string {
    return 'numbers';
  }

  static JAVASCRIPT_STRINGS_EXAMPLES_PAGE_NAME(): string {
    return 'Strings Examples';
  }

  static JAVASCRIPT_STRINGS_EXAMPLES_PAGE_PATH(): string {
    return 'strings';
  }

  routes() {
    return {
      name: JavaScriptExamplesRouterHelper.JAVASCRIPT_EXAMPLES_PAGE_NAME(),
      path: `/${JavaScriptExamplesRouterHelper.JAVASCRIPT_EXAMPLES_PAGE_PATH()}`,
      component: SinglePage,
      children: [
        {
          name: JavaScriptExamplesRouterHelper.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME(),
          path: JavaScriptExamplesRouterHelper.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH(),
          component: JavaScriptGeneralExamples
        },
        {
          name: JavaScriptExamplesRouterHelper.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME(),
          path: JavaScriptExamplesRouterHelper.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH(),
          component: JavaScriptArraysExamples
        },
        {
          name: JavaScriptExamplesRouterHelper.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_NAME(),
          path: JavaScriptExamplesRouterHelper.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_PATH(),
          component: JavaScriptNumbersExamples
        },
        {
          name: JavaScriptExamplesRouterHelper.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_NAME(),
          path: JavaScriptExamplesRouterHelper.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_PATH(),
          component: JavaScriptStringsExamples
        }
      ]
    };
  }

  menuItems() {
    return {
      title: JavaScriptExamplesRouterHelper.JAVASCRIPT_EXAMPLES_PAGE_NAME(),
      link: `/${JavaScriptExamplesRouterHelper.JAVASCRIPT_EXAMPLES_PAGE_PATH()}`,
      subItems: [
        {
          title: JavaScriptExamplesRouterHelper.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME(),
          link: `/${JavaScriptExamplesRouterHelper.JAVASCRIPT_EXAMPLES_PAGE_PATH()}/${JavaScriptExamplesRouterHelper.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH()}`
        },
        {
          title: JavaScriptExamplesRouterHelper.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME(),
          link: `/${JavaScriptExamplesRouterHelper.JAVASCRIPT_EXAMPLES_PAGE_PATH()}/${JavaScriptExamplesRouterHelper.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH()}`
        },
        {
          title: JavaScriptExamplesRouterHelper.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_NAME(),
          link: `/${JavaScriptExamplesRouterHelper.JAVASCRIPT_EXAMPLES_PAGE_PATH()}/${JavaScriptExamplesRouterHelper.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_PATH()}`
        },
        {
          title: JavaScriptExamplesRouterHelper.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_NAME(),
          link: `/${JavaScriptExamplesRouterHelper.JAVASCRIPT_EXAMPLES_PAGE_PATH()}/${JavaScriptExamplesRouterHelper.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_PATH()}`
        }
      ]
    };
  }
}

export default new JavaScriptExamplesRouterHelper();
