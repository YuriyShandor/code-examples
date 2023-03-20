<template>
  <div class="modals-examples">
    <h1 class="page-title">Modals Examples</h1>
    <ModalWith100vhPlugin/>
    <ModalWithoutPlugins/>
  </div>
</template>

<script lang="ts">
import ModalWith100vhPlugin from '@/components/ui-elements/modals/ModalWith100vhPlugin.vue';
import ModalWithoutPlugins from '@/components/ui-elements/modals/ModalWithoutPlugins.vue';

export default {
  name: 'ModalsExamples',
  components: {
    ModalWith100vhPlugin,
    ModalWithoutPlugins,
  },
};
</script>

<style scoped lang="scss">

</style>
