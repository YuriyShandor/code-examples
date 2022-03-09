<template>
  <div class="code-example-wrap">
    <div class="code-example__title">
      Simple Modal With Animation
    </div>
    <div class="code-example__description">
      Simple modal with animation and blurred overlay
    </div>
    <div class="code-example__block">
      <div class="simple-modal-block">
        <div class="button" @click="openSimpleModal">
          Open Modal
        </div>
        <div class="simple-modal-wrap" :class="{'visible': isSimpleModalVisible}">
          <div class="simple-modal__overlay" @click="closeSimpleModal"></div>
          <div class="simple-modal">
            <div class="simple-modal__close-button" @click="closeSimpleModal">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.9999 1.35556L1.00132 23.3542" stroke="#553F3F" stroke-width="2" stroke-linecap="round"/>
                <path d="M22.9999 23.3554L1.00132 1.35678" stroke="#553F3F" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="simple-modal__content">
              <img
                v-for="image in riversImages"
                :src="image.largeImageURL" :key="image.id"
                alt="" class="simple-modal__image">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="code-example">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
            <div class="simple-modal-block">
              <div class="button" @click="openSimpleModal">
                Open Modal
              </div>
              <div class="simple-modal-wrap" v-if="isSimpleModalVisible">
                <div class="simple-modal__overlay" @click="closeSimpleModal"></div>
                <vue100vh
                  class="simple-modal"
                  :css="{ height: '90rvh' }">
                  <div class="simple-modal__close-button" @click="closeSimpleModal">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.9999 1.35556L1.00132 23.3542" stroke="#553F3F" stroke-width="2" stroke-linecap="round"/>
                      <path d="M22.9999 23.3554L1.00132 1.35678" stroke="#553F3F" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <div class="simple-modal__content">
                    <img
                      v-for="image in riversImages"
                      :src="image.largeImageURL" :key="image.id"
                      alt="" class="simple-modal__image">
                  </div>
                </vue100vh>
              </div>
            </div>
            </script>
          </code>
          <code class="language-javascript">
            import PixabayApiHelper from '@/api-helpers/pixabay.api-helper'
            import vue100vh from 'vue-100vh'
            import ScrollHelper from '@/helpers/scroll.helper'

            export default {
              name: 'SimpleModal',
              components: {
                vue100vh
              },
              data() {
                return {
                  isSimpleModalVisible: false,
                  riversImages: []
                }
              },
              methods: {
                openSimpleModal() {
                  this.isSimpleModalVisible = true
                  ScrollHelper.disableScroll()
                },

                closeSimpleModal() {
                  this.isSimpleModalVisible = false
                  ScrollHelper.enableScroll()
                }
              },
              mounted() {
                PixabayApiHelper.getImages('rivers', 10).then(({ data }) => {
                  if(data.hits.length > 0) {
                    data.hits.forEach(image => {
                      this.riversImages.push(image)
                    })
                  }
                })
              }
            }
          </code>
          <code class="language-scss">
            .simple-modal-block {
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
            }

            .simple-modal-wrap {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 1001;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all, .25s;
            }

            .simple-modal__overlay {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background: #413030;
              opacity: 0.3;
            }

            .simple-modal {
              width: calc(100% - 20px);
              max-width: 500px;
              max-height: 600px;
              margin: 0 auto;
              position: relative;
              z-index: 1;
              background: #FFFFFF;
              box-shadow: 0 40px 90px rgba(179, 179, 179, 0.2);
              border-radius: 20px;
              overflow: hidden;
            }

            .simple-modal__close-button {
              position: absolute;
              z-index: 10;
              top: 15px;
              right: 15px;
              cursor: pointer;
              width: 30px;
              height: 30px;
              background: #F7F4F0;
              border-radius: 7px;
              display: flex;
              align-items: center;
              justify-content: center;
              -webkit-tap-highlight-color: transparent;
              transition: all, .25s;

              svg {
                display: block;
                width: 16px;
                height: auto;

                path {
                  stroke: #553F3F;
                  transition: all, .25s;
                }
              }

              &:hover {
                background: darken(#F7F4F0, 7%);

                svg path {
                  stroke: #FF7A74;
                }
              }
            }

            .simple-modal__content {
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;

              &::-webkit-scrollbar {
                display: block;
                width: 4px;
                background-color: #DFDFDF;
              }

              &::-webkit-scrollbar-thumb {
                display: block;
                background: #212121;
                border-radius: 7px;
                cursor: pointer;
              }
            }

            .simple-modal__image {
              display: block;
              width: 100%;
              height: auto;
            }
          </code>
        </pre>
    </div>
  </div>

</template>

<script>/* eslint-disable */
import PixabayApiHelper from '@/api-helpers/pixabay.api-helper'
import vue100vh from 'vue-100vh'
import ScrollHelper from '@/helpers/scroll.helper'

export default {
  name: 'SimpleModalWithAnimation',
  components: {
    vue100vh
  },
  data() {
    return {
      isSimpleModalVisible: false,
      riversImages: []
    }
  },
  methods: {
    openSimpleModal() {
      this.isSimpleModalVisible = true
      ScrollHelper.disableScroll()
    },

    closeSimpleModal() {
      this.isSimpleModalVisible = false
      ScrollHelper.enableScroll()
    }
  },
  mounted() {
    PixabayApiHelper.getImages('ukraine lakes', 10).then(({ data }) => {
      if(data.hits.length > 0) {
        data.hits.forEach(image => {
          this.riversImages.push(image)
        })
      }
    })
  }
}
</script>

<style scoped lang="scss">
.simple-modal-block {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.simple-modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  -webkit-tap-highlight-color: transparent;
  transition: all, .25s;

  &.visible {
    opacity: 1;
    pointer-events: auto;

    .simple-modal {
      transform: translateX(0);
    }
  }
}

.simple-modal__overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.85;
  background-color: rgba(255, 255, 255, .5);
  -webkit-backdrop-filter: blur(2em);
  backdrop-filter: blur(2em);
}

.simple-modal {
  width: calc(100% - 20px);
  max-width: 500px;
  height: 90vh;
  max-height: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  transform: translateX(100vw);
  -webkit-tap-highlight-color: transparent;
  transition: all, .5s;
}

.simple-modal__close-button {
  position: absolute;
  z-index: 10;
  top: 15px;
  right: 15px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background: #F7F4F0;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  transition: all, .25s;

  svg {
    display: block;
    width: 16px;
    height: auto;

    path {
      stroke: #553F3F;
      transition: all, .25s;
    }
  }

  &:hover {
    background: darken(#F7F4F0, 7%);

    svg path {
      stroke: #FF7A74;
    }
  }
}

.simple-modal__content {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: block;
    width: 4px;
    background-color: #DFDFDF;
  }

  &::-webkit-scrollbar-thumb {
    display: block;
    background: #212121;
    border-radius: 7px;
    cursor: pointer;
  }
}

.simple-modal__image {
  display: block;
  width: 100%;
  height: auto;
}
</style>