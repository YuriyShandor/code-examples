<template>
  <div class="vuex-examples">
    <h1 class="page-title">JavaScript Arrays Examples</h1>
    <div class="code-example-wrap">
      <div class="code-example__title">Arrays Methods</div>
      <div class="code-example__description">
        The <strong>forEach()</strong> method executes a provided function once for each array element.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            months.forEach(month => console.log(month))
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        The <strong>map()</strong> method creates a new array populated with the results of calling a provided function on every element in the calling array.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let numbers = [43, -36, -67, -67, -83, 19, 43, 4, -70, 17]
            let doubleNumbers = numbers.map(number => number * 2)
            console.log(doubleNumbers)
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        The <strong>reduce()</strong> method executes a <strong>reducer</strong> function (that you provide) on each element of the array, resulting in a single output value.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let numbers = [34, 6, 36, -20, -54, 41, -8, -36, 64, 26]
            let numbersSum = numbers.reduce((sum, number) => sum + number)
            console.log(numbersSum)
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
  name: 'JavaScriptArraysExamples',
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

    let numbers = [34, 6, 36, -20, -54, 41, -8, -36, 64, 26]
    let numbersSum = numbers.reduce((sum, number) => sum + number)
    console.log(numbersSum)
  },
  watch: {

  }
}
</script>

<style scoped lang="scss">

</style>