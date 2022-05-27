<template>
  <div class="router-examples">
    <h1 class="page-title">Router Examples</h1>
    <div class="code-example-wrap">
      <div class="code-example__title">Router Init</div>
      <div class="code-example__description">
        Router init with dynamic page title
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import VueRouter from 'vue-router'
            import router from './routes'
            Vue.use(VueRouter)
            router.afterEach((to, from) => {
              Vue.nextTick( () => {
                document.title = to.name ? to.name : 'Default Page Title'
              })
            })
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title">Routes Structure</div>
      <div class="code-example__description">
        Creating routes structure in
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import VueRouter from 'vue-router'

            import HomePage from '@/components/pages/HomePage.vue'
            import Page404 from '@/components/pages/Page404.vue'
            import SinglePage from '@/components/pages/SinglePage.vue'

            import SubPage1 from '@/components/sub-pages/SubPage1.vue'
            import SubPage2 from '@/components/sub-pages/SubPage2.vue'
            import SubPage3 from '@/components/sub-pages/SubPage13.vue'

            export default new VueRouter({
              // mode: 'history',
              routes: [
                {
                  name: 'Home Page',
                  path: '/',
                  component: HomePage
                },
                {
                  name: 'Single Page',
                  path: `/single-page`,
                  component: SinglePage,
                  children: [
                    {
                      name: 'Sub Page 1',
                      path: 'sub-page-1',
                      component: SubPage1
                    },
                    {
                      name: 'Sub Page 2',
                      path: 'sub-page-2',
                      component: SubPage2
                    },
                    {
                      name: 'Sub Page 2',
                      path: 'sub-page-2',
                      component: SubPage2
                    }
                  ]
                },
                {
                  path: '*',
                  component: Page404
                }
              ],
              scrollBehavior (to, from, savedPosition) {
                if (savedPosition) {
                  return savedPosition
                } else {
                  return { x: 0, y: 0 }
                }
              }
            })
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title">Using Router Inside Vue Component</div>
      <div class="code-example__description">
        Redirect to another page
      </div>
      <div class="code-example">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
              <router-link :to="/single-page/sub-page">
                Go To Sub Page
              </router-link>
            </script>
          </code>
        </pre>
        <pre>
          <code class="language-javascript">
            this.$router.push(`/single-page/sub-page`)
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Redirect to previous page
      </div>
      <div class="code-example">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
              <div class="back-button" @click="$router.go(-1)">
                Go Back
              </div>
            </script>
          </code>
        </pre>
        <pre>
          <code class="language-javascript">
            this.$router.go(-1)
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Get route params and queries
      </div>
      <div class="code-example">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
              // path: `/single-page/sub-page/:number` (from routes path)
              // link - http://single-page/sub-page/3

              <div v-if="$route.params.number === 3">
                Third block
              </div>

              // link - http://single-page/sub-page?number=3
              <div v-if="$route.query.number === 5">
                Fifth block
              </div>
            </script>
          </code>
        </pre>
        <pre>
          <code class="language-javascript">
            this.$route.params.paramsName
            this.$route.query.queryName
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Use @click action on router link
      </div>
      <div class="code-example">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
              <router-link :to="/some-page" @click.native="scrollToTop">
                Go To Some Page
              </router-link>
            </script>
          </code>
        </pre>
        <pre>
          <code class="language-javascript">
            scrollToTop() {
              setTimeout(() => {
                window.scrollTo(0,0)
              }, 1)
            }
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import PrismApiHelper from '@/api-helpers/prism.api-helper'

export default {
  name: 'RouterExamples',
  props: [],
  components: {},
  computed: {

  },
  methods: {

  },
  mounted() {
    PrismApiHelper.initPrism()
  },
  watch: {

  }
}
</script>

<style scoped lang="scss">

</style>
