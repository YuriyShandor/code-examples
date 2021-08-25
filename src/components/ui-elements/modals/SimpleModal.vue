<template>
  <div class="simple-modal-block">
    <div class="button" @click="openSimpleModal">Open Modal</div>
    <div class="simple-modal" v-if="isSimpleModalVisible">
      <div class="simple-modal__overlay" @click="closeSimpleModal"></div>
      <div class="simple-modal__block">
        <div class="simple-modal__close-button" @click="closeSimpleModal">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9999 1.35556L1.00132 23.3542" stroke="#553F3F" stroke-width="2" stroke-linecap="round"/>
            <path d="M22.9999 23.3554L1.00132 1.35678" stroke="#553F3F" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="simple-modal__content">
          <img src="" alt="" class="simple-modal__image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import PixabayApiHelper from '@/api-helpers/pixabay.api-helper'

export default {
  name: 'SimpleModal',
  data() {
    return {
      isSimpleModalVisible: false,
      mountains: undefined
    }
  },
  computed: {
    modalImages() {
      PixabayApiHelper.getImages('mountains').then(({ data }) => {
        return data
      })
    }
  },
  methods: {
    openSimpleModal() {
      this.isSimpleModalVisible = true
      PixabayApiHelper.getImages('mountains').then(({ data }) => {
        this.mountains = data
        console.log(this.mountains)
      })
    },

    closeSimpleModal() {
      this.isSimpleModalVisible = false
    }
  },
  mounted() {
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()

    PixabayApiHelper.getImages('mountains').then(({ data }) => {
      this.mountains = data
      console.log(this.mountains)
    })


  },
  watch: {

  }
}
</script>

<style scoped lang="scss">
  .simple-modal-block {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>