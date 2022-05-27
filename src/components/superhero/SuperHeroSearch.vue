<template>
  <div class="superhero-search">
    <div class="superhero-search__title">
      Find you superhero: {{searchField}}
    </div>
    <div class="superhero-search__form">
      <label class="superhero-search__input-label" for="superhero-search-input">
        <input
          type="text"
          class="superhero-search__input"
          placeholder="Superhero name"
          v-model="searchField"
          @input="findSuperHero"
          id="superhero-search-input">
      </label>
      <div class="superhero-search__button" @click="findSuperHero">
        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
          <path
            d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438
            11.601563 37 21 37 C 24.355469 37 27.460938 36.015625
            30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5
            30.28125 C 36.679688 27.421875 38 23.878906 38 20 C
            38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7
            34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33
            C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SuperHeroSearch',
  setup(props, { emit }) {
    const searchField = ref('');

    const findSuperHero = () => {
      emit('update-superhero-list', searchField.value);
    };

    return {
      searchField,
      findSuperHero,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.superhero-search {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.superhero-search__title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
}

.superhero-search__form {
  width: 100%;
  max-width: 500px;
  position: relative;
}

.superhero-search__input-label {
  width: 100%;
}

.superhero-search__input {
  width: 100%;
  height: 50px;
  border: 1px solid #898989;
  border-radius: 7px;
  padding: 0 70px 0 10px;
  font-weight: 500;
  font-size: 18px;
  color: #282828;
  &::placeholder {
    font-weight: 500;
    font-size: 18px;
    color: #898989;
  }
}

.superhero-search__button {
  width: 50px;
  height: 100%;
  background: #898989;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all, .25s;
  svg {
    display: block;
    width: 18px;
    height: auto;
    fill: #fff;
  }
  &:hover {
    background: #000;
  }
}
</style>
