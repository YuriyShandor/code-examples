<template>
  <div class="global-menu-wrap">
    <div class="global-menu-btn"
      :class="{'active': isMenuVisible}"
      @click="toggleMenuVisibility"
    ><span></span>
    </div>
    <div
      class="global-menu-block"
      :class="{'visible': isMenuVisible}"
    >
      <div class="global-menu-overlay" @click="isMenuVisible = false"></div>
      <div
        class="global-menu-content"
        :class="{'visible': isMenuVisible}"
      >
        <badger-accordion class="global-menu-accordion" :options="globalMenuAccordionOptions">
          <badger-accordion-item v-for="item in globalMenu" :key="item.title">
            <template slot="header">
              <div class="global-menu__item">{{ item.title }}</div>
              <div class="global-menu__item-arrow"></div>
            </template>
            <template slot="content">
              <router-link
                class="global-menu__sub-item"
                v-for="subItem in item.subItems"
                :key="subItem.title"
                :to="subItem.link"
              >
                {{ subItem.title }}
              </router-link>
            </template>
          </badger-accordion-item>
        </badger-accordion>
      </div>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'

export default {
  name: 'GlobalMenu',
  components: {
    BadgerAccordion,
    BadgerAccordionItem
  },
  data() {
    return {
      isMenuVisible: false,
      globalMenuAccordionOptions: {
        openMultiplePanels: true
      }
    }
  },
  computed: {
    globalMenu() {
      return this.$store.getters.GET_GLOBAL_MENU
    }
  },
  methods: {
    toggleMenuVisibility() {
      this.isMenuVisible = !this.isMenuVisible
    }
  },
  mounted() {

  },
  watch: {
    $route() {
      this.isMenuVisible = false
    }
  }
}
</script>

<style scoped lang="scss">
.global-menu-btn {
  display: block;
  width: 50px;
  height: 41px;
  padding: 10px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: $secondary-bg-color;
  border: 1px solid $secondary-text-color;
  z-index: 1001;
  cursor: pointer;
  transition: all, .25s;

  &:hover {
    border: 1px solid $hover-text-color;

    span {
      background-color: $hover-text-color;

      &:before, &:after {
        background-color: $hover-text-color;
      }
    }
  }

  @media only screen and (min-width: 700px) {
    bottom: 15px;
    right: 15px;
  }

  @media only screen and (min-width: 1200px) {
    bottom: 20px;
    right: 20px;
  }

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 2px;
    background-color: $secondary-text-color;
    backface-visibility: hidden;
    border-radius: 2px;
    transition: all, .25s;

    &:before, &:after  {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: $secondary-text-color;
      backface-visibility: hidden;
      border-radius: 2px;
      transition: all, .25s;
    }

    &:before {
      top: 9px;
    }

    &:after {
      top: 18px;
    }
  }

  &.active {
    span {
      background: transparent;

      &:before {
        transform: rotate(45deg) translate(-1px, 0px);
      }

      &:after {
        transform: rotate(-45deg) translate(6px, -7px);
      }
    }
  }
}

.global-menu-block {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: all, .25s;
  -webkit-tap-highlight-color: transparent;

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
}

.global-menu-overlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.global-menu-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $secondary-bg-color;
  box-shadow: -10px -1px 75px 0px rgba(36,37,38,0.55);
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  z-index: 2;
  transform: translateX(100%);
  transition: all, .5s;
  -webkit-tap-highlight-color: transparent;

  &.visible {
    transform: translateX(0);
  }

  @media only screen and (min-width: 700px) {
    width: 500px;
    padding: 30px;
    border-radius: 20px 0 0 20px;
  }
}

.global-menu__item {
  width: 100%;
  font-family: $secondary-font-family;
  font-size: 22px;
  font-weight: 500;
  color: $secondary-text-color;
}

.global-menu__item-arrow {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 9px;
  right: 10px;

  &:before, &:after {
    content: '';
    display: block;
    width: 15px;
    height: 2px;
    background: $secondary-text-color;
    position: absolute;
    top: 9px;
    transition: all, .25s;
    -webkit-tap-highlight-color: transparent;
  }

  &:before {
    transform: rotate(45deg);
    left: -2px;
  }

  &:after {
    transform: rotate(-45deg);
    right: -2px;
  }
}

.global-menu__sub-item {
  width: 100%;
  font-family: $secondary-font-family;
  font-size: 18px;
  font-weight: 500;
  color: $secondary-text-color;
  margin-bottom: 5px;
  transition: all, .25s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: $hover-text-color;
  }

  &:first-child {
    margin-top: 5px;
  }

  &:last-child {
    margin-bottom: 10px;
  }
}
</style>

<style lang="scss">
.global-menu-accordion {
  width: 100%;

  .badger-accordion__header {
    &:first-child {
      .js-badger-accordion-header {
        border-top: 1px solid $secondary-text-color;
      }
    }
  }

  .js-badger-accordion-header {
    position: relative;
    padding-bottom: 5px;
    border-bottom: 1px solid $secondary-text-color;
    background: transparent;
    transition: all, .25s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: darken(#18191a, 5%);
    }

    &.-ba-is-active {
      background: darken(#18191a, 5%);

      .global-menu__item-arrow {
        &:before, &:after {
          width: 18px;
          top: 9px;
        }

        &:before {
          left: 1px;
        }

        &:after {
          right: 1px;
        }
      }
    }
  }

  .badger-toggle-indicator {
    opacity: 0;
  }

  .badger-accordion__panel {
    margin-left: 0;
    padding-left: 15px;

    &.-ba-is-active {
      border-bottom: 1px solid $secondary-text-color;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  .js-badger-accordion-panel-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>