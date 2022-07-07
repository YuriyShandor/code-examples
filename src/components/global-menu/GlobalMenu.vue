<template>
  <div class="global-menu-wrap">
    <div class="global-menu-btn"
      :class="{'active': state.isMenuVisible}"
      @click="toggleMenuVisibility"
    ><span></span>
    </div>
    <div
      class="global-menu-block"
      :class="{'visible': state.isMenuVisible}">
      <div class="global-menu-overlay" @click="toggleMenuVisibility"></div>
      <div
        class="global-menu-content"
        :class="{'visible': state.isMenuVisible}">
        <el-collapse
          v-model="state.activeName" accordion
          class="global-menu-accordion">
          <el-collapse-item
            class="global-menu-item" :name="item.title"
            v-for="item in globalMenu" :key="item.title">
            <template #title>
              <div class="global-menu-item__title">
                {{ item.title }}
              </div>
            </template>
            <div class="global-menu-item__content">
              <router-link
                class="global-menu__sub-item"
                v-for="subItem in item.subItems"
                :key="subItem.title"
                :to="subItem.link">
                {{ subItem.title }}
              </router-link>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';

import VueExamplesRouterHelper from '@/router/helpers/vueExamplesRouter.helper';
import JavaScriptExamplesRouterHelper from '@/router/helpers/javaScriptExamplesRouter.helper';
import ExternalLibrariesRouterHelper from '@/router/helpers/externalLibrariesRouter.helper';
import UIElementsRouterHelper from '@/router/helpers/UIElementsRouter.helper';
import CodeWarsJavaScriptRouterHelper from '@/router/helpers/codeWarsJavaScriptRouter.helper';
import TypeScriptRouterHelper from '@/router/helpers/typeScriptRouter.helper';
import OtherExamplesRouterHelper from '@/router/helpers/otherExamplesRouter.helper';
import InterviewQuestionsRouterHelper from '@/router/helpers/interviewQuestionsRouter.helper';
import ScrollHelper from '@/helpers/scroll.helper';

export default defineComponent({
  name: 'GlobalMenu',
  setup() {
    const route = useRoute();
    const globalMenu: any[] = [
      VueExamplesRouterHelper.menuItems(),
      JavaScriptExamplesRouterHelper.menuItems(),
      ExternalLibrariesRouterHelper.menuItems(),
      UIElementsRouterHelper.menuItems(),
      CodeWarsJavaScriptRouterHelper.menuItems(),
      TypeScriptRouterHelper.menuItems(),
      OtherExamplesRouterHelper.menuItems(),
      InterviewQuestionsRouterHelper.menuItems(),
    ];
    const state = reactive({
      activeName: '' as string,
      isMenuVisible: false as boolean,
    });

    const toggleMenuVisibility = () => {
      state.isMenuVisible = !state.isMenuVisible;
    };

    watch(() => state.isMenuVisible, (value) => {
      if (value) {
        ScrollHelper.disableScroll();
      } else {
        ScrollHelper.enableScroll();
      }
      // const oleh: boolean = value ? ScrollHelper.disableScroll() : ScrollHelper.enableScroll();
    });

    watch(() => route.name, () => {
      state.isMenuVisible = false;
    });

    return {
      state,
      globalMenu,
      toggleMenuVisibility,
    };
  },
});
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

    &:before, &:after {
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
  box-shadow: -10px -1px 75px 0px rgba(36, 37, 38, 0.55);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  transform: translateX(100%);
  transition: all, .5s;
  -webkit-tap-highlight-color: transparent;

  &.visible {
    transform: translateX(0);
  }

  @media only screen and (min-width: 700px) {
    width: 500px;
    border-radius: 20px 0 0 20px;
  }
}

.global-menu-accordion {
  width: 100%;
  padding: 20px;
  border: none;

  @media only screen and (min-width: 700px) {
    padding: 30px;
  }
}

.global-menu__item {
  width: 100%;
}

.global-menu-item__title {
  font-family: $secondary-font-family;
  font-size: 22px;
  font-weight: 500;
  color: $secondary-text-color;
}

.global-menu-item__content {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.global-menu__sub-item {
  width: 100%;
  font-family: $secondary-font-family;
  font-size: 18px;
  font-weight: 500;
  color: $secondary-text-color;
  margin-bottom: 5px;
  padding: 0 10px;
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
  .global-menu-item {
    &:first-child {
      .el-collapse-item__header {
        border-top: 1px solid $secondary-text-color;
      }
    }

    &.is-active {
      .el-collapse-item__header {
        background: darken(#18191a, 5%);
      }
    }
  }

  .el-collapse-item__header {
    padding: 5px;
    border-bottom: 1px solid $secondary-text-color;
    background: transparent;
    transition: all, .25s;

    .el-collapse-item__arrow {
      font-size: 20px;
      color: $secondary-text-color;
    }
  }

  .el-collapse-item__wrap {
    background: transparent;
  }

  .el-collapse-item__content {
    padding: 0;
  }
}
</style>
