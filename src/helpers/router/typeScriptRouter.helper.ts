import SinglePage from '@/components/SinglePage.vue';

import TypeScriptExamples from '@/components/typescript/TypeScriptExamples.vue';

class TypeScriptRouterHelper {
  readonly TYPESCRIPT_EXAMPLES_PAGE_NAME: string = 'Typescript Examples';

  readonly TYPESCRIPT_EXAMPLES_PAGE_PATH: string = 'typescript';

  readonly TYPESCRIPT_GENERAL_EXAMPLES_PAGE_NAME: string = 'Typescript General Examples';

  readonly TYPESCRIPT_GENERAL_EXAMPLES_PAGE_PATH: string = 'general';

  routes() {
    return {
      name: this.TYPESCRIPT_EXAMPLES_PAGE_NAME,
      path: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.TYPESCRIPT_GENERAL_EXAMPLES_PAGE_NAME,
          path: this.TYPESCRIPT_GENERAL_EXAMPLES_PAGE_PATH,
          component: TypeScriptExamples,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: this.TYPESCRIPT_EXAMPLES_PAGE_NAME,
      link: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}`,
      subItems: [
        {
          title: this.TYPESCRIPT_GENERAL_EXAMPLES_PAGE_NAME,
          link: `/${this.TYPESCRIPT_EXAMPLES_PAGE_PATH}/${this.TYPESCRIPT_GENERAL_EXAMPLES_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new TypeScriptRouterHelper();
