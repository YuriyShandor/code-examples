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
      <div class="container">
        <badger-accordion class="global-menu-accordion" :options="globalMenuAccordionOptions">
          <badger-accordion-item v-for="item in headerMenu" :key="item.title">
            <template slot="header">{{ item.title }}</template>
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
    headerMenu() {
      return this.$store.getters.GET_HEADER_MENU
    }
  },
  methods: {
    toggleMenuVisibility() {
      this.isMenuVisible = !this.isMenuVisible
    }
  },
  mounted() {

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
  display: flex;
  align-items: center;
  justify-content: center;
  background: $secondary-bg-color;
  box-shadow: -10px -1px 75px 0px rgba(36,37,38,0.55);
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px 0;
  z-index: 1000;
  transform: translateX(100%);
  transition: all, .5s;
  -webkit-tap-highlight-color: transparent;

  &.visible {
    transform: translateX(0);
  }
}


.global-menu-content {
  width: 100%;
}
</style>

<style lang="scss">
.global-menu-accordion {
  width: 100%;

  .badger-accordion-title {
    width: 100%;
    padding: 5px 0;
    font-family: $secondary-font-family;
    font-size: 20px;
    font-weight: 500;
    color: $secondary-text-color;
  }

  .badger-accordion__panel {
    margin-left: 15px;
  }

  .js-badger-accordion-panel-inner {
    width: 100%;
    display: flex;
    flex-direction: column;

  }
}
</style>