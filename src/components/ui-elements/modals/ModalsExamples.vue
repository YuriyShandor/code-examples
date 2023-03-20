<template>
  <div class="modals-examples">
    <h1 class="page-title">Modals Examples</h1>
    <SimpleModalWith100vhPlugin/>
<!--    <SimpleModalWithAnimation/>-->
  </div>
</template>

<script lang="ts">
import SimpleModalWith100vhPlugin from '@/components/ui-elements/modals/ModalWith100vhPlugin.vue';
// import SimpleModalWithAnimation from '@/components/ui-elements/modals/SimpleModalWithAnimation.vue';

export default {
  name: 'ModalsExamples',
  components: {
    SimpleModalWith100vhPlugin,
    // SimpleModalWithAnimation,
  },
};
</script>

<style scoped lang="scss">

</style>
