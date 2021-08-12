<template>
  <div class="single-page">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SinglePage',
    methods: {
      redirectToLastChild() {
        let parentsRoutes = this.$router.options.routes
        let childrenRoutes = undefined
        parentsRoutes.forEach(route => {
          if(route.name === this.$route.name) {
            childrenRoutes = route.children
          }
        })
        if(childrenRoutes !== undefined) {
          this.$router.push(`${this.$route.fullPath}/${childrenRoutes[0].path}`)
        }
      }
    },
    mounted() {
      this.redirectToLastChild()
    },
    watch: {
      $route() {
        this.redirectToLastChild()
      }
    }
  }
</script>

<style scoped lang="scss">
.single-page {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 20px 0;
  
  @media only screen and (min-width: 700px) {
    padding: 20px 0;
  }
  
  @media only screen and (min-width: 1200px) {
    padding: 50px 0;
  }
}
</style>