<template>
  <div id="app">
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
    PrismApiHelper.initPrism()
  }
}
</script>

<style lang="scss" scoped>

</style>
