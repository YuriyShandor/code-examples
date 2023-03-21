<template>
  <div class="code-example-block">
    <div class="code-example__title">
      Simple Slider
    </div>
    <div class="code-example__description">
      Simple slider with one active slide.
    </div>
    <a
      href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/ui-elements/modals/ModalWithoutPlugins.vue"
      target="_blank"
      class="button code-example__button">
      Watch Code on GitHub
      <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
    </a>
    <div class="code-example__block">
      <div class="swiper-slider-wrap simple-slider">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :navigation="true"
          :pagination="{
            clickable: true,
          }"
          :speed="750"
          @swiper="onSwiper"
          @slideChange="onSlideChange">
          <swiper-slide
            v-for="image in state.images"
            :key="image.id">
            <div class="swiper-slide-content">
              <img
                :src="image.largeImageURL" alt=""
                class="swiper-slide-image">
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">/* eslint-disable import/extensions */
import { defineComponent, onMounted, reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
import { PixabayImageObject } from '@/types';
import PixabayApiHelper from '@/api-helpers/pixabay.api-helper';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/css/navigation';

export default defineComponent({
  name: 'OneActiveSlide',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const state = reactive({
      images: [] as Array<PixabayImageObject>,
    });

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };

    onMounted(() => {
      PixabayApiHelper.getImages('lakes fish', 10).then(({ data }) => {
        if (data.hits.length > 0) {
          data.hits.forEach((image) => {
            state.images.push(image);
          });
        }
      });
    });

    return {
      modules: [Navigation, Pagination],
      state,
      onSwiper,
      onSlideChange,
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
  cursor: pointer;
}
</style>

<style lang="scss">
.swiper-slider-wrap.simple-slider {
  .swiper-pagination {
    width: auto;
    max-width: 100%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;

    .swiper-pagination-bullet {
      width: 13px;
      height: 13px;
      margin: 0 7px;
      background: rgba(0, 0, 0, 0.95);
      border: 2px solid rgba(255, 255, 255, 0.95);
      transition: all, .75s;
      -webkit-tap-highlight-color: transparent;

      &-active {
        background: $dark-red;
        border: 2px solid $dark-red;
      }
    }
  }
}
</style>
