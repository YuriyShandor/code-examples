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
                  console.log(position);
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
    <SimpleGoogleMapExample/>
    <SimpleGoogleAutocompleteExample/>
    <GoogleMapWithAutocompleteExample/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import GlobalHelper from '@/helpers/global.helper';
import StringsHelper from '@/helpers/strings.helper';
import SimpleGoogleMapExample from '@/components/external-libraries/google-maps/SimpleGoogleMapExample.vue';
import SimpleGoogleAutocompleteExample from '@/components/external-libraries/google-maps/SimpleGoogleAutocompleteExample.vue';
import GoogleMapWithAutocompleteExample from '@/components/external-libraries/google-maps/GoogleMapWithAutocompleteExample.vue';

export default defineComponent({
  name: 'GoogleMapsExamples',
  components: {
    SimpleGoogleMapExample,
    SimpleGoogleAutocompleteExample,
    GoogleMapWithAutocompleteExample,
  },
  setup() {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.googleapis.com/maps/api/js?';
      script.src += `key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}`;
      script.src += '&callback=Function.prototype';
      script.src += '&libraries=geometry,places';
      let googleMapsLanguageCode = 'uk';
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

<style lang="scss">
.pac-container {
  z-index: 99999 !important;
}

a[href^="http://maps.google.com/maps"] {
  display: none !important
}

a[href^="https://maps.google.com/maps"] {
  display: none !important
}

.gmnoprint a, .gmnoprint span, .gm-style-cc {
  display: none;
}

.gmnoprint div {
  background: none !important;
}
</style>
