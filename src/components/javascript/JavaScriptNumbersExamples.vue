<template>
  <div class="java-script-general-examples">
    <h1 class="page-title">
      JavaScript Numbers Examples
    </h1>
    <div class="code-example-block">
      <div class="code-example__title">
        Random Numbers
      </div>
      <div class="code-example__description">
        Random number between two numbers
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            const generateRandomInteger = (min: number, max: number): number => Math.floor(min + Math.random() * (max + 1 - min));
            console.log(generateRandomInteger(1, 10));
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Random 10 numbers between two numbers
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            const getXRandomNumbersBetweenTwoNumbers = (numbersQty: number, fromNumber: number, toNumber: number): number[] => {
              const generateRandomInteger = (min: number, max: number) => Math.floor(min + Math.random() * (max + 1 - min));
              const randomNumbers: number[] = [];
              for (let i = 0; i &lt; numbersQty; i++) {
                randomNumbers.push(generateRandomInteger(fromNumber, toNumber));
              }
              return randomNumbers;
            };
            console.log(getXRandomNumbersBetweenTwoNumbers(10, -100, 100));
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-block">
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
    <div class="code-example-block">
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
import { onMounted } from 'vue';

onMounted(() => {
  console.log('JavaScript Numbers Examples');

  const getRoundingNumbers = (number: number, decimalPlaces: number): number => +(`${Math.round(number + `e+${decimalPlaces}`)}e-${decimalPlaces}`);
  console.log(getRoundingNumbers(0.5618744, 2));
});
</script>
