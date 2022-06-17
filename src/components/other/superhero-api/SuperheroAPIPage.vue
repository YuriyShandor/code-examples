<template>
  <div class="superhero-page">
    <h1 class="superhero-page__title">
      This is a superheroes page
    </h1>
    <SuperHeroSearch
      @update-superhero-list="updateSuperHeroList"
    />
    <div class="superhero-list">
      <SuperHeroCard
        v-for="superHero in state.superHeroList"
        :key="superHero.id"
        :superHero="superHero"
        @set-selected-superhero="setSelectedSuperHero"
      />
    </div>
    <SuperHeroDetailsModal
      v-if="state.selectedSuperHero !== undefined"
      :superHero="state.selectedSuperHero"
      @set-selected-superhero="setSelectedSuperHero"
    />
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from 'vue';
import SuperHeroSearch from '@/components/other/superhero-api/SuperHeroSearch.vue';
import SuperHeroCard from '@/components/other/superhero-api/SuperHeroCard.vue';
import SuperHeroDetailsModal from '@/components/other/superhero-api/SuperHeroDetailsModal.vue';
import SuperHeroApiHelper from '@/api-helpers/superhero.api-helper';
import ObjectsHelper from '@/helpers/objects.helper';

export default defineComponent({
  name: 'SuperheroAPIPage',
  components: {
    SuperHeroSearch,
    SuperHeroCard,
    SuperHeroDetailsModal,
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
.superhero-page {
  width: 100%;
}

.superhero-page__title {
  width: 100%;
  padding: 20px;
  text-align: center;
}

.superhero-list {
  width: 100%;
  overflow: hidden;
  position: relative;
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
