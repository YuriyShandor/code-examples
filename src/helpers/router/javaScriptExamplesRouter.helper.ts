/* eslint-disable */
import SinglePage from '@/components/SinglePage.vue';

import JavaScriptGeneralExamples from '@/components/javascript/JavaScriptGeneralExamples.vue';
import JavaScriptArraysExamples from '@/components/javascript/arrays/JavaScriptArraysExamples.vue';
import JavaScriptNumbersExamples from '@/components/javascript/JavaScriptNumbersExamples.vue';
import JavaScriptStringsExamples from '@/components/javascript/JavaScriptStringsExamples.vue';

class JavaScriptExamplesRouterHelper {
  JAVASCRIPT_EXAMPLES_PAGE_NAME(): string {
    return 'JavaScript Examples';
  }

  JAVASCRIPT_EXAMPLES_PAGE_PATH(): string {
    return 'javascript';
  }

  JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME(): string {
    return 'General Examples';
  }

  JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH(): string {
    return 'general';
  }

  JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME(): string {
    return 'Arrays Examples';
  }

  JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH(): string {
    return 'arrays';
  }

  JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_NAME(): string {
    return 'Numbers Examples';
  }

  JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_PATH(): string {
    return 'numbers';
  }

  JAVASCRIPT_STRINGS_EXAMPLES_PAGE_NAME(): string {
    return 'Strings Examples';
  }

  JAVASCRIPT_STRINGS_EXAMPLES_PAGE_PATH(): string {
    return 'strings';
  }

  routes() {
    return {
      name: this.JAVASCRIPT_EXAMPLES_PAGE_NAME(),
      path: `/${this.JAVASCRIPT_EXAMPLES_PAGE_PATH()}`,
      component: SinglePage,
      children: [
        {
          name: this.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME(),
          path: this.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH(),
          component: JavaScriptGeneralExamples
        },
        {
          name: this.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME(),
          path: this.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH(),
          component: JavaScriptArraysExamples
        },
        {
          name: this.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_NAME(),
          path: this.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_PATH(),
          component: JavaScriptNumbersExamples
        },
        {
          name: this.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_NAME(),
          path: this.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_PATH(),
          component: JavaScriptStringsExamples
        }
      ]
    };
  }

  menuItems() {
    return {
      title: this.JAVASCRIPT_EXAMPLES_PAGE_NAME(),
      link: `/${this.JAVASCRIPT_EXAMPLES_PAGE_PATH()}`,
      subItems: [
        {
          title: this.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME(),
          link: `/${this.JAVASCRIPT_EXAMPLES_PAGE_PATH()}/${this.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH()}`
        },
        {
          title: this.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME(),
          link: `/${this.JAVASCRIPT_EXAMPLES_PAGE_PATH()}/${this.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH()}`
        },
        {
          title: this.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_NAME(),
          link: `/${this.JAVASCRIPT_EXAMPLES_PAGE_PATH()}/${this.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_PATH()}`
        },
        {
          title: this.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_NAME(),
          link: `/${this.JAVASCRIPT_EXAMPLES_PAGE_PATH()}/${this.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_PATH()}`
        }
      ]
    };
  }
}

export default new JavaScriptExamplesRouterHelper();
