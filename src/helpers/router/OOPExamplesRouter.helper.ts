import SinglePage from '@/components/SinglePage.vue';

import OOPGeneralExamples from '@/components/oop/OOPGeneralExamples.vue';
import FourPillarsOfOOPExamples from '@/components/oop/FourPillarsOfOOPExamples.vue';

class OOPExamplesRouterHelper {
  readonly OOP_EXAMPLES_PAGE_NAME: string = 'OOP Examples';

  readonly OOP_EXAMPLES_PAGE_PATH: string = 'oop';

  readonly OOP_GENERAL_EXAMPLES_PAGE_NAME: string = 'General Examples';

  readonly OOP_GENERAL_EXAMPLES_PAGE_PATH: string = 'general';

  readonly FOUR_PILLARS_OF_OOP_EXAMPLES_PAGE_NAME: string = 'Four Pillars of OOP';

  readonly FOUR_PILLARS_OF_OOP_EXAMPLES_PAGE_PATH: string = 'four-pillars';

  routes() {
    return {
      name: this.OOP_EXAMPLES_PAGE_NAME,
      path: `/${this.OOP_EXAMPLES_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.OOP_GENERAL_EXAMPLES_PAGE_NAME,
          path: this.OOP_GENERAL_EXAMPLES_PAGE_PATH,
          component: OOPGeneralExamples,
        },
        {
          name: this.FOUR_PILLARS_OF_OOP_EXAMPLES_PAGE_NAME,
          path: this.FOUR_PILLARS_OF_OOP_EXAMPLES_PAGE_PATH,
          component: FourPillarsOfOOPExamples,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: this.OOP_EXAMPLES_PAGE_NAME,
      link: `/${this.OOP_EXAMPLES_PAGE_PATH}`,
      subItems: [
        {
          title: this.OOP_GENERAL_EXAMPLES_PAGE_NAME,
          link: `/${this.OOP_EXAMPLES_PAGE_PATH}/${this.OOP_GENERAL_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.FOUR_PILLARS_OF_OOP_EXAMPLES_PAGE_NAME,
          link: `/${this.OOP_EXAMPLES_PAGE_PATH}/${this.FOUR_PILLARS_OF_OOP_EXAMPLES_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new OOPExamplesRouterHelper();
