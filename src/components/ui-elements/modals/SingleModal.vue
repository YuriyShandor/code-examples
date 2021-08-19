<template>
  <div class="single-modal-block">
    <div class="button">Open Modal</div>
  </div>
</template>

<script>/* eslint-disable */
export default {
  name: 'SingleModal',
  props: [],
  components: {},
  computed: {

  },
  methods: {

  },
  mounted() {
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()
  },
  watch: {

  }
}
</script>

<style scoped lang="scss">
  .single-modal-block {
    display: flex;
    justify-content: flex-start;
  }
</style>