<template>
  <div id="app">
    New
    <GlobalMenu/>
    <router-view/>
  </div>
</template>

<script>
import GlobalMenu from '@/components/global-menu/GlobalMenu.vue'
import PrismApiHelper from '@/api-helpers/prism.api-helper'

export default {
  name: 'App',
  components: {
    GlobalMenu
  },
  mounted() {
    setTimeout(() => {
      PrismApiHelper.initPrism()
    }, 100)
  },
  watch: {
    $route() {
      setTimeout(() => {
        PrismApiHelper.initPrism()
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
