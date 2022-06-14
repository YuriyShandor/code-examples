import SinglePage from '@/components/SinglePage.vue';

import SwiperExamples from '@/components/external-libraries/swiper/SwiperExamples.vue';
import MomentExamples from '@/components/external-libraries/moment/MomentExamples.vue';

class ExternalLibrariesRouterHelper {
  readonly EXTERNAL_LIBRARIES_PAGE_NAME: string = 'External Libraries Examples';

  readonly EXTERNAL_LIBRARIES_PAGE_PATH: string = 'external-libraries';

  readonly SWIPER_EXAMPLES_PAGE_NAME: string = 'Swiper Examples';

  readonly SWIPER_EXAMPLES_PAGE_PATH: string = 'swiper';

  readonly MOMENT_EXAMPLES_PAGE_NAME: string = 'Moment Examples';

  readonly MOMENT_EXAMPLES_PAGE_PATH: string = 'moment';

  routes() {
    return {
      name: this.EXTERNAL_LIBRARIES_PAGE_NAME,
      path: `/${this.EXTERNAL_LIBRARIES_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.SWIPER_EXAMPLES_PAGE_NAME,
          path: this.SWIPER_EXAMPLES_PAGE_PATH,
          component: SwiperExamples,
        },
        {
          name: this.MOMENT_EXAMPLES_PAGE_NAME,
          path: this.MOMENT_EXAMPLES_PAGE_PATH,
          component: MomentExamples,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: this.EXTERNAL_LIBRARIES_PAGE_NAME,
      link: `/${this.EXTERNAL_LIBRARIES_PAGE_PATH}`,
      subItems: [
        {
          title: this.SWIPER_EXAMPLES_PAGE_NAME,
          link: `/${this.EXTERNAL_LIBRARIES_PAGE_PATH}/${this.SWIPER_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.MOMENT_EXAMPLES_PAGE_NAME,
          link: `/${this.EXTERNAL_LIBRARIES_PAGE_PATH}/${this.MOMENT_EXAMPLES_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new ExternalLibrariesRouterHelper();
