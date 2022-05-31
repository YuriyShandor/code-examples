/* eslint-disable */
import SinglePage from '@/components/pages/SinglePage.vue';

import ModalsExamples from '@/components/ui-elements/modals/ModalsExamples.vue';

class UIElementsRouterHelper {
  static UI_ELEMENTS_PAGE_NAME(): string {
    return 'UI Elements Page';
  }

  static UI_ELEMENTS_PAGE_PATH(): string {
    return 'ui-elements';
  }

  static MODALS_EXAMPLES_PAGE_NAME(): string {
    return 'Modals Examples';
  }

  static MODALS_EXAMPLES_PAGE_PATH(): string {
    return 'modals';
  }

  routes() {
    return {
      name: UIElementsRouterHelper.UI_ELEMENTS_PAGE_NAME(),
      path: `/${UIElementsRouterHelper.UI_ELEMENTS_PAGE_PATH()}`,
      component: SinglePage,
      children: [
        {
          name: UIElementsRouterHelper.MODALS_EXAMPLES_PAGE_NAME(),
          path: UIElementsRouterHelper.MODALS_EXAMPLES_PAGE_PATH(),
          component: ModalsExamples
        }
      ]
    };
  }

  menuItems() {
    return {
      title: UIElementsRouterHelper.UI_ELEMENTS_PAGE_NAME(),
      link: `/${UIElementsRouterHelper.UI_ELEMENTS_PAGE_PATH()}`,
      subItems: [
        {
          title: UIElementsRouterHelper.MODALS_EXAMPLES_PAGE_NAME(),
          link: `/${UIElementsRouterHelper.UI_ELEMENTS_PAGE_PATH()}/${UIElementsRouterHelper.MODALS_EXAMPLES_PAGE_PATH()}`
        }
      ]
    };
  }
}

export default new UIElementsRouterHelper();
