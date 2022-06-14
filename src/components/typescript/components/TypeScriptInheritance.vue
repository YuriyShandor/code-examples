<template>
  <div class="java-script-arrays-examples">
    <h1 class="page-title">Inheritance Examples</h1>
    <div class="code-example-block">
      <div class="code-example__title">Inheritance in TypeScript</div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
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

<script setup lang="ts">
import { onMounted } from 'vue';
import TypeScriptHelper from '@/helpers/typescript/typescript.helper';

onMounted(() => {
  // TypeScriptHelper.showDifferentVars();
  TypeScriptHelper.implementClass();
});
</script>
