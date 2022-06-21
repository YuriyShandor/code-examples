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
        <div class="pixabay-page-content">
          <PixabayImagesSearch
            @find-images="findImages"
          />
          <div class="pixabay-page-images">
            <SuperHeroCard
              v-for="superHero in state.superHeroList"
              :key="superHero.id"
              :superHero="superHero"
              @set-selected-superhero="setSelectedSuperHero"
            />
          </div>
        </div>
        <a
          href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/typescript/TypeScriptAbstraction.vue"
          target="_blank"
          class="button code-example__button">
          Watch Code on GitHub
          <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from 'vue';
import PixabayImagesSearch from '@/components/other/pixabay-api/PixabayImagesSearch.vue';
import SuperHeroCard from '@/components/other/pixabay-api/SuperHeroCard.vue';
import SuperHeroApiHelper from '@/api-helpers/superhero.api-helper';
import ObjectsHelper from '@/helpers/objects.helper';

export default defineComponent({
  name: 'SuperheroAPIPage',
  components: {
    PixabayImagesSearch,
    SuperHeroCard,
  },
  setup() {
    const state = reactive({
      superHeroList: [] as any[],
      selectedSuperHero: undefined as any,
    });
    const updateSuperHeroList = (value: string) => {
      SuperHeroApiHelper.findSuperHero(value).then(({ data }) => {
        state.superHeroList = [];
        data.results.forEach((item: any) => {
          state.superHeroList.push(ObjectsHelper.normalizeSuperHeroObject(item));
        });
      }).catch((error: any) => {
        console.log(error);
      });
    };
    const setSelectedSuperHero = (value: any) => {
      state.selectedSuperHero = value;
    };

    return {
      state,
      updateSuperHeroList,
      setSelectedSuperHero,
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

.pixabay-page-images {
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

  @media only screen and (min-width: 1200px) {
    gap: 25px;
  }
}
</style>
