<template>
  <div class="vuex-examples">
    <h1 class="page-title">Vuex Examples</h1>
    <div class="code-example-wrap">
      <div class="code-example__title">Single Vuex Variable Init</div>
      <div class="code-example__description">
        Single init of store, getter, setter and action.
      </div>
      <div class="code-example">

      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
      <pre><code class="language-javascript">
        methods: {
          sortedSubscriptionsList(statusSubscriptions) {
            return _.orderBy(statusSubscriptions, ['with_box', 'dateCreated'], ['desc', 'desc'])
          },

          changeCancellationModalVisibility(value) {
            this.isCancellationModalVisible = value
          },

          checkIfUserDontHaveSubscriptions() {
            let hello = 'Hello World'
            if(this.subscriptionsList !== undefined && this.subscriptionsList.length === 0) {
              this.userDontHaveSubscriptions = true
            }
          }
        },
        mounted() {
          if (this.subscriptionList === undefined) {
            this.$store.dispatch('SET_SUBSCRIPTION_LIST', ConstantService.insightlyid)
          }

          this.checkIfUserDontHaveSubscriptions()
        }
      </code></pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre><code class="language-markup">
          <script type="prism-html-markup">
            <div class="manage-subscription__create-first-subscription" v-if="userDontHaveSubscriptions">
              <img class="manage-subscription__create-first-subscription-img"
                :src="imagePath + '/images/vue-subscription-cabinet/settings/manage-subscription-is-empty.png'" alt="">
              <div class="manage-subscription__create-first-subscription_content-wrap">
                <div class="manage-subscription__create-first-subscription-ttl">
                  Get more opportunity
                </div>
                <router-link to="/app/purchase"
                  class="manage-subscription__create-first-subscription-btn">
                  Create First Subscription
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path d="M1.57031 6.78906L12.1328 6.78906" stroke="white" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                      <path d="M6.85156 1.50586V12.0684" stroke="white" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="13" height="13" fill="white" transform="translate(0.234375 0.5)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </router-link>
              </div>
            </div>
          </script>
        </code></pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
      <pre><code class="language-scss">
        // code here for example
        span {
          position: relative;
          display: block;
          width: 100%;
          height: 2px;
          background-color: $secondary-text-color;
          backface-visibility: hidden;
          border-radius: 2px !important;
          transition: all, .25s;

          &:before, &:after  {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: $secondary-text-color;
            backface-visibility: hidden;
            border-radius: 2px;
            transition: all, .25s;
          }

          &:before {
            top: 9px;
          }

          &:after {
            top: 18px;
          }
        }
        .manage-subscription__create-subscription {
          height: 150px;
          background: #F2EDE7;
          box-shadow: 0 40px 90px rgba(179, 179, 179, 0.2);
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          margin-bottom: 43px;
          padding: 10px 20px;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;

          @media only screen and (min-width: 760px) {
            align-items: center;
            justify-content: flex-end;
            padding: 10px 30px;
            height: 121px;
          }
        }
      </code></pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">

      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">

      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">

      </div>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-scss'

export default {
  name: 'VuexExamples',
  components: {},
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll();
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