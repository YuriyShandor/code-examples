<template>
  <div class="single-slider-wrap">
    <slick
      class="single-slider"
      ref="slick"
      :options="sliderOptions"
      @init="handleInit"
      @afterChange="handleAfterChange"
    >
      <div
        class="single-slide"
        v-for="slide in sliderImages"
        :key="slide.id"
      >
        <div class="single-slide-inner">
          <img
            :src="slide.largeImageURL"
            alt=""
            class="slide-image"
          >
        </div>
      </div>
    </slick>
    <div class="slider__nav slider__nav_prev">
      <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.63672 12.605L1.91531 7.04576L7.63672 1.48654" stroke="#FF9993" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="slider__nav slider__nav_next">
      <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.90234 1.48682L7.62375 7.04604L1.90234 12.6053" stroke="#FF9993" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="slider-count">
      <span class="slider-count__current">{{ currentSliderSlide }}</span>
      <span>of</span>
      <span class="slider-count__total">{{ totalSliderSlides }}</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Slick from 'vue-slick'

  export default {
    components: {
      Slick
    },
    name: 'EmptyComponent',
    data() {
      return {
        images: undefined,
        sliderOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '.slider__nav_prev',
          nextArrow: '.slider__nav_next',
          mobileFirst: true,
          dots: true,
          dotsClass: 'slider-dots',
          autoplay: false,
          autoplaySpeed: 5000,
          speed: 750
        },
        currentSliderSlide: 1,
        totalSliderSlides: 0
      }
    },
    computed: {
      sliderImages() {
        if (this.images !== undefined) {
          this.reInit()
          return this.images
        }
        return undefined
      }
    },
    beforeUpdate() {
      // if (this.$refs.slick) {
      //   this.$refs.slick.destroy()
      // }
    },
    updated() {
      // this.$nextTick(() => {
      //   if (this.$refs.slick) {
      //     this.$refs.slick.create(this.sliderOptions)
      //   }
      // })
    },
    methods: {
      reInit() {
        let currIndex = this.$refs.slick.currentSlide()
        this.$refs.slick.destroy()
        this.$nextTick(() => {
          this.$refs.slick.create()
          this.$refs.slick.goTo(currIndex, true)
        })
      },

      handleInit(event, slick) {
        this.totalSliderSlides = slick.slideCount
      },

      handleAfterChange(event, slick, currentSlide) {
        this.currentSliderSlide = currentSlide + 1
      }
    },
    mounted() {
      axios.get('https://pixabay.com/api/' +
        '?key=17459503-b53b6c0cdbd4d3bcd974119dc' +
        '&q=gothic+darkness+black' +
        '&image_type=photo' +
        '&orientation=horizontal')
        .then(response => {
          this.images = response.data.hits
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
</script>

<style lang="scss">
  /* General Slider Styles */
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    overflow: hidden;
    display: block;
    margin: 0;
    padding: 0;

    &:focus {
      outline: none;
    }

    &.dragging {
      cursor: pointer;
      cursor: hand;
    }
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    left: 0;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;

    &:before,
    &:after {
      content: "";
      display: table;
    }

    &:after {
      clear: both;
    }

    .slick-loading & {
      visibility: hidden;
    }
  }

  .slick-slide {
    float: left;
    height: 100%;
    min-height: 1px;
    [dir="rtl"] & {
      float: right;
    }
    img {
      display: block;
    }
    &.slick-loading img {
      display: none;
    }

    display: none;

    &.dragging img {
      pointer-events: none;
    }

    .slick-initialized & {
      display: block;
    }

    .slick-loading & {
      visibility: hidden;
    }

    .slick-vertical & {
      display: block;
      height: auto;
      border: 1px solid transparent;
    }
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide {
    outline: none;
  }

  .slick-dotted.slick-slider {
    margin-bottom: 0;
  }
</style>

<style lang="scss">
  // Styles for Dots

  .slider-dots {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.7);
      margin-right: 12px;
      cursor: pointer;
      transition: all, .1s;

      button {
        display: none;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.95);
      }

      &:last-child {
        margin-right: 0;
      }
    }

    li.slick-active {
      background: #b71c1c;
    }

    @media only screen and (min-width: 760px) {
      bottom: 30px;

      li {
        width: 10px;
        height: 10px;
        margin-right: 15px;
      }
    }
  }
</style>

<style scoped lang="scss">
  // Current Slider Styles

  .single-slider-wrap {
    width: 100%;
    position: relative;
  }

  .single-slider {
    width: 100%;
  }

  .single-slide {
    width: 100%;
  }

  .single-slide-inner {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slider__nav {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all, .25s;

    svg {
      display: block;
      width: 9px;
      height: auto;

      path {
        stroke: #b71c1c;
      }
    }

    &:hover {
      background: rgba(255, 255, 255, 0.95);
    }

    &_prev {
      left: 30px;
    }

    &_next {
      right: 30px;
    }

    @media only screen and (min-width: 760px) {
      width: 40px;
      height: 40px;
      border-radius: 7px;

      svg {
        width: 12px;
      }

      &_prev {
        left: 40px;
      }

      &_next {
        right: 40px;
      }
    }
  }

  .slider-count {
    position: absolute;
    top: 30px;
    right: 50px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    color: #fefefe;

    span {
      margin: 0 2.5px;
    }

    &__current {
      color: #b71c1c;
    }

    &__total {
      color: #999;
    }

    @media only screen and (min-width: 760px) {
      font-size: 24px;
    }
  }
</style>