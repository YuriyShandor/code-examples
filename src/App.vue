<template>
  <div id="app">
    <GlobalMenu/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import GlobalMenu from '@/components/global-menu/GlobalMenu.vue';
import PrismHelper from '@/helpers/prism.helper';

export default {
  name: 'App',
  components: {
    GlobalMenu,
  },
  setup() {
    const route = useRoute();

    onMounted(() => {
      setTimeout(() => {
        PrismHelper.initPrism();
      }, 10);
    });

    watch(() => route.name, () => {
      setTimeout(() => {
        PrismHelper.initPrism();
      }, 10);
    });

    return { route };
  },
};
</script>

<style lang="scss">

</style>
