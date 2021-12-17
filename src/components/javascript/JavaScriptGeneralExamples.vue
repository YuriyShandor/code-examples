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

<script>/* eslint-disable */
import PrismApiHelper from '@/api-helpers/prism.api-helper'

export default {
  name: 'JavaScriptGeneralExamples',
  mounted() {
    PrismApiHelper.initPrism()

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
  },
  watch: {

  }
}
</script>

<style scoped lang="scss">

</style>