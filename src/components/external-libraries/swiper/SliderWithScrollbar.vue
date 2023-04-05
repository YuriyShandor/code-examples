<template>
  <div class="code-example-block">
    <div class="code-example__title">
      Slider With Scrollbar
    </div>
    <a
      href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/external-libraries/swiper/SliderWithScrollbar.vue"
      target="_blank"
      class="button code-example__button">
      Watch Code on GitHub
      <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
    </a>
    <div class="code-example__result">
      <div class="swiper-slider-wrap slider-with-scrollbar">
        <swiper
          :modules="modules"
          :slides-per-view="'auto'"
          :freeMode="{
            enabled: true,
            sticky: false,
          }"
          :scrollbar="{
            draggable: true,
          }"
          :speed="300"
          :lazy="true">
          <swiper-slide
            v-for="image in state.images"
            :key="image.id">
            <div class="swiper-slide-content">
              <img
                :src="image.largeImageURL" alt=""
                class="swiper-slide-image"
                loading="lazy">
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Scrollbar } from 'swiper';
import { PixabayImageObject } from '@/types';
import PixabayApiHelper from '@/api-helpers/pixabay.api-helper';

export default defineComponent({
  name: 'SliderWithScrollbar',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);

    const state = reactive({
      images: [] as Array<PixabayImageObject>,
    });

    onMounted(() => {
      PixabayApiHelper.getImages('forests', 10).then(({ data }) => {
        if (data.hits.length > 0) {
          data.hits.forEach((image) => {
            state.images.push(image);
          });
        }
      });
    });

    return {
      modules: [FreeMode, Scrollbar],
      prev,
      next,
      state,
    };
  },
});
</script>

<style scoped lang="scss">
.swiper-slider-wrap {
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  @media only screen and (min-width: 700px) {
    margin-top: 25px;
    border-radius: 15px;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 30px;
    border-radius: 20px;
  }
}

.swiper-slide-content {
  width: 100%;
  height: 300px;

  @media only screen and (min-width: 700px) {
    height: 450px;
  }

  @media only screen and (min-width: 1200px) {
    height: 700px;
  }
}

.swiper-slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<style lang="scss">
.swiper-slider-wrap.slider-with-scrollbar {
  .swiper-scrollbar {
    bottom: 10px;
    height: 7px;
    background: rgba(255, 255, 255, 0.95);

    .swiper-scrollbar-drag {
      background: rgba(0, 0, 0, 0.95);
    }
  }
}
</style>
