<template>
  <div class="code-example-block">
    <div class="code-example__title">
      Simple Slider
    </div>
    <div class="code-example__description">
      Simple slider with one active slide.
    </div>
    <a
      href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/external-libraries/swiper/OneActiveSlide.vue"
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
          :navigation="{
            enabled: true,
            prevEl: prev,
            nextEl: next,
          }"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
          }"
          :speed="750"
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
        <div ref="prev" class="simple-slider-nav-button prev">
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.65669 0.391687C9.2005 -0.130562 8.46502 -0.130562 8.00884 0.391687L0.272315 9.2486C-0.090771 9.66427 -0.0907709 10.3357 0.272315 10.7514L8.00884 19.6083C8.46502 20.1306 9.2005 20.1306 9.65669 19.6083C10.1129 19.0861 10.1129 18.2441 9.65669 17.7218L2.91632 9.99467L9.666 2.26752C10.1129 1.75593 10.1129 0.903277 9.65669 0.391687Z" fill="#97BDC0"/>
          </svg>
        </div>
        <div ref="next" class="simple-slider-nav-button next">
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.343313 19.6083C0.799498 20.1306 1.53498 20.1306 1.99116 19.6083L9.72769 10.7514C10.0908 10.3357 10.0908 9.66427 9.72769 9.2486L1.99116 0.391687C1.53498 -0.130563 0.799498 -0.130563 0.343314 0.391687C-0.112871 0.913936 -0.112871 1.75593 0.343314 2.27818L7.08368 10.0053L0.334004 17.7325C-0.11287 18.2441 -0.112871 19.0967 0.343313 19.6083Z" fill="#97BDC0"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">/* eslint-disable import/extensions */
import { defineComponent, onMounted, reactive, ref } from 'vue';
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
    const prev = ref(null);
    const next = ref(null);

    const state = reactive({
      images: [] as Array<PixabayImageObject>,
    });

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

.simple-slider-nav-button {
  width: 30px;
  height: 30px;
  border: 2px solid rgba(255, 255, 255, .75);
  background: rgba(0, 0, 0, .75);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  transition: all, .25s;
  -webkit-tap-highlight-color: transparent;

  &.prev {
    left: 10px;

    svg {
      margin-right: 2px;
    }
  }

  &.next {
    right: 10px;

    svg {
      margin-left: 2px;
    }
  }

  svg {
    display: block;
    width: 7px;

    path {
      fill: rgba(255, 255, 255, .75);
      transition: all, .25s;
      -webkit-tap-highlight-color: transparent;
    }
  }

  &:hover {
    border: 2px solid rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 1);

    svg path {
      fill: $dark-red;
    }
  }

  &.swiper-button-disabled {
    opacity: 0;
    pointer-events: none;
  }

  @media only screen and (min-width: 700px) {
    width: 35px;
    height: 35px;

    svg {
      width: 9px;
    }
  }
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
