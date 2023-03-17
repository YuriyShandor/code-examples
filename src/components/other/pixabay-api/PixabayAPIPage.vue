<template>
  <div class="pixabay-page">
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
              @click="changeSelectedTab(selectedImagesTabTittle)">
              Selected Images
            </div>
            <div
              class="pixabay-page-heading__tab"
              :class="{'selected': state.selectedTab === findNewImagesTabTittle}"
              @click="changeSelectedTab(findNewImagesTabTittle)">
              Find New Images
            </div>
          </div>
        </div>
        <PixabayImagesSearch
          v-if="state.selectedTab === findNewImagesTabTittle"
          :defaultValue="state.searchRequest"
          @update-search-request="updateSearchRequest"
        />
        <div class="pixabay-page-images-block">
          <div
            v-if="state.imagesList.length === 0
              && state.selectedTab === selectedImagesTabTittle"
            class="pixabay-page-images-block__empty-text">
            For now, you have no selected images, please find some images and select them.
          </div>
          <div
            v-if="state.imagesList.length === 0
              && state.selectedTab === findNewImagesTabTittle
              && state.isUserEnteredIncorrectSearchText"
            class="pixabay-page-images-block__empty-text">
            Please, enter the correct search text.
          </div>
          <PixabayImageItem
            v-for="pixabayImage in state.imagesList"
            :key="pixabayImage.id"
            :selectedImages="selectedImages"
            :pixabayImage="pixabayImage"
            :isImageSelected="selectedImages.includes(pixabayImage)"
          />
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
import { PixabayImageObject } from '@/types';

export default defineComponent({
  name: 'SuperheroAPIPage',
  components: {
    PixabayImagesSearch,
    PixabayImageItem,
  },
  setup() {
    const store = useStore();

    const selectedImagesTabTittle: string = 'Selected Images';
    const findNewImagesTabTittle: string = 'Find New Images';

    const state = reactive({
      imagesList: [] as Array<PixabayImageObject>,
      pixabayImages: [] as Array<PixabayImageObject>,
      selectedTab: findNewImagesTabTittle as string,
      searchRequest: '' as string,
      isUserEnteredIncorrectSearchText: false,
    });

    const selectedImages = computed(() => store.getters.PIXABAY_SELECTED_IMAGES);

    const changeSelectedTab = (tabTitle: string) => {
      state.selectedTab = tabTitle;
    };

    const updateImageList = (imagesArray: any) => {
      state.imagesList = [];
      if (imagesArray.length > 0) {
        imagesArray.forEach((image: any) => state.imagesList.push(image));
      }
    };

    const updateSearchRequest = (searchField: string) => {
      state.searchRequest = searchField;
      state.pixabayImages = [];
      if (state.searchRequest.length > 0) {
        PixabayApiHelper.getImages(state.searchRequest, 33).then(({ data }) => {
          if (data.hits.length > 0) {
            state.isUserEnteredIncorrectSearchText = false;
            data.hits.forEach((image: PixabayImageObject) => {
              state.pixabayImages.push(image);
            });
          } else {
            state.isUserEnteredIncorrectSearchText = true;
          }
        }).catch((error: any) => {
          console.log(error);
        });
      }
    };

    watch(() => state.selectedTab, () => {
      if (state.selectedTab === selectedImagesTabTittle) {
        updateImageList(selectedImages.value);
      } else if (state.selectedTab === findNewImagesTabTittle) {
        updateImageList(state.pixabayImages);
      }
    });

    watch(() => state.pixabayImages, () => {
      updateImageList(state.pixabayImages);
    }, { deep: true });

    watch(() => selectedImages, () => {
      if (state.selectedTab === selectedImagesTabTittle) {
        updateImageList(selectedImages.value);
      }
    }, { deep: true });

    return {
      state,
      selectedImages,
      selectedImagesTabTittle,
      findNewImagesTabTittle,
      changeSelectedTab,
      updateSearchRequest,
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
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  @media only screen and (min-width: 700px) {
    gap: 20px;
  }
}

.pixabay-page-heading__tab {
  width: 50%;
  max-width: 320px;
  height: 50px;
  border-radius: 10px;
  background: #807D7D;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: $secondary-font-family;
  font-size: 15px;
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

  @media only screen and (min-width: 700px) {
    font-size: 20px;
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

.pixabay-page-images-block__empty-text {
  width: 100%;
  text-align: left;
  font-size: 18px;
}
</style>
