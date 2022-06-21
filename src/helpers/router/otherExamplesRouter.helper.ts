import SinglePage from '@/components/pages/SinglePage.vue';

import SuperheroAPIPage from '@/components/other/superhero-api/SuperheroAPIPage.vue';
import PixabayAPIPage from '@/components/other/pixabay-api/PixabayAPIPage.vue';

class OtherExamplesRouterHelper {
  readonly OTHER_EXAMPLES_PAGE_NAME: string = 'Other Examples';

  readonly OTHER_EXAMPLES_PAGE_PATH: string = 'other';

  readonly SUPERHERO_API_PAGE_NAME: string = 'Superhero API';

  readonly SUPERHEROES_PAGE_PATH: string = 'superhero';

  readonly PIXABAY_API_PAGE_NAME: string = 'Pixabay API';

  readonly PIXABAY_PAGE_PATH: string = 'pixabay';

  routes() {
    return {
      name: this.OTHER_EXAMPLES_PAGE_NAME,
      path: `/${this.OTHER_EXAMPLES_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.SUPERHERO_API_PAGE_NAME,
          path: this.SUPERHEROES_PAGE_PATH,
          component: SuperheroAPIPage,
        },
        {
          name: this.PIXABAY_API_PAGE_NAME,
          path: this.PIXABAY_PAGE_PATH,
          component: PixabayAPIPage,
        },
      ],
    };
  }

  menuItems() {
    return {
      title: this.OTHER_EXAMPLES_PAGE_NAME,
      link: `/${this.OTHER_EXAMPLES_PAGE_PATH}`,
      subItems: [
        {
          title: this.SUPERHERO_API_PAGE_NAME,
          link: `/${this.OTHER_EXAMPLES_PAGE_PATH}/${this.SUPERHEROES_PAGE_PATH}`,
        },
        {
          title: this.PIXABAY_API_PAGE_NAME,
          link: `/${this.OTHER_EXAMPLES_PAGE_PATH}/${this.PIXABAY_PAGE_PATH}`,
        },
      ],
    };
  }
}

export default new OtherExamplesRouterHelper();
