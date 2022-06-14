import SinglePage from '@/components/SinglePage.vue';

import JavaScriptGeneralExamples from '@/components/javascript/JavaScriptGeneralExamples.vue';
import JavaScriptArraysExamples from '@/components/javascript/JavaScriptArraysExamples.vue';
import JavaScriptNumbersExamples from '@/components/javascript/JavaScriptNumbersExamples.vue';
import JavaScriptStringsExamples from '@/components/javascript/JavaScriptStringsExamples.vue';

class JavaScriptExamplesRouterHelper {
  readonly JAVASCRIPT_EXAMPLES_PAGE_NAME: string = 'JavaScript Examples';

  readonly JAVASCRIPT_EXAMPLES_PAGE_PATH: string = 'javascript';

  readonly JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME: string = 'General Examples';

  readonly JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH: string = 'general';

  readonly JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME: string = 'Arrays Examples';

  readonly JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH: string = 'arrays';

  readonly JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_NAME: string = 'Numbers Examples';

  readonly JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_PATH: string = 'numbers';

  readonly JAVASCRIPT_STRINGS_EXAMPLES_PAGE_NAME: string = 'Strings Examples';

  readonly JAVASCRIPT_STRINGS_EXAMPLES_PAGE_PATH: string = 'strings';

  routes() {
    return {
      name: this.JAVASCRIPT_EXAMPLES_PAGE_NAME,
      path: `/${this.JAVASCRIPT_EXAMPLES_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME,
          path: this.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH,
          component: JavaScriptGeneralExamples,
        },
        {
          name: this.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME,
          path: this.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH,
          component: JavaScriptArraysExamples,
        },
        {
          name: this.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_NAME,
          path: this.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_PATH,
          component: JavaScriptNumbersExamples,
        },
        {
          name: this.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_NAME,
          path: this.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_PATH,
          component: JavaScriptStringsExamples,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: this.JAVASCRIPT_EXAMPLES_PAGE_NAME,
      link: `/${this.JAVASCRIPT_EXAMPLES_PAGE_PATH}`,
      subItems: [
        {
          title: this.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME,
          link: `/${this.JAVASCRIPT_EXAMPLES_PAGE_PATH}/${this.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME,
          link: `/${this.JAVASCRIPT_EXAMPLES_PAGE_PATH}/${this.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_NAME,
          link: `/${this.JAVASCRIPT_EXAMPLES_PAGE_PATH}/${this.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_NAME,
          link: `/${this.JAVASCRIPT_EXAMPLES_PAGE_PATH}/${this.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new JavaScriptExamplesRouterHelper();
