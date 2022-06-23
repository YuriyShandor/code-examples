<template>
  <div class="pixabay-image-block">
    <img :src="superHero.image.url" alt="" class="pixabay-image">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PixabayImageItem',
  props: {
    pixabayImage: Object,
  },
});
</script>

<style scoped lang="scss">
.pixabay-image-block {
  width: 100%;

  @media only screen and (min-width: 760px) {
    width: 50%;
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
