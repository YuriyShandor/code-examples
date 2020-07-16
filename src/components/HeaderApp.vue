<template>
  <div class="header-wrap">
    <div
      class="header-menu-btn"
      :class="{'active': isMenuOpen}"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span class="header-menu-btn__line"></span>
    </div>
    <div class="header-menu-block">
      <div class="header-menu__list">
        <router-link
          class="header-menu__list-item"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          {{ item.title }}
        </router-link>
      </div>
      <div class="header-menu__inner">
        <div
          class="header-menu__inner-item"
          v-for="(item, index) in menuItems"
          :key="item.title"
        >
          <transition
            name="number"
            tag="div"
            class="header-menu__inner-item-number-title"
          >
            <div class="header-menu__inner-item-number">
              <span v-if="index < 10">0</span>
              <span>{{ index }}</span>
            </div>
            <div class="header-menu__inner-item-title">{{ item.title }}</div>
          </transition>

          <img :src="item.image" alt="" class="header-menu__inner-item-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        isMenuOpen: false,
        activeSlide: 0,
        menuItems: [
          {
            title: 'Home',
            link: '/',
            image: '/images/mountains/image-01.jpg'
          },
          {
            title: 'Slick',
            link: '/slick',
            image: '/images/mountains/image-02.jpg'
          },
          {
            title: 'Smooth Scroll',
            link: '/smooth-scroll',
            image: '/images/mountains/image-03.jpg'
          },
          {
            title: 'Users List',
            link: '/users',
            image: '/images/mountains/image-04.jpg'
          },
        ]
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
  $hamburger-layer-width: 35px !default;
  $hamburger-layer-height: 3px !default;
  $hamburger-layer-spacing: 6px !default;
  $hamburger-layer-color: #fff !default;
  $hamburger-layer-border-radius: 0px !default;

  .header-menu-btn {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    cursor: pointer;
    width: $hamburger-layer-width + 20;
    height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2 + 30;
    padding-left: 10px;
    background: #000;

    &:hover {
      .header-menu-btn__line {
        &, &::before, &::after {
          background-color: #b71c1c;
        }
      }
    }

    &.active {
      .header-menu-btn__line {
        transform: translate3d(0, ($hamburger-layer-spacing + $hamburger-layer-height) * -1, 0) rotate(-45deg);
        transition: transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1),
        background 0.25s linear;

        &::after {
          top: 0;
          opacity: 0;
          transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          opacity 0.1s 0.22s linear,
          background 0.25s linear;
        }

        &::before {
          top: 0;
          transform: rotate(-90deg);
          transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1),
          background 0.25s linear;
        }
      }
    }
  }

  .header-menu-btn__line {
    display: block;
    margin-top: $hamburger-layer-height / -2;
    top: auto;
    bottom: 15px;
    transition: transform 0.13s 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &, &::before, &::after {
      content: "";
      display: block;
      width: $hamburger-layer-width;
      height: $hamburger-layer-height;
      background-color: $hamburger-layer-color;
      border-radius: $hamburger-layer-border-radius;
      position: absolute;
      transition: transform 0.15s 0.2s ease,
      background 0.25s linear;
    }

    &::before {
      top: ($hamburger-layer-spacing * 2 - 2.5) * -1;
      transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19),
      background 0.25s linear;
    }

    &::after {
      top: ($hamburger-layer-spacing * 2 + $hamburger-layer-height * 2) * -1;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear,
      background 0.25s linear;
    }
  }

  .header-menu-block {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
  }

  .header-menu__list {
    position: absolute;
    top: 0;
    left: 7vw;
    z-index: 2;
    width: 43vw;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .header-menu__inner {
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100%;
    z-index: 1;
  }

  .header-menu__inner-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.7);
    }
  }

  .header-menu__inner-item-number {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  .slide-number-enter-active {
    transition: all .3s ease;
  }
  .slide-number-leave-active {
    transition: all .3s ease;
  }
  .slide-number-enter, .slide-number-leave-to

    transform: translateX(10px);
    opacity: 0;
  }

  .header-menu__inner-item-title {
    display: none;
  }

  .header-menu__inner-item-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>