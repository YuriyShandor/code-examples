<template>
  <div class="java-script-arrays-examples">
    <h1 class="page-title">JavaScript Arrays Examples</h1>
    <div class="code-example-wrap">
      <div class="code-example__title">Arrays Methods</div>
      <div class="code-example__description">
        The <strong>forEach()</strong> method executes a provided function once for each array element.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let numbers = [81, -74, -56, 52, -48, 63, -56, 93, -3, -58]
            numbers.forEach(number => console.log(number))
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
      <div class="code-example__description">
        The <strong>filter()</strong> method <strong>creates a new array</strong> with all elements that pass the test implemented by the provided function.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let numbers = [75, 4, -7, 58, -54, -76, 25, 34, -89, -2]
            let positiveNumbers = numbers.filter(number => number > 0)
            console.log(positiveNumbers)
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        The <strong>some()</strong> method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let numbers = [94, 98, 14, -91, -98, -7, -50, 20, -88, -9]
            let isNumbersHasNegativeNumber = numbers.some(number => number < 0)
            console.log(isNumbersHasNegativeNumber)
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        The <strong>every()</strong> method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let numbers = [95, 36, -53, -67, -34, 42, -39, -51, -59, 1]
            let allNumbersAreNegative = numbers.every(number => number < 0)
            console.log(allNumbersAreNegative)
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        The <strong>findIndex()</strong> method returns the <strong>index</strong> of the first element in the array <strong>that satisfies the provided testing function</strong>. Otherwise, it returns -1, indicating that no element passed the test.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let numbers = [42, -44, -32, -87, 51, -65, 26, 36, 65, 73]
            let indexOfFirstPositiveNumber = numbers.findIndex(number => number > 0)
            console.log(indexOfFirstPositiveNumber)
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        The <strong>includes()</strong> method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let numbers = [74, 42, 99, 3, 53, 90, -91, 85, 12, -25]
            let numbersIncludeNumberTwo = numbers.includes(2)
            console.log(numbersIncludeNumberTwo)
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        The <strong>splice()</strong> method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            const months = ['Jan', 'March', 'April', 'May']
            months.splice(1, 0, 'Feb')
            console.log(months)
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import PrismApiHelper from '@/api-helpers/prism.api-helper'

export default {
  name: 'JavaScriptArraysExamples',
  mounted() {
    PrismApiHelper.initPrism()
  }
}
</script>

<style scoped lang="scss">

</style>