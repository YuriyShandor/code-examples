import SinglePage from '@/components/SinglePage.vue';

import SwiperExamples from '@/components/external-libraries/swiper/SwiperExamples.vue';
import MomentExamples from '@/components/external-libraries/moment/MomentExamples.vue';

class ExternalLibrariesRouterHelper {
  static EXTERNAL_LIBRARIES_PAGE_NAME(): string {
    return 'External Libraries Examples';
  }

  static EXTERNAL_LIBRARIES_PAGE_PATH(): string {
    return 'external-libraries';
  }

  static SWIPER_EXAMPLES_PAGE_NAME(): string {
    return 'Swiper Examples';
  }

  static SWIPER_EXAMPLES_PAGE_PATH(): string {
    return 'swiper';
  }

  static MOMENT_EXAMPLES_PAGE_NAME(): string {
    return 'Moment Examples';
  }

  static MOMENT_EXAMPLES_PAGE_PATH(): string {
    return 'moment';
  }

  routes() {
    return {
      name: ExternalLibrariesRouterHelper.EXTERNAL_LIBRARIES_PAGE_NAME(),
      path: `/${ExternalLibrariesRouterHelper.EXTERNAL_LIBRARIES_PAGE_PATH()}`,
      component: SinglePage,
      children: [
        {
          name: ExternalLibrariesRouterHelper.SWIPER_EXAMPLES_PAGE_NAME(),
          path: ExternalLibrariesRouterHelper.SWIPER_EXAMPLES_PAGE_PATH(),
          component: SwiperExamples,
        },
        {
          name: ExternalLibrariesRouterHelper.MOMENT_EXAMPLES_PAGE_NAME(),
          path: ExternalLibrariesRouterHelper.MOMENT_EXAMPLES_PAGE_PATH(),
          component: MomentExamples,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: ExternalLibrariesRouterHelper.EXTERNAL_LIBRARIES_PAGE_NAME(),
      link: `/${ExternalLibrariesRouterHelper.EXTERNAL_LIBRARIES_PAGE_PATH()}`,
      subItems: [
        {
          title: ExternalLibrariesRouterHelper.SWIPER_EXAMPLES_PAGE_NAME(),
          link: `/${ExternalLibrariesRouterHelper.EXTERNAL_LIBRARIES_PAGE_PATH()}/${ExternalLibrariesRouterHelper.SWIPER_EXAMPLES_PAGE_PATH()}`,
        },
        {
          title: ExternalLibrariesRouterHelper.MOMENT_EXAMPLES_PAGE_NAME(),
          link: `/${ExternalLibrariesRouterHelper.EXTERNAL_LIBRARIES_PAGE_PATH()}/${ExternalLibrariesRouterHelper.MOMENT_EXAMPLES_PAGE_PATH()}`,
        },
      ],
    };
  }
}

export default new ExternalLibrariesRouterHelper();
