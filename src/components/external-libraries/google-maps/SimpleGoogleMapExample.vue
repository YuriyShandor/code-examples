<template>
  <div class="code-example-block">
    <div class="code-example__title">
      Simple Google Map
    </div>
    <a
      href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/external-libraries/google-maps/SimpleGoogleMapExample.vue"
      target="_blank"
      class="button code-example__button">
      Watch Code on GitHub
      <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
    </a>
    <div class="code-example__block">
      <div class="google-map-component">
        <div class="google-map-iframe" id="simple-google-map-iframe"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, onMounted } from 'vue';

declare let google: any;

export default defineComponent({
  name: 'SimpleGoogleMapExample',
  setup() {
    let map = null;

    const state = reactive({
      mapCenter: {
        lat: 49.842957,
        lng: 24.031111,
      },
    });

    const initSimpleGoogleMap = () => {
      const googleMapWatcherInterval = setInterval(() => {
        if (typeof google === 'object' && typeof google.maps === 'object') {
          clearInterval(googleMapWatcherInterval);
          map = new google.maps.Map(document.getElementById('simple-google-map-iframe'), {
            center: state.mapCenter,
            zoom: 15,
            mapTypeControl: false,
            fullscreenControl: false,
          });

          // eslint-disable-next-line no-new
          new google.maps.Marker({
            position: state.mapCenter,
            map,
            title: 'Map center',
          });
        }
      }, 100);
    };

    onMounted(() => {
      initSimpleGoogleMap();
    });

    return {
      state,
    };
  },
});
</script>

<style scoped lang="scss">
.google-map-component {
  width: 100%;
  position: relative;
  margin-top: 20px;

  @media only screen and (min-width: 700px) {
    margin-top: 25px;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 30px;
  }
}

.google-map-iframe {
  width: 100%;
  height: 340px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  z-index: 1;

  @media only screen and (min-width: 700px) {
    height: 450px;
  }

  @media only screen and (min-width: 1200px) {
    height: 600px;
  }
}
</style>
