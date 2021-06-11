<template>
  <div class="banner">
    <div class="banner-ttl">Vue Templates</div>
    <img src="/images/banner-bg.jpg" alt="" class="banner-img">
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        publicPath: process.env.BASE_URL
      }
    },
    computed: {

    },
    methods: {

    },
    mounted() {

    }
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
    background: #b71c1c;
    padding: 50px 0;
    border-top: 10px solid #9e9e9e;
    border-bottom: 10px solid #9e9e9e;
    position: relative;
    z-index: 2;
    font-size: 54px;
    font-weight: 500;
    text-align: center;
    color: #000;
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