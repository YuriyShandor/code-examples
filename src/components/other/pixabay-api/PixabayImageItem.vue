<template>
  <div class="pixabay-image-block">
    <img :src="pixabayImage.largeImageURL" alt="" class="pixabay-image">
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
  border-radius: 20px;
  overflow: hidden;

  @media only screen and (min-width: 760px) {
    width: calc(50% - 10px);
    height: 200px;
  }

  @media only screen and (min-width: 900px) {
    height: 250px;
  }

  @media only screen and (min-width: 1100px) {
    height: 300px;
  }

  @media only screen and (min-width: 1300px) {
    height: 350px;
  }

  @media only screen and (min-width: 1300px) {
    height: 400px;
  }
}

.pixabay-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;

  @media only screen and (min-width: 760px) {
    height: 100%;
  }
}
</style>
