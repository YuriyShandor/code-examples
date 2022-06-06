/* eslint-disable */
import SinglePage from '@/components/SinglePage.vue';

import ModalsExamples from '@/components/ui-elements/modals/ModalsExamples.vue';

class UIElementsRouterHelper {
  UI_ELEMENTS_PAGE_NAME(): string {
    return 'UI Elements Page';
  }

  UI_ELEMENTS_PAGE_PATH(): string {
    return 'ui-elements';
  }

  MODALS_EXAMPLES_PAGE_NAME(): string {
    return 'Modals Examples';
  }

  MODALS_EXAMPLES_PAGE_PATH(): string {
    return 'modals';
  }

  routes() {
    return {
      name: this.UI_ELEMENTS_PAGE_NAME(),
      path: `/${this.UI_ELEMENTS_PAGE_PATH()}`,
      component: SinglePage,
      children: [
        {
          name: this.MODALS_EXAMPLES_PAGE_NAME(),
          path: this.MODALS_EXAMPLES_PAGE_PATH(),
          component: ModalsExamples
        }
      ]
    };
  }

  menuItems() {
    return {
      title: this.UI_ELEMENTS_PAGE_NAME(),
      link: `/${this.UI_ELEMENTS_PAGE_PATH()}`,
      subItems: [
        {
          title: this.MODALS_EXAMPLES_PAGE_NAME(),
          link: `/${this.UI_ELEMENTS_PAGE_PATH()}/${this.MODALS_EXAMPLES_PAGE_PATH()}`
        }
      ]
    };
  }
}

export default new UIElementsRouterHelper();
