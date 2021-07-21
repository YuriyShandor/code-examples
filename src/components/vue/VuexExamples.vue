<template>
  <div class="banner">
    <div class="banner-ttl">Code Examples</div>
    <img src="images/banner-bg.jpg" alt="" class="banner-img">
  </div>
</template>

<script>
  export default {
    name: 'VuexExamples'
  }
</script>

<style scoped lang="scss">
  .banner {
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
  }

  .banner-ttl {
    width: 100%;
    background: $primary-bg-color;
    padding: 30px 0;
    border-top: 10px solid $secondary-text-color;
    border-bottom: 10px solid $secondary-text-color;
    position: relative;
    z-index: 2;
    font-family: $secondary-font-family;
    font-size: 40px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    color: $secondary-text-color;

    @media only screen and (min-width: 700px) {
      font-size: 60px;
      padding: 40px 0;
    }

    @media only screen and (min-width: 1200px) {
      font-size: 80px;
      padding: 50px 0;
    }
  }

  .banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
</style>