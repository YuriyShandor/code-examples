<template>
  <div id="app">
    <GlobalMenu/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import GlobalMenu from '@/components/global-menu/GlobalMenu.vue';

export default {
  name: 'App',
  components: {
    GlobalMenu,
  },
};
</script>

<style lang="scss">

</style>
