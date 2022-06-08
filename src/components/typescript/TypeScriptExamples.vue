<template>
  <div class="java-script-arrays-examples">
    <h1 class="page-title">TypeScript General Examples</h1>
    <div class="code-example-block">
      <div class="code-example__title">Inference in TypeScript</div>
      <div class="code-example__description">
        Inference for a simple object and for reactive state.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import { defineComponent, onMounted, reactive } from 'vue';
            export default defineComponent({
              name: 'TypeScriptInterface',
              setup() {
                interface Book {
                  title: string;
                  year: number;
                }

                const bookObj: Book = {
                  title: 'Vue 3 Guide',
                  year: 2022,
                };

                const state: Book = reactive({
                  title: 'Vue 3 Guide',
                  year: 2022,
                });

                onMounted(() => {
                  console.log(state);
                  console.log(bookObj);
                });

                return {
                  state,
                  bookObj,
                };
              },
            });
          </code>
        </pre>
      </div>
      <a
        href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/typescript/components/TypeScriptInterface.vue"
        target="_blank"
        class="button code-example__button">
        Watch on GitHub
        <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
      </a>
    </div>
    <div class="code-example-block">
      <div class="code-example__title">Type Inference in TypeScript</div>
      <div class="code-example__description">
        Using interface for a simple object and for reactive state.
      </div>
      <div class="code-example">
       <pre>
          <code class="language-javascript">
            export var pi: number = 3.14;
            export let squareTwo: number = 1.41;
            export const phi: number = 1.61;
            export class RandomNumberGenerator {}
            export function absolute(num: number): number {
              if (num &lt; 0) return num * -1;
              return num;
            }
          </code>
        </pre>
      </div>
      <a
        href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/typescript/components/TypeScriptInterface.vue"
        target="_blank"
        class="button code-example__button">
        Watch on GitHub
        <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import TypeScriptHelper from '@/helpers/typescript/typescript.helper';
import PrismApiHelper from '@/helpers/prism.helper';

export default defineComponent({
  name: 'TypeScriptExamples',
  setup() {
    onMounted(() => {
      TypeScriptHelper.showDifferentVars();
      PrismApiHelper.initPrism();
    });
  },
});
</script>

<style scoped lang="scss">

</style>
