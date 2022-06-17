<template>
  <div class="superhero-card">
    <div class="superhero-card__image-block">
      <img :src="superHero.image.url" alt="" class="superhero-card__image">
    </div>
    <div class="superhero-card__name">
      {{ superHero.name }}
    </div>
    <div
      class="superhero-card__button"
      @click="setSelectedSuperHero">
      Show details
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SuperHeroCard',
  props: {
    superHero: Object,
  },
  setup(props, { emit }) {
    const setSelectedSuperHero = () => {
      emit('set-selected-superhero', props.superHero);
    };

    return {
      setSelectedSuperHero,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.superhero-card {
  width: 180px;
  border: 1px solid #EAE9E8;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-bottom: 20px;
  box-sizing: border-box;
  overflow: hidden;

  @media only screen and (min-width: 1200px) {
    width: 250px;
  }
}

.superhero-card__image-block {
  width: 100%;
  height: 250px;
  margin-bottom: 15px;

  @media only screen and (min-width: 1200px) {
    height: 320px;
  }
}

.superhero-card__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.superhero-card__name {
  padding: 0 15px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: $secondary-text-color;
  margin-bottom: 10px;
}

.superhero-card__button {
  width: calc(100% - 20px);
  margin: 0 auto 10px;
  height: 35px;
  background: $hover-text-color;
  border-radius: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all, .25s;
  &:hover {
    background: darken($hover-text-color, 7%);
  }
}
</style>
