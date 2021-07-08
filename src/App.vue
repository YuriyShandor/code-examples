<template>
  <div id="app">
    <HeaderApp/>
    <router-view/>
  </div>
</template>

<script>

import HeaderApp from '@/components/header/HeaderApp.vue'

export default {
  name: 'App',
  components: {
    HeaderApp
  }
}
</script>

<style lang="scss" scoped>

</style>
