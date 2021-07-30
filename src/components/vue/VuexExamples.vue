<template>
  <div class="vuex-examples">
    <h1 class="page-title">Vuex Examples</h1>
    <div class="code-example-wrap">
      <div class="code-example__title">Single Vuex Variable Init</div>
      <div class="code-example__description">
        Single init of store, getter, setter and action.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            export default {
              state: {
                exampleText: ''
              },
              getters: {
                GET_EXAMPLE_TEXT: state => {
                  return state.exampleText
                }
              },
              mutations: {
                SET_EXAMPLE_TEXT: (state, payload) => {
                  state.exampleText = payload
                }
              },
              actions: {
                SET_EXAMPLE_TEXT: (context, payload) => {
                  context.commit('SET_EXAMPLE_TEXT', payload)
                }
              }
            }
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
      <pre><code class="language-javascript">

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