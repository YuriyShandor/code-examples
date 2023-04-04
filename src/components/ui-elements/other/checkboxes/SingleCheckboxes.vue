<template>
  <div class="code-example-block">
    <div class="code-example__title">
      Single Checkbox Component
    </div>
    <div class="code-example__description">
      Single checkbox component without input
    </div>
    <a
      href="https://github.com/YuriyShandor/code-examples/tree/vue3-with-typescript/src/components/ui-elements/other/components/SingleCheckboxComponent.vue"
      target="_blank"
      class="button code-example__button">
      Watch Code on GitHub
      <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
    </a>
    <div class="code-example__block">
      <CheckboxWithoutInput
        id="checkbox-without-input"
        label="I agree to the terms and conditions"
        :checkboxValue="state.checkboxWithoutInputValue"
        @update-checkbox-without-input="updateCheckboxWithoutInput"
        class="checkbox-block"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import CheckboxWithoutInput from '@/components/ui-elements/other/checkboxes/CheckboxWithoutInput.vue';

export default defineComponent({
  name: 'SingleCheckboxes',
  components: {
    CheckboxWithoutInput,
  },
  setup() {
    const state = reactive({
      checkboxWithoutInputValue: false as boolean,
    });

    const updateCheckboxWithoutInput = (value: boolean) => {
      state.checkboxWithoutInputValue = value;
      console.log('checkboxWithoutInputValue: ', state.checkboxWithoutInputValue);
    };

    return {
      state,
      updateCheckboxWithoutInput,
    };
  },
});
</script>

<style scoped lang="scss">
.checkbox-block-wrapper {

}
</style>
