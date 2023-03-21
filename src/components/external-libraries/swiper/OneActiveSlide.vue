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
      <div class="swiper-slider-wrap">
        <swiper
          :slides-per-view="1"
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

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { PixabayImageObject } from '@/types';
import PixabayApiHelper from '@/api-helpers/pixabay.api-helper';

// Import Swiper styles
// eslint-disable-next-line import/extensions
import 'swiper/scss';

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
      state,
      onSwiper,
      onSlideChange,
    };
  },
});
</script>

<style scoped lang="scss">
.open-modal-button {
  max-width: 340px;
  margin-bottom: 15px;

  @media only screen and (min-width: 700px) {
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 1200px) {
    margin-bottom: 25px;
  }
}

.modal-block {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  -webkit-tap-highlight-color: transparent;
  transition: all, .5s;

  &.visible {
    opacity: 1;
    pointer-events: auto;
    transition: all, .01s;

    .modal {
      transform: translateX(0);
    }
  }
}

.modal-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  background-color: rgba(0, 0, 0, .7);
  backdrop-filter: blur(17px);
}

.modal {
  width: calc(100% - 20px);
  max-width: 500px;
  height: 90vh;
  max-height: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  transform: translateX(100vw);
  -webkit-tap-highlight-color: transparent;
  transition: all, .5s;
}

.modal-close-button {
  position: absolute;
  z-index: 10;
  top: 15px;
  right: 15px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background: #F7F4F0;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  transition: all, .25s;

  svg {
    display: block;
    width: 16px;
    height: auto;

    path {
      stroke: #553F3F;
      transition: all, .25s;
    }
  }

  &:hover {
    background: darken(#F7F4F0, 7%);

    svg path {
      stroke: #FF7A74;
    }
  }
}

.modal-content {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: block;
    width: 4px;
    background-color: #DFDFDF;
  }

  &::-webkit-scrollbar-thumb {
    display: block;
    background: #212121;
    border-radius: 7px;
    cursor: pointer;
  }
}

.modal-content__image {
  display: block;
  width: 100%;
  height: auto;
}
</style>
