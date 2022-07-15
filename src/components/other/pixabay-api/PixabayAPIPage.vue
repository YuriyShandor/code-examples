<template>
  <div class="pixabay-page">
    <div class="container">
      <h1 class="page-title">
        Pixabay API Usage
      </h1>
      <div class="code-example-block">
        <div class="code-example__description">
          <b><a href="https://pixabay.com/">Pixabay.com</a></b> is a free stock photography
          and royalty-free stock media website. It is used for sharing photos,
          illustrations, vector graphics, film footage, and music, exclusively
          under the custom Pixabay license, which generally allows the free use
          of the material with some restrictions.
          <br>
          The overall quality of the photos on the service has been described
          as "mediocre for the most part" and "variable" but covering a "wide range of subjects."
        </div>
        <a
          href="https://github.com/YuriyShandor/code-examples/tree/vue3-with-typescript/src/components/other/pixabay-api"
          target="_blank"
          class="button code-example__button">
          Watch Code on GitHub
          <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
        </a>
        <div class="pixabay-page-content">
          <div class="pixabay-page-heading">
            <div class="page-title pixabay-page-heading__title">
              Pixabay Images
            </div>
            <div class="pixabay-page-heading__tabs-block">
              <div
                class="pixabay-page-heading__tab"
                :class="{'selected': state.selectedTab === selectedImagesTabTittle}"
                @click="state.selectedImagesTabTitle = selectedImagesTabTittle">
                Selected images
              </div>
              <div
                class="pixabay-page-heading__tab"
                :class="{'selected': state.selectedTab === findNewImagesTabTittle}"
                @click="state.selectedImagesTabTitle = findNewImagesTabTittle">
                Find new images
              </div>
            </div>
          </div>
          <PixabayImagesSearch
            v-if="state.selectedTab === findNewImagesTabTittle"
            @find-images="findImages"
          />
          <div class="pixabay-page-images-block">
            <PixabayImageItem
              v-for="pixabayImage in state.pixabayImages"
              :key="pixabayImage.id"
              :pixabayImage="pixabayImage"
              :selectedTab="state.selectedTab"
              :selectedImagesTabTittle="selectedImagesTabTittle"
              :findNewImagesTabTittle="findNewImagesTabTittle"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, computed, onMounted, watch } from 'vue';
import PixabayImagesSearch from '@/components/other/pixabay-api/PixabayImagesSearch.vue';
import PixabayImageItem from '@/components/other/pixabay-api/PixabayImageItem.vue';
import PixabayApiHelper from '@/api-helpers/pixabay.api-helper';
import { useStore } from 'vuex';
import ScrollHelper from '@/helpers/scroll.helper';

export default defineComponent({
  name: 'SuperheroAPIPage',
  components: {
    PixabayImagesSearch,
    PixabayImageItem,
  },
  setup() {
    const store = useStore();

    interface IImages {
      [key: string]: (string | number | boolean);
    }

    const selectedImagesTabTittle: string = 'Selected Images';
    const findNewImagesTabTittle = 'Find New Images';

    const state = reactive({
      imagesList: [] as any[],
      pixabayImages: [] as any[],
      selectedTab: findNewImagesTabTittle as string,
    });

    const selectedImages = computed(() => store.getters.IMAGES);

    const findImages = (searchField: string) => {
      state.pixabayImages = [];
      if (searchField.length > 0) {
        PixabayApiHelper.getImages(searchField, 100).then(({ data }) => {
          if (data.hits.length > 0) {
            data.hits.forEach((image: string) => {
              state.pixabayImages.push(image);
            });
            console.log(state.pixabayImages);
          }
        }).catch((error: any) => {
          console.log(error);
        });
      }
    };

    onMounted(() => {
      console.log('');
    });

    watch(() => state.selectedTab, (value) => {
      if (value === selectedImagesTabTittle) {
        state.imagesList = [];
        selectedImages.value.forEach((image: any) => {

        });
        state.imagesList = selectedImages;
      } else if (value === findNewImagesTabTittle) {
        state.imagesList = state.pixabayImages;
      }
    });

    return {
      state,
      selectedImages,
      selectedImagesTabTittle,
      findNewImagesTabTittle,
      findImages,
    };
  },
});
</script>

<style scoped lang="scss">
.pixabay-page {
  width: 100%;
}

.pixabay-page__title {
  width: 100%;
  padding: 20px;
  text-align: center;
}

.pixabay-page-content {
  width: 100%;
  margin: 30px 0 20px;

  @media only screen and (min-width: 760px) {
    margin: 40px 0 30px;
  }

  @media only screen and (min-width: 1200px) {
    margin: 50px 0 30px;
  }
}

.pixabay-page-heading {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pixabay-page-heading__title {
  text-align: center;
  margin-bottom: 10px;
}

.pixabay-page-heading__tabs-block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.pixabay-page-heading__tab {
  width: calc(50% - 20px);
  max-width: 320px;
  height: 50px;
  border-radius: 10px;
  background: #807D7D;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: $secondary-font-family;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all, .25s;

  &:hover {
    background: darken(#807D7D, 10%);
  }

  &.selected {
    background: darken(#807D7D, 15%);
  }
}

.pixabay-page-images-block {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  @media only screen and (min-width: 760px) {
    gap: 20px;
  }
}
</style>
