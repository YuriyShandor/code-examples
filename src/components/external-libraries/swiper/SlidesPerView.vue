<template>
  <div class="slides-per-view-slider-wrap">
    <swiper class="slides-per-view-slider" :options="slidesPerViewSliderOption" ref="slidesPerViewSliderSwiper">
      <swiper-slide v-for="image in pixabayImages" :key="image.id">
        <div class="slides-per-view-slider-item">
          <img :src="image.largeImageURL" alt="" class="slides-per-view-slider-item__image">
        </div>
      </swiper-slide>
      <div class="slides-per-view-slider-scrollbar swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>/* eslint-disable */
import PixabayApiHelper from '@/api-helpers/pixabay.api-helper'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'SlidesPerView',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      slidesPerViewSliderOption: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        freeMode: true,
        speed: 1000,
        grabCursor: true,
        scrollbar: {
          el: '.staff-favorites-scrollbar',
          draggable: true,
        },
        breakpoints: {
          450: {
            slidesPerView: 1.4,
          },
          550: {
            slidesPerView: 1.6,
          },
          650: {
            slidesPerView: 2,
          },
          760: {
            slidesPerView: 2.37,
          },
          960: {
            slidesPerView: 3,
          },
          1200: {
            freeMode: false,
            spaceBetween: 15,
            slidesPerView: 3,
          }
        }
      },
      pixabayImages: []
    }
  },
  computed: {

  },
  methods: {
    openSimpleModal() {
      this.isSimpleModalVisible = true
      this.mountains = PixabayApiHelper.getImages('mountains')
    },

    closeSimpleModal() {
      this.isSimpleModalVisible = false
    }
  },
  mounted() {
    PixabayApiHelper.getImages('mountains', 10).then(({ data }) => {
      if(data.hits.length > 0) {
        data.hits.forEach(image => {
          this.pixabayImages.push(image)
        })
      }
      console.log(this.pixabayImages)
    })
  },
  watch: {

  }
}
</script>

<style scoped lang="scss">
  .slides-per-view-slider-wrap {
    width: 100%;
  }

  .slides-per-view-slider {
    width: 100%;
    position: relative;
  }

  .slides-per-view-slider-scrollbar {
    left: 50% !important;
    transform: translateX(-50%) !important;
    bottom: 0 !important;
    width: 250px !important;
    background: #EAE9E8 !important;
    border-radius: 100px !important;
    height: 4px !important;

    .swiper-scrollbar-drag {
      background: #282828 !important;
      border-radius: 100px !important;
    }

    @media only screen and (min-width: 760px) {
      width: 400px !important;
    }
  }
</style>

