<template>
  <div id="app">
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import SmoothScroll from './components/SmoothScroll.vue'
import Slick from './components/Slick.vue'

export default {
  name: 'app',
  components: {
    SmoothScroll,
    Slick,
  },
  data(){
    return{
      activeComponent: 'Slick'
    }
  },
  mounted() {
    console.log(this.data);
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Lato', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #2c3e50;
}

a {
  text-decoration: none;
}

.container {
  width: 90vw;
  margin: 0 auto;

  @media only screen and (min-width: 1200px) {
    width: 1170px;
  }

  @media only screen and (min-width: 1320px) {
    width: 1270px;
  }
  
   @media only screen and (min-width: 1420px) {
    width: 1370px;
  }
}

.section {
  padding: 40px 0;
  width: 100%;

  &:nth-child(odd) {
    background: #f8f9fb;
  }

  @media only screen and (min-width: 768px) {
    padding: 60px 0;
  }

  @media only screen and (min-width: 992px) {
    padding: 80px 0;
  }

  @media only screen and (min-width: 1200px) {
    padding: 100px 0;
  }
}

.section-ttl {
  font-family: 'Raleway', sans-serif;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  margin-bottom: 25px;

  @media only screen and (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 30px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 30px;
    margin-bottom: 40px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 36px;
    margin-bottom: 60px;
  }
}

.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: rgba(3, 49, 96, 0.8);
    font-family: 'Lato', Arial, sans-serif;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: rgba(3, 49, 96, 0.8);
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}

.dh__item {
  a {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.dh__overlay {
  div {
    background: rgba(3, 49, 96, 0.8) !important;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 15px;
  }
}

@media only screen and (min-width: 500px) {

}

@media only screen and (min-width: 768px) {

}

@media only screen and (min-width: 992px) {

}

@media only screen and (min-width: 1200px) {

}

@media only screen and (min-width: 1320px) {

}

@media only screen and (min-width: 1420px) {

}
</style>
