<template>
  <div class="code-example-block">
    <div class="code-example__title">
      Google Map With Autocomplete
    </div>
    <a
      href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/external-libraries/google-maps/GoogleMapWithAutocomplete.vue"
      target="_blank"
      class="button code-example__button">
      Watch Code on GitHub
      <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
    </a>
    <div class="code-example__result">
      <div class="google-map-component">
        <div class="google-map-component-search-input">
          <div class="input-block">
            <div class="input-label">
              Location
            </div>
            <label for="google-map-with-autocomplete-input">
              <input
                type="text"
                id="google-map-with-autocomplete-input"
                class="input"
                :class="{'error': false}"
                placeholder=""
                v-model="state.locationQuery"
              >
            </label>
          </div>
        </div>
        <div class="google-map-iframe" id="google-map-with-autocomplete-iframe"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';

declare let google: any;

export default defineComponent({
  name: 'GoogleMapWithAutocompleteExample',
  setup(props, { emit }) {
    let map = null;
    let autocompleteInput = null;
    let autocompleteMarker = null;
    const customMarkersPositions = [
      {
        positionLat: 49.84613518005712,
        positionLng: 24.023398618758325,
        title: 'Готель Львів',
      },
      {
        positionLat: 49.84161815107262,
        positionLng: 24.030986859109014,
        title: 'Криївка',
      },
      {
        positionLat: 49.842048362493024,
        positionLng: 24.03640703078807,
        title: 'Реберня "Під Арсеналом"',
      },
      {
        positionLat: 49.84161815107262,
        positionLng: 24.021439018228204,
        title: 'Будинок вчених',
      },
      {
        positionLat: 49.83494938451935,
        positionLng: 24.012599969028503,
        title: 'Шаурма',
      },
    ];

    const state = reactive({
      map: null,
      mapCenter: {
        lat: 49.842957,
        lng: 24.031111,
      },
      locationQuery: '' as string,
    });

    const initMapWithAutocomplete = () => {
      const googleMapWatcherInterval = setInterval(() => {
        if (typeof google === 'object' && typeof google.maps === 'object') {
          clearInterval(googleMapWatcherInterval);
          map = new google.maps.Map(document.getElementById('google-map-with-autocomplete-iframe'), {
            center: state.mapCenter,
            zoom: 15,
            mapTypeControl: false,
            fullscreenControl: false,
          });

          autocompleteMarker = new google.maps.Marker({
            map,
            anchorPoint: new google.maps.Point(0, -29),
          });

          autocompleteInput = document.getElementById('google-map-with-autocomplete-input');
          const autocomplete = new google.maps.places.Autocomplete(autocompleteInput);
          autocomplete.setComponentRestrictions({
            country: ['ua'],
          });
          autocomplete.addListener('place_changed', () => {
            autocompleteMarker.setVisible(false);

            const place = autocomplete.getPlace();

            console.log(place);
            emit('change-place', place);

            if (!place.geometry || !place.geometry.location) {
              console.log(`No details available for input: '${place.name}'`);
              return;
            }

            if (place.geometry.viewport) {
              map.fitBounds(place.geometry.viewport);
            } else {
              map.setCenter(place.geometry.location);
            }

            autocompleteMarker.setPosition(place.geometry.location);
            autocompleteMarker.setVisible(true);
          });

          customMarkersPositions.forEach((item) => {
            const marker = new google.maps.Marker({
              map,
              position: new google.maps.LatLng(item.positionLat, item.positionLng),
              icon: 'images/google-map-custom-marker.svg',
              title: item.title,
              customInfo: {
                title: item.title,
                lat: item.positionLat,
                lng: item.positionLng,
              },
            });
            marker.addListener('click', () => {
              console.log(marker.customInfo);
            });
          });

          google.maps.event.addListener(map, 'bounds_changed', () => {
            const bounds = map.getBounds();
            const center = map.getCenter();
            if (bounds && center) {
              const ne = bounds.getNorthEast();
              const radius = google.maps.geometry.spherical.computeDistanceBetween(center, ne);
              emit('change-radius', radius);
            }
          });
        }
      }, 100);
    };

    onMounted(() => {
      initMapWithAutocomplete();
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

.google-map-component-search-input {
  width: 100%;
  position: relative;
  margin-bottom: 20px;
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
