<template>
  <div class="java-script-arrays-examples">
    <h1 class="page-title">Interface in TypeScript</h1>
    <div class="code-example-block">
      <div class="code-example__title">Interface in TypeScript</div>
      <div class="code-example__description">
        We can use interfaces to define the types of properties of objects.
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

                interface IParams {
                  [key: string]: (string | number | boolean);
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
        href="https://github.com/YuriyShandor/code-examples/blob/vue3-with-typescript/src/components/typescript/TypeScriptInterface.vue"
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

export default defineComponent({
  name: 'TypeScriptInterface',
  setup() {
    interface Book {
      title: string;
      year: number;
    }

    interface IParams {
      [key: string]: (string | number | boolean);
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
      console.log('Interface in TypeScript');
      // console.log(state);
      // console.log(bookObj);
    });

    return {
      state,
      bookObj,
    };
  },
});
</script>
