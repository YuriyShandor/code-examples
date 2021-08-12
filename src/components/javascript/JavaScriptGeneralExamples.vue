<template>
  <div class="vuex-examples">
    <h1 class="page-title">JavaScript General Examples</h1>
    <div class="code-example-wrap">
      <div class="code-example__title">Random Elements</div>
      <div class="code-example__description">
        Random number between two numbers
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            const generateRandomInteger = (min, max) => {
              return Math.floor(min + Math.random() * (max + 1 - min))
            }
            console.log(generateRandomInteger(1, 10))
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Random 10 numbers between two numbers
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            const generateRandomInteger = (min, max) => {
              return Math.floor(min + Math.random() * (max + 1 - min))
            }
            let randomNumbers = []
            for(let i = 0; i < 10; i++) {
              randomNumbers.push(generateRandomInteger(-100, 100))
            }
            console.log(randomNumbers)
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
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-scss'

export default {
  name: 'JavaScriptGeneralExamples',
  props: [],
  components: {},
  computed: {

  },
  methods: {

  },
  mounted() {
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()

    const generateRandomInteger = (min, max) => {
      return Math.floor(min + Math.random() * (max + 1 - min))
    }
    let randomNumbers = []
    for(let i = 0; i < 10; i++) {
      randomNumbers.push(generateRandomInteger(-100, 100))
    }
    console.log(randomNumbers)
  },
  watch: {

  }
}
</script>

<style scoped lang="scss">

</style>