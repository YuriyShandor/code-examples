<template>
  <div class="modals-examples">
    <h1 class="page-title">Other UI Examples</h1>
    <div class="code-example-block">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example__block">
        <CheckboxBlock
          id="checkbox-value"
          label="Remember Me"
          :checkboxValue="state.checkboxValue"
          @update-checkbox-value="updateCheckboxValue"
          class="checkbox-block"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CheckboxBlock from '@/components/ui-elements/other/components/CheckboxBlock.vue';
import { reactive } from 'vue';

export default {
  name: 'OtherUiElementsExamples',
  components: {
    CheckboxBlock,
  },
  setup() {
    const state = reactive({
      checkboxValue: false as boolean,
    });

    const updateCheckboxValue = (value: boolean) => {
      state.checkboxValue = value;
    };

    return {
      state,
      updateCheckboxValue,
    };
  },
};
</script>

<style scoped lang="scss">

</style>
