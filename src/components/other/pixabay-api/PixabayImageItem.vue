<template>
  <div class="pixabay-image-block">
    <img :src="pixabayImage.largeImageURL" alt="" class="pixabay-image">
    <div class="pixabay-image-block__actions">
      <div
        class="button pixabay-image-block__button"
        v-if="!isImageSelected"
        @click="pixabayImageButtonAction">
        Add to Selected
      </div>
      <div
        class="button pixabay-image-block__button"
        v-if="isImageSelected"
        @click="pixabayImageButtonAction">
        {{ isImageSelected ? 'Remove from Selected' : 'Add to Selected' }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'PixabayImageItem',
  props: {
    pixabayImage: Object,
    isImageSelected: Boolean,
  },
  setup(props) {
    const store = useStore();

    const pixabayImageButtonAction = () => {
      if (props.isImageSelected) {
        store.dispatch('REMOVE_PIXABAY_SELECTED_IMAGE', props.pixabayImage);
      } else {
        store.dispatch('ADD_PIXABAY_SELECTED_IMAGE', props.pixabayImage);
      }
    };

    return {
      pixabayImageButtonAction,
    };
  },
});
</script>

<style scoped lang="scss">
.pixabay-image-block {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  @media only screen and (min-width: 760px) {
    width: calc(50% - 10px);
    height: 200px;
    border-radius: 15px;
  }

  @media only screen and (min-width: 900px) {
    height: 250px;
  }

  @media only screen and (min-width: 1100px) {
    height: 300px;
    border-radius: 20px;
  }

  @media only screen and (min-width: 1300px) {
    height: 350px;
  }

  @media only screen and (min-width: 1300px) {
    height: 400px;
  }

  &:hover {
    .pixabay-image-block__actions {
      opacity: 1 !important;
    }
  }
}

.pixabay-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;

  @media only screen and (min-width: 760px) {
    height: 100%;
  }
}

.pixabay-image-block__actions {
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-shadow: 0 0 17px 23px rgba(0,0,0,0.5);
  opacity: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  -webkit-tap-highlight-color: transparent;
  transition: all, .25s;
}
</style>
