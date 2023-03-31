<template>
  <div class="google-map-component">
    <div class="google-map-component-nav">
      <div class="google-map-component-search-input">
        <label for="autocomplete-input" class="input-block">
        <span class="input-label">
          Location
        </span>
          <input
            type="text"
            id="autocomplete-input"
            class="input"
            :class="{'error': false}"
            placeholder=""
            v-model="state.locationQuery"
          >
          <div class="google-map-component-search-input-button">
            <img src="images/search-icon.svg" alt="">
          </div>
        </label>
      </div>
    </div>
    <div class="google-map-iframe" id="google-map-iframe"></div>
    <div
      class="google-map-spot-info-modal-overlay"
      :class="{'visible': state.isGoogleMapSpotModalVisible}"
      @click="state.isGoogleMapSpotModalVisible = false">
    </div>
    <div
      class="google-map-spot-info-modal"
      :class="{'visible': state.isGoogleMapSpotModalVisible}">
      <div class="google-map-spot-info-modal-top-line"></div>
      <div class="google-map-spot-info">
        <div class="google-map-spot-info__image">
          <img src="images/spot-block-image-04.jpg" alt="">
        </div>
        <div class="google-map-spot-info__inner">
          <div class="google-map-spot-info__title">
            Nevada Rest
          </div>
          <div class="google-map-spot-info__address">
            Lviv / Uhorska 24s
          </div>
          <div class="google-map-spot-info__type">
            Restaurant
          </div>
          <div class="google-map-spot-info__rating">
            <div class="google-map-spot-info__rating-stars empty">
              <div class="star-block" v-for="number in 5" :key="number">
                <div class="star">
                  <img src="images/empty-star-icon.svg" alt="">
                </div>
              </div>
            </div>
            <div class="google-map-spot-info__rating-stars full">
              <div class="star-block" v-for="number in 5" :key="number">
                <div class="star" :style="{'width': number <= 4.42 ? '100%' : `${4.42 * 100 % 100}%`}">
                  <img src="images/full-star-icon.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="google-map-spot-images">
        <div
          class="google-map-spot-images__item"
          v-for="item in state.lightBoxImages.length > 5 ? 5 : state.lightBoxImages.length"
          :key="item"
          @click="showLightBox(item - 1)">
          <img :src="state.lightBoxImages[item - 1]" alt="">
        </div>
        <div
          v-if="state.lightBoxImages.length > 5"
          class="google-map-spot-images__item more"
          @click="showLightBox(5)">
          <img src="images/button-more-arrow-icon.svg" alt="">
        </div>
      </div>
      <div class="google-map-spot-comments-list">
        <div class="google-map-spot-comments-list__title">
          Comments
        </div>
        <div class="google-map-spot-comment">
          <div class="google-map-spot-comment__top-block">
            <div class="google-map-spot-comment__author-photo">
              <img src="images/google-map-spot-comment-author-photo-01.png" alt="">
            </div>
            <div class="google-map-spot-comment__top-block-inner">
              <div class="google-map-spot-comment__author-name">
                Mari Virton
              </div>
              <div class="google-map-spot-comment__rating">
                <div class="google-map-spot-comment__rating-stars empty">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star">
                      <img src="images/empty-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="google-map-spot-comment__rating-stars full">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star" :style="{'width': number <= 4.42 ? '100%' : `${4.42 * 100 % 100}%`}">
                      <img src="images/full-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="google-map-spot-comment__text">
            Lorem ipsum dolor sit amet consectetur. Quis urna diam varius aliquet ut venenatis mauris laoreet.
          </div>
        </div>
        <div class="google-map-spot-comment">
          <div class="google-map-spot-comment__top-block">
            <div class="google-map-spot-comment__author-photo">
              <img src="images/google-map-spot-comment-author-photo-02.png" alt="">
            </div>
            <div class="google-map-spot-comment__top-block-inner">
              <div class="google-map-spot-comment__author-name">
                Daniel Stonik
              </div>
              <div class="google-map-spot-comment__rating">
                <div class="google-map-spot-comment__rating-stars empty">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star">
                      <img src="images/empty-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="google-map-spot-comment__rating-stars full">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star" :style="{'width': number <= 4.42 ? '100%' : `${4.42 * 100 % 100}%`}">
                      <img src="images/full-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="google-map-spot-comment__text">
            Lorem ipsum dolor sit amet consectetur. Quis urna diam varius aliquet ut venenatis mauris laoreet.
          </div>
        </div>
        <div class="google-map-spot-comment">
          <div class="google-map-spot-comment__top-block">
            <div class="google-map-spot-comment__author-photo">
              <img src="images/google-map-spot-comment-author-photo-03.png" alt="">
            </div>
            <div class="google-map-spot-comment__top-block-inner">
              <div class="google-map-spot-comment__author-name">
                Mihael Petuch
              </div>
              <div class="google-map-spot-comment__rating">
                <div class="google-map-spot-comment__rating-stars empty">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star">
                      <img src="images/empty-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="google-map-spot-comment__rating-stars full">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star" :style="{'width': number <= 4.42 ? '100%' : `${4.42 * 100 % 100}%`}">
                      <img src="images/full-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="google-map-spot-comment__text">
            Lorem ipsum dolor sit amet consectetur. Quis urna diam varius aliquet ut venenatis mauris laoreet.
          </div>
        </div>
        <div class="google-map-spot-comment">
          <div class="google-map-spot-comment__top-block">
            <div class="google-map-spot-comment__author-photo">
              <img src="images/google-map-spot-comment-author-photo-01.png" alt="">
            </div>
            <div class="google-map-spot-comment__top-block-inner">
              <div class="google-map-spot-comment__author-name">
                Mari Virton
              </div>
              <div class="google-map-spot-comment__rating">
                <div class="google-map-spot-comment__rating-stars empty">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star">
                      <img src="images/empty-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="google-map-spot-comment__rating-stars full">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star" :style="{'width': number <= 4.42 ? '100%' : `${4.42 * 100 % 100}%`}">
                      <img src="images/full-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="google-map-spot-comment__text">
            Lorem ipsum dolor sit amet consectetur. Quis urna diam varius aliquet ut venenatis mauris laoreet.
          </div>
        </div>
        <div class="google-map-spot-comment">
          <div class="google-map-spot-comment__top-block">
            <div class="google-map-spot-comment__author-photo">
              <img src="images/google-map-spot-comment-author-photo-02.png" alt="">
            </div>
            <div class="google-map-spot-comment__top-block-inner">
              <div class="google-map-spot-comment__author-name">
                Daniel Stonik
              </div>
              <div class="google-map-spot-comment__rating">
                <div class="google-map-spot-comment__rating-stars empty">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star">
                      <img src="images/empty-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="google-map-spot-comment__rating-stars full">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star" :style="{'width': number <= 4.42 ? '100%' : `${4.42 * 100 % 100}%`}">
                      <img src="images/full-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="google-map-spot-comment__text">
            Lorem ipsum dolor sit amet consectetur. Quis urna diam varius aliquet ut venenatis mauris laoreet.
          </div>
        </div>
        <div class="google-map-spot-comment">
          <div class="google-map-spot-comment__top-block">
            <div class="google-map-spot-comment__author-photo">
              <img src="images/google-map-spot-comment-author-photo-03.png" alt="">
            </div>
            <div class="google-map-spot-comment__top-block-inner">
              <div class="google-map-spot-comment__author-name">
                Mihael Petuch
              </div>
              <div class="google-map-spot-comment__rating">
                <div class="google-map-spot-comment__rating-stars empty">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star">
                      <img src="images/empty-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="google-map-spot-comment__rating-stars full">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star" :style="{'width': number <= 4.42 ? '100%' : `${4.42 * 100 % 100}%`}">
                      <img src="images/full-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="google-map-spot-comment__text">
            Lorem ipsum dolor sit amet consectetur. Quis urna diam varius aliquet ut venenatis mauris laoreet.
          </div>
        </div>
        <div class="google-map-spot-comment">
          <div class="google-map-spot-comment__top-block">
            <div class="google-map-spot-comment__author-photo">
              <img src="images/google-map-spot-comment-author-photo-01.png" alt="">
            </div>
            <div class="google-map-spot-comment__top-block-inner">
              <div class="google-map-spot-comment__author-name">
                Mari Virton
              </div>
              <div class="google-map-spot-comment__rating">
                <div class="google-map-spot-comment__rating-stars empty">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star">
                      <img src="images/empty-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="google-map-spot-comment__rating-stars full">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star" :style="{'width': number <= 4.42 ? '100%' : `${4.42 * 100 % 100}%`}">
                      <img src="images/full-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="google-map-spot-comment__text">
            Lorem ipsum dolor sit amet consectetur. Quis urna diam varius aliquet ut venenatis mauris laoreet.
          </div>
        </div>
        <div class="google-map-spot-comment">
          <div class="google-map-spot-comment__top-block">
            <div class="google-map-spot-comment__author-photo">
              <img src="images/google-map-spot-comment-author-photo-02.png" alt="">
            </div>
            <div class="google-map-spot-comment__top-block-inner">
              <div class="google-map-spot-comment__author-name">
                Daniel Stonik
              </div>
              <div class="google-map-spot-comment__rating">
                <div class="google-map-spot-comment__rating-stars empty">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star">
                      <img src="images/empty-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="google-map-spot-comment__rating-stars full">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star" :style="{'width': number <= 4.42 ? '100%' : `${4.42 * 100 % 100}%`}">
                      <img src="images/full-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="google-map-spot-comment__text">
            Lorem ipsum dolor sit amet consectetur. Quis urna diam varius aliquet ut venenatis mauris laoreet.
          </div>
        </div>
        <div class="google-map-spot-comment">
          <div class="google-map-spot-comment__top-block">
            <div class="google-map-spot-comment__author-photo">
              <img src="images/google-map-spot-comment-author-photo-03.png" alt="">
            </div>
            <div class="google-map-spot-comment__top-block-inner">
              <div class="google-map-spot-comment__author-name">
                Mihael Petuch
              </div>
              <div class="google-map-spot-comment__rating">
                <div class="google-map-spot-comment__rating-stars empty">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star">
                      <img src="images/empty-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="google-map-spot-comment__rating-stars full">
                  <div class="star-block" v-for="number in 5" :key="number">
                    <div class="star" :style="{'width': number <= 4.42 ? '100%' : `${4.42 * 100 % 100}%`}">
                      <img src="images/full-star-icon.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="google-map-spot-comment__text">
            Lorem ipsum dolor sit amet consectetur. Quis urna diam varius aliquet ut venenatis mauris laoreet.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, onMounted } from 'vue';
import StringsHelper from '@/helpers/strings.helper';

declare let google: any;

export default defineComponent({
  name: 'GoogleMapWithAutocomplete',
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
      selectedLanguage: 'eng' as string,
      map: null,
      mapCenter: {
        lat: 49.842957,
        lng: 24.031111,
      },
      autocompleteInput: null,
      locationQuery: '' as string,
      value: '' as string,
      autocomplete: null,
      language: localStorage.getItem(StringsHelper.LANGUAGE_LS_KEY),
      isGoogleMapSpotModalVisible: false,
      lightBoxImages: [
        'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/247597/pexels-photo-247597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/358372/pexels-photo-358372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/547125/pexels-photo-547125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2364701/pexels-photo-2364701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/7753054/pexels-photo-7753054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2092828/pexels-photo-2092828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
      isLightBoxVisible: false,
      lightBoxCurrentIndex: 0,
    });

    const initMapWithAutocomplete = () => {
      const googleMapWatcherInterval = setInterval(() => {
        if (typeof google === 'object' && typeof google.maps === 'object') {
          clearInterval(googleMapWatcherInterval);
          map = new google.maps.Map(document.getElementById('google-map-iframe'), {
            center: state.mapCenter,
            zoom: 15,
            mapTypeControl: false,
            fullscreenControl: false,
          });

          autocompleteMarker = new google.maps.Marker({
            map,
            anchorPoint: new google.maps.Point(0, -29),
          });

          autocompleteInput = document.getElementById('autocomplete-input');
          const autocomplete = new google.maps.places.Autocomplete(autocompleteInput);
          autocomplete.setComponentRestrictions({
            country: ['ua'],
          });
          autocomplete.addListener('place_changed', () => {
            autocompleteMarker.setVisible(false);

            const place = autocomplete.getPlace();

            emit('place-changed', place);

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
              icon: 'https://iili.io/HWKjMvV.png',
              title: item.title,
              info: {
                title: item.title,
                lat: item.positionLat,
                lng: item.positionLng,
              },
            });
            marker.addListener('click', () => {
              console.log(marker.info);
              state.isGoogleMapSpotModalVisible = true;
            });
          });

          google.maps.event.addListener(map, 'bounds_changed', () => {
            const bounds = map.getBounds();
            const center = map.getCenter();
            if (bounds && center) {
              const ne = bounds.getNorthEast();
              const radius = google.maps.geometry.spherical.computeDistanceBetween(center, ne);
              emit('radius-changed', radius);
            }
          });
        }
      }, 100);
    };

    const showLightBox = (index) => {
      state.isLightBoxVisible = true;
      state.lightBoxCurrentIndex = index;
    };

    onMounted(() => {
      initMapWithAutocomplete();
    });

    watch(() => state.mapCenter.lat, () => {
      initMapWithAutocomplete();
    });

    return {
      state,
      showLightBox,
    };
  },
});
</script>

<style scoped lang="scss">
.vuelidate-form {
  width: 100%;
  max-width: 700px;
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media only screen and (min-width: 700px) {
    margin: 40px auto 0;
  }
}

.vuelidate-form__field {
  width: 100%;
  margin-bottom: 15px;

  @media only screen and (min-width: 700px) {
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 1200px) {
    margin-bottom: 30px;
  }
}

.vuelidate-form__button {
  width: 260px;
}
</style>
