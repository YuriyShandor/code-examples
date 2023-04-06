<template>
  <div class="code-example-block">
    <div class="code-example__title">
      Switcher Component
    </div>
    <a
      href="https://github.com/YuriyShandor/code-examples/tree/vue3-with-typescript/src/components/ui-elements/other/checkbox"
      target="_blank"
      class="button code-example__button">
      Watch Code on GitHub
      <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
    </a>
    <div class="code-example__description">
      Simple using of the switcher component
    </div>
    <div class="code-example__result">
      <SwitcherComponent
        :label="`Is switcher checked: ${state.isSimpleSwitcherChecked}`"
        v-model:value="state.isSimpleSwitcherChecked"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import SwitcherComponent from '@/components/ui-elements/other/switcher/SwitcherComponent.vue';

export default defineComponent({
  name: 'SwitcherExamples',
  components: {
    SwitcherComponent,
  },
  setup() {
    const state = reactive({
      isSimpleSwitcherChecked: false as boolean,
    });

    return {
      state,
    };
  },
});
</script>
