<template>
  <div class="pixabay-image-block">
    <img :src="pixabayImage.largeImageURL" alt="" class="pixabay-image">
    <div class="pixabay-image-block__actions">
      <div
        class="button pixabay-image-block__button"
        v-if="!isImageSelected"
        @click="addImageToSelected">
        Add to Selected
      </div>
      <div
        class="button pixabay-image-block__button"
        v-if="isImageSelected"
        @click="removeImageFromSelected">
        Remove from Selected
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'PixabayImageItem',
  props: {
    selectedImages: {
      type: Array,
      required: true,
    },
    pixabayImage: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const isImageSelected = ref(false);

    const checkIsImageSelected = () => {
      if (props.selectedImages.length > 0) {
        isImageSelected.value = props.selectedImages.some((image: any) => image.id === props.pixabayImage.id);
      }
    };

    const addImageToSelected = () => {
      store.dispatch('ADD_IMAGE', props.pixabayImage);
    };

    const removeImageFromSelected = () => {
      store.dispatch('REMOVE_IMAGE', props.pixabayImage);
    };

    onMounted(() => {
      checkIsImageSelected();
    });

    watch(() => props.selectedImages, () => {
      checkIsImageSelected();
    }, { deep: true });

    return {
      isImageSelected,
      addImageToSelected,
      removeImageFromSelected,
    };
  },
});
</script>

<style scoped lang="scss">
.pixabay-image-block {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  @media only screen and (min-width: 760px) {
    width: calc(50% - 10px);
    height: 200px;
  }

  @media only screen and (min-width: 900px) {
    height: 250px;
  }

  @media only screen and (min-width: 1100px) {
    height: 300px;
  }

  @media only screen and (min-width: 1300px) {
    height: 350px;
  }

  @media only screen and (min-width: 1300px) {
    height: 400px;
  }

  &:hover {
    .pixabay-image-block__actions {
      opacity: 1;
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
