import SinglePage from '@/components/pages/SinglePage.vue';

import AxiosExamples from '@/components/external-libraries/axios/AxiosExamples.vue';
import SwiperExamples from '@/components/external-libraries/swiper/SwiperExamples.vue';
import MomentExamples from '@/components/external-libraries/moment/MomentExamples.vue';
import GoogleMapsExamples from '@/components/external-libraries/google-maps/GoogleMapsExamples.vue';

class ExternalLibrariesRouterHelper {
  readonly EXTERNAL_LIBRARIES_PAGE_NAME: string = 'External Libraries Examples';

  readonly EXTERNAL_LIBRARIES_PAGE_PATH: string = 'external-libraries';

  readonly AXIOS_EXAMPLES_PAGE_NAME: string = 'Axios Examples';

  readonly AXIOS_EXAMPLES_PAGE_PATH: string = 'axios';

  readonly SWIPER_EXAMPLES_PAGE_NAME: string = 'Swiper Examples';

  readonly SWIPER_EXAMPLES_PAGE_PATH: string = 'swiper';

  readonly MOMENT_EXAMPLES_PAGE_NAME: string = 'Moment Examples';

  readonly MOMENT_EXAMPLES_PAGE_PATH: string = 'moment';

  readonly GOOGLE_MAPS_EXAMPLES_PAGE_NAME: string = 'Google Maps Examples';

  readonly GOOGLE_MAPS_EXAMPLES_PAGE_PATH: string = 'google-maps';

  routes() {
    return {
      name: this.EXTERNAL_LIBRARIES_PAGE_NAME,
      path: `/${this.EXTERNAL_LIBRARIES_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.AXIOS_EXAMPLES_PAGE_NAME,
          path: this.AXIOS_EXAMPLES_PAGE_PATH,
          component: AxiosExamples,
        },
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
        {
          name: this.GOOGLE_MAPS_EXAMPLES_PAGE_NAME,
          path: this.GOOGLE_MAPS_EXAMPLES_PAGE_PATH,
          component: GoogleMapsExamples,
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
          title: this.AXIOS_EXAMPLES_PAGE_NAME,
          link: `/${this.EXTERNAL_LIBRARIES_PAGE_PATH}/${this.AXIOS_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.SWIPER_EXAMPLES_PAGE_NAME,
          link: `/${this.EXTERNAL_LIBRARIES_PAGE_PATH}/${this.SWIPER_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.MOMENT_EXAMPLES_PAGE_NAME,
          link: `/${this.EXTERNAL_LIBRARIES_PAGE_PATH}/${this.MOMENT_EXAMPLES_PAGE_PATH}`,
        },
        {
          title: this.GOOGLE_MAPS_EXAMPLES_PAGE_NAME,
          link: `/${this.EXTERNAL_LIBRARIES_PAGE_PATH}/${this.GOOGLE_MAPS_EXAMPLES_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new ExternalLibrariesRouterHelper();
