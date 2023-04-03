<template>
  <div class="code-example-block">
    <div class="code-example__title">
      Simple Google Autocomplete
    </div>
    <a
      href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/external-libraries/google-maps/SimpleGoogleAutocompleteExample.vue"
      target="_blank"
      class="button code-example__button">
      Watch Code on GitHub
      <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
    </a>
    <div class="code-example__block">
      <div class="google-autocomplete-input-block">
        <div class="input-block">
          <div class="input-label">
            Location
          </div>
          <label for="simple-google-autocomplete-input">
            <input
              type="text"
              id="simple-google-autocomplete-input"
              class="input"
              :class="{'error': false}"
              placeholder=""
              v-model="state.locationQuery"
            >
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';

declare let google: any;

export default defineComponent({
  name: 'SimpleGoogleAutocompleteExample',
  setup(props, { emit }) {
    let autocompleteInput = null;

    const state = reactive({
      locationQuery: '' as string,
    });

    const initSimpleGoogleAutocomplete = () => {
      const googleMapWatcherInterval = setInterval(() => {
        if (typeof google === 'object' && typeof google.maps === 'object') {
          clearInterval(googleMapWatcherInterval);
          autocompleteInput = document.getElementById('simple-google-autocomplete-input');
          const autocomplete = new google.maps.places.Autocomplete(autocompleteInput);
          autocomplete.setComponentRestrictions({
            country: ['ua'],
          });
          autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();

            console.log(place);
            emit('change-place', place);

            if (!place.geometry || !place.geometry.location) {
              console.log(`No details available for input: '${place.name}'`);
            }
          });
        }
      }, 100);
    };

    onMounted(() => {
      initSimpleGoogleAutocomplete();
    });

    return {
      state,
    };
  },
});
</script>

<style scoped lang="scss">
.google-autocomplete-input-block {
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
</style>
