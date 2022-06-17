<template>
  <div class="super-hero-details-modal">
    <div
      class="super-hero-details-modal__overlay"
      @click="setSelectedSuperHero">
    </div>
    <div class="super-hero-details-modal__content-wrap">
      <div class="super-hero-details-modal__content">
        <div class="super-hero__image-block">
          <img class="super-hero__image"
            :src="superHero.image.url" alt="">
        </div>
        <div class="quickview-product__info">
          <div class="quickview-product__info-item">
            <div class="quickview-product__info-item-title">
              Name:
            </div>
            <div class="quickview-product__info-item-value">
              {{ superHero.name }}
            </div>
          </div>
          <div
            class="quickview-product__info-item"
            v-for="key in Object.keys(superHero.appearance)"
            :key="key"
          >
            <div class="quickview-product__info-item-title">
              {{ key }}:
            </div>
            <div class="quickview-product__info-item-value">
              {{ superHero.appearance[key] }}
            </div>
          </div>
          <div
            class="quickview-product__info-item"
            v-for="key in Object.keys(superHero.biography)"
            :key="key"
          >
            <div class="quickview-product__info-item-title">
              {{ key }}:
            </div>
            <div class="quickview-product__info-item-value">
              {{ superHero.biography[key] }}
            </div>
          </div>
          <div
            class="quickview-product__info-item"
            v-for="key in Object.keys(superHero.connections)"
            :key="key"
          >
            <div class="quickview-product__info-item-title">
              {{ key }}:
            </div>
            <div class="quickview-product__info-item-value">
              {{ superHero.connections[key] }}
            </div>
          </div>
          <div
            class="quickview-product__info-item"
            v-for="key in Object.keys(superHero.powerstats)"
            :key="key"
          >
            <div class="quickview-product__info-item-title">
              {{ key }}:
            </div>
            <div class="quickview-product__info-item-value">
              {{ superHero.powerstats[key] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SuperHeroDetailsModal',
  props: {
    superHero: Object,
  },
  setup(props, { emit }) {
    const setSelectedSuperHero = () => {
      emit('set-selected-superhero', undefined);
    };

    return {
      setSelectedSuperHero,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.super-hero-details-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1033;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all, .25s;
}

.super-hero-details-modal__overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #282828;
  opacity: 0.3;
}

.super-hero-details-modal__content-wrap {
  width: 100%;
  position: relative;
  height: auto;
  max-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 760px) {
    width: 715px;
    max-height: 95vh;
  }
}

.super-hero-details-modal__content {
  width: calc(100% - 30px);
  position: relative;
  height: auto;
  max-height: 100%;
  z-index: 2;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;

  &::-webkit-scrollbar {
    display: block;
    width: 4px;
    background-color: #D8D8D8;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    display: block;
    background: #282828;
    border-radius: 100px;
    cursor: pointer;
  }

  @media only screen and (min-width: 760px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
}

.super-hero__image-block {
  width: 180px;
  height: 250px;
  margin-bottom: 15px;
  flex-shrink: 0;

  @media only screen and (min-width: 760px) {
    margin: 0 15px 0 0;
    width: 250px;
    height: 320px;
  }

  @media only screen and (min-width: 1200px) {
    width: 320px;
    height: 400px;
  }
}

.super-hero__image {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.quickview-product__info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.quickview-product__info-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.quickview-product__info-item-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #898989;
  text-transform: capitalize;
}

.quickview-product__info-item-value {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #282828;
}
</style>
