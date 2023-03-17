import SinglePage from '@/components/pages/SinglePage.vue';

import ModalsExamples from '@/components/ui-elements/modals/ModalsExamples.vue';

class UIElementsRouterHelper {
  readonly UI_ELEMENTS_PAGE_NAME: string = 'UI Elements';

  readonly UI_ELEMENTS_PAGE_PATH: string = 'ui-elements';

  readonly MODALS_EXAMPLES_PAGE_NAME: string = 'Modals Examples';

  readonly MODALS_EXAMPLES_PAGE_PATH: string = 'modals';

  routes() {
    return {
      name: this.UI_ELEMENTS_PAGE_NAME,
      path: `/${this.UI_ELEMENTS_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.MODALS_EXAMPLES_PAGE_NAME,
          path: this.MODALS_EXAMPLES_PAGE_PATH,
          component: ModalsExamples,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: this.UI_ELEMENTS_PAGE_NAME,
      link: `/${this.UI_ELEMENTS_PAGE_PATH}`,
      subItems: [
        {
          title: this.MODALS_EXAMPLES_PAGE_NAME,
          link: `/${this.UI_ELEMENTS_PAGE_PATH}/${this.MODALS_EXAMPLES_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new UIElementsRouterHelper();
