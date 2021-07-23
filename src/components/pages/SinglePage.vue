<template>
  <div class="single-page">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SinglePage'
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