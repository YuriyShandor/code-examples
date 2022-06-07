<template>
  <div class="java-script-arrays-examples">
    <h1 class="page-title">TypeScript General Examples</h1>
    <div class="code-example-block">
      <div class="code-example__title">Type Inference in TypeScript</div>
      <div class="code-example__description">
        Using interface for a simple object and for reactive state.
      </div>
      <div class="code-example">
        <img src="/images/typescript/using-interface-in-typescript-01.png" alt="" class="code-example__image">
        <img src="/images/typescript/using-interface-in-typescript-02.png" alt="" class="code-example__image">
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
        <img src="/images/typescript/using-interface-in-typescript-01.png" alt="" class="code-example__image">
        <img src="/images/typescript/using-interface-in-typescript-02.png" alt="" class="code-example__image">
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

export default defineComponent({
  name: 'TypeScriptExamples',
  setup() {
    onMounted(() => {
      TypeScriptHelper.showDifferentVars();
    });
  },
});
</script>

<style scoped lang="scss">

</style>
