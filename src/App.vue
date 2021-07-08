<template>
  <div id="app">
    <GlobalMenu/>
    <router-view/>
  </div>
</template>

<script>

import GlobalMenu from '@/components/global-menu/GlobalMenu.vue'

export default {
  name: 'App',
  components: {
    GlobalMenu
  }
}
</script>

<style lang="scss" scoped>

</style>
