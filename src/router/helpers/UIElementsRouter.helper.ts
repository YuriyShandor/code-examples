import SinglePage from '@/components/pages/SinglePage.vue';

import ModalsExamples from '@/components/ui-elements/modals/ModalsExamples.vue';
import FormsExamples from '@/components/ui-elements/forms/FormsExamples.vue';

class UIElementsRouterHelper {
  readonly UI_ELEMENTS_PAGE_NAME: string = 'UI Elements';

  readonly UI_ELEMENTS_PAGE_PATH: string = 'ui-elements';

  readonly MODALS_EXAMPLES_PAGE_NAME: string = 'Modals Examples';

  readonly MODALS_EXAMPLES_PAGE_PATH: string = 'modals';

  readonly FORMS_EXAMPLES_PAGE_NAME: string = 'Forms Examples';

  readonly FORMS_EXAMPLES_PAGE_PATH: string = 'forms';

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
        {
          name: this.FORMS_EXAMPLES_PAGE_NAME,
          path: this.FORMS_EXAMPLES_PAGE_PATH,
          component: FormsExamples,
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
        {
          title: this.FORMS_EXAMPLES_PAGE_NAME,
          link: `/${this.UI_ELEMENTS_PAGE_PATH}/${this.FORMS_EXAMPLES_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new UIElementsRouterHelper();
