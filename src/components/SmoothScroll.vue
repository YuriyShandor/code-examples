<template>
  <div class="smooth-scroll">
    <header
      class="header"
      :style= "[isMenuVisible ? {'padding-right': `${scrollbarWidth}px`} : '']"
    >
      <div class="container">
        <div class="header-block">
          <button
            class="hamburger hamburger--collapse"
            :class="{ active: isMenuVisible }"
            @click="toggleMenu"
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          <scrollactive
            class="header-nav"
            :class="{ active: isMenuVisible }"
            active-class="active"
          >
            <a
              v-for="item in 7"
              :key="item"
              :href="`#section-${item}`"
              v-scroll-to="`#section-${item}`"
              class="header-nav__item scrollactive-item"
            >
              Section {{item}}
            </a>
          </scrollactive>
        </div>
      </div>
    </header>
    <section
      class="section scrollactive-item"
      v-for="item in 7"
      :key="item"
      :id="`section-${item}`"
      :data-section-selector="`section-${item}`"
    >
      <h2 class="section-ttl">Section {{ item }}</h2>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SmoothScroll',
  data() {
    return {
      isMenuVisible: false,
      scrollbarWidth: 16
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible
      this.scrollbarWidth = window.innerWidth - document.body.clientWidth
      document.body.style.overflow = this.isMenuVisible ? 'hidden' : ''
      document.body.style.marginRight = this.isMenuVisible ? `${this.scrollbarWidth}px` : ''
    }
  },
  mounted() {
    let header = document.querySelector('.header');

    window.addEventListener('scroll', function(){
      let scrollPos = window.scrollY;
      let winHeight = window.innerHeight;

      if (scrollPos >= winHeight - 65) {
        header.classList.add('scroll');
      } else {
        header.classList.remove('scroll');
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .smooth-scroll {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .header {
    width: 100%;
    padding: 12px 0;
    background: rgba(3, 49, 96, 0.95);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 500;

    @media only screen and (min-width: 768px) {
      padding: 15px 0;
    }

    @media only screen and (min-width: 992px) {
      position: absolute;
      top: unset;
      bottom: 0;
      padding: 20px 0;

      &.scroll {
        position: fixed;
        top: 0;
        bottom: unset;
      }
    }
  }

  .header-block {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
  }

  .header-nav {
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    height: calc(100vh - 50px);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background: rgba(3, 49, 96, 0.95);
    padding: 25px 5vw;
    transform: translateX(-101%);
    transition: all, .5s;

    &.active {
      transform: translateX(0);
    }

    @media only screen and (min-width: 992px) {
      transform: translateX(0);
      position: relative;
      top: 0;
      left: 0;
      height: auto;
      padding: 0;
      background: transparent;
      flex-direction: row;
      align-items: center;
    }
  }

  .header-nav__item {
    margin-bottom: 15px;
    display: block;
    width: fit-content;
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    cursor: pointer;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      background: #fff;
      margin: 0 auto;
      transition: all, .3s;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }

    &.active {
      &::after {
        width: 100%;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }

    @media only screen and (min-width: 992px) {
      margin-bottom: 0;
      margin-right: 35px;
      font-size: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  // Hamburger
  $hamburger-padding-x: 0px !default;
  $hamburger-padding-y: 0px !default;
  $hamburger-layer-width: 25px !default;
  $hamburger-layer-height: 1.5px !default;
  $hamburger-layer-spacing: 6px !default;
  $hamburger-layer-color: #fff !default;
  $hamburger-layer-border-radius: 1px !default;

  .hamburger {
    padding: $hamburger-padding-y $hamburger-padding-x;
    display: inline-block;
    cursor: pointer;
    transition: all, .25s;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    outline: none !important;
    overflow: visible;

    &:hover {
      opacity: .7;
    }

    @media only screen and (min-width: 992px) {
      display: none;
    }
  }

  .hamburger-box {
    width: $hamburger-layer-width;
    height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: $hamburger-layer-height / -2;

    &, &::before, &::after {
      content: "";
      display: block;
      width: $hamburger-layer-width;
      height: $hamburger-layer-height;
      background-color: $hamburger-layer-color;
      border-radius: $hamburger-layer-border-radius;
      position: absolute;
      transition: transform, .15s ease;
    }

    &::before {
      top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
    }

    &::after {
      bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
    }
  }

  .hamburger--collapse {
    .hamburger-inner {
      top: auto;
      bottom: 0;
      transition-duration: 0.13s;
      transition-delay: 0.13s;
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

      &::after {
        top: ($hamburger-layer-spacing * 2 + $hamburger-layer-height * 2) * -1;
        transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
        opacity 0.1s linear;
      }

      &::before {
        transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
        transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
    }

    &.active {
      .hamburger-inner {
        transform: translate3d(0, ($hamburger-layer-spacing + $hamburger-layer-height) * -1, 0) rotate(-45deg);
        transition-delay: 0.22s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

        &::after {
          top: 0;
          opacity: 0;
          transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          opacity 0.1s 0.22s linear;
        }

        &::before {
          top: 0;
          transform: rotate(-90deg);
          transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      }
    }
  }

  .section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
