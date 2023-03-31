<template>
  <div class="java-script-general-examples">
    <h1 class="page-title">
      Google Maps Examples
    </h1>
    <div class="code-example-block">
      <div class="code-example__title">
        Get user geolocation
      </div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            const getUserGeolocation = () => {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                  state.mapCenter.lat = position.coords.latitude;
                  state.mapCenter.lng = position.coords.longitude;
                }, (error) => {
                  let errorStr;
                  switch (error.code) {
                    case error.PERMISSION_DENIED:
                      errorStr = 'User denied the request for Geolocation.';
                      break;
                    case error.POSITION_UNAVAILABLE:
                      errorStr = 'Location information is unavailable.';
                      break;
                    case error.TIMEOUT:
                      errorStr = 'The request to get user location timed out.';
                      break;
                    default:
                      errorStr = 'An unknown error occurred.';
                  }
                  console.error(`Error occurred: ${errorStr}`);
                });
              } else {
                console.log('Geolocation is not supported by this browser.');
              }
            };
          </code>
        </pre>
      </div>
    </div>
    <GoogleMapWithAutocomplete/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import GlobalHelper from '@/helpers/global.helper';
import StringsHelper from '@/helpers/strings.helper';
import GoogleMapWithAutocomplete from '@/components/external-libraries/google-maps/GoogleMapWithAutocomplete.vue';

export default defineComponent({
  name: 'GoogleMapsExamples',
  components: {
    GoogleMapWithAutocomplete,
  },
  setup() {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.googleapis.com/maps/api/js?';
      script.src += `key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}`;
      script.src += '&callback=Function.prototype';
      script.src += '&libraries=geometry,places';
      let googleMapsLanguageCode = 'en';
      GlobalHelper.languageSelectOptions().forEach((language) => {
        if (language.value === localStorage.getItem(StringsHelper.LANGUAGE_LS_KEY)) {
          googleMapsLanguageCode = language.googleMapsCode;
        }
      });
      script.src += `&language=${googleMapsLanguageCode}`;
      script.id = 'google-maps-script';
      document.body.appendChild(script);
    };

    onMounted(() => {
      loadGoogleMapsScript();
    });
  },
});
</script>
