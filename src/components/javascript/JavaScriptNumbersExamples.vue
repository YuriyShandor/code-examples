<template>
  <div class="java-script-general-examples">
    <h1 class="page-title">
      JavaScript Numbers Examples
    </h1>
    <div class="code-example-wrap">
      <div class="code-example__title">
        Random Numbers
      </div>
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
      <div class="code-example__title">
        Rounding Numbers
      </div>
      <div class="code-example__description">
        Rounding numbers to decimal places
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            const getRoundingNumbers = (number, decimalPlaces) => {
              return +(Math.round(number + `e+${decimalPlaces}`)  + `e-${decimalPlaces}`);
            }
            console.log(getRoundingNumbers(0.5618744, 2))
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
  name: 'JavaScriptNumbersExamples',
  mounted() {
    PrismApiHelper.initPrism()

    const getRoundingNumbers = (number, decimalPlaces) => {
      return +(Math.round(number + `e+${decimalPlaces}`)  + `e-${decimalPlaces}`);
    }
    console.log(getRoundingNumbers(2, 3))
  },
  watch: {

  }
}
</script>

<style scoped lang="scss">

</style>