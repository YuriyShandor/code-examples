<template>
  <div class="java-script-general-examples">
    <h1 class="page-title">
      JavaScript General Examples
    </h1>
    <div class="code-example-wrap">
      <div class="code-example__title">
        Url Query Params
      </div>
      <div class="code-example__description">
        Converting object with params to query string
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let queryParamsObj = {
              firstName: 'John',
              lastName: 'Wick',
              profession: 'killer'
            }
            const paramsToQueryString = (params) => {
              let queryParamsString = ''
              if (params !== undefined && Object.keys(params).length) {
                let isFistIteration = true
                Object.keys(params).forEach((key) => {
                  queryParamsString += (isFistIteration ? '?' : '&') + key + '=' + params[key]
                  isFistIteration = false
                })
              }
              return queryParamsString
            }
            console.log(paramsToQueryString(queryParamsObj))
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title">
        Scroll Helpers Functions
      </div>
      <div class="code-example__description">
        Disabling and enabling scroll with saving scroll position
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let scrollYPosition = 0
            let body = document.querySelector('body')

            const disableScroll = () => {
              let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
              scrollYPosition = window.pageYOffset
              body.style.overflow = 'hidden'
              body.style.position = 'fixed'
              body.style.top = `-${scrollYPosition}px`
              body.style.width = '100%'
              body.style.paddingRight = `${scrollBarWidth}px`
            }

            const enableScroll = () => {
              body.style.removeProperty('overflow')
              body.style.removeProperty('position')
              body.style.removeProperty('top')
              body.style.removeProperty('width')
              body.style.removeProperty('padding-right')
              window.scrollTo(0, scrollYPosition)
            }
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrismApiHelper from '@/helpers/prism.helper';
import { onMounted } from 'vue';

onMounted(() => {
  PrismApiHelper.initPrism();
});
</script>
