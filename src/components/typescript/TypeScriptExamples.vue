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
      <div class="code-example__title">Class in TypeScript</div>
      <div class="code-example__description">
        Simple classes in TypeScript
      </div>
      <div class="code-example">
       <pre>
          <code class="language-javascript">
            class Car {
              name: string;

              constructor(name: string) {
                this.name = name;
              }

              run(speed:number = 0) {
                console.log(`A ${this.name} from is moving at ${speed} mph!`);
              }
            }

            class Mercedes extends Car {
              year: number;

              constructor(name: string, year: number) {
                super(name);
                this.year = year;
              }

              created() {
                console.log(`A ${this.name} was created in ${this.year}`);
              }

              run(speed = 150) {
                console.log('A Mercedes started');
                super.run(speed);
              }
            }

            class Honda extends Car {
              country: string;

              constructor(name: string, country: string) {
                super(name);
                this.country = country;
              }

              countryOfOrigin() {
                console.log(`A country of origin for ${this.name} is ${this.country}`);
              }

              run(speed = 100) {
                console.log('A Honda started');
                super.run(speed);
              }
            }
            const mercObj = new Mercedes('Mercedes-Benz GLA', 2000);
            const hondaObj = new Honda('Honda City', 'Japan');

            mercObj.run();
            mercObj.created();
            hondaObj.run();
            hondaObj.countryOfOrigin();
          </code>
        </pre>
      </div>
      <a
        href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/helpers/typescript/typescript.helper.ts"
        target="_blank"
        class="button code-example__button">
        Watch on GitHub
        <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import TypeScriptHelper from '@/helpers/typescript/typescript.helper';

onMounted(() => {
  // TypeScriptHelper.showDifferentVars();
  TypeScriptHelper.implementClass();
});
</script>
