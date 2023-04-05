<template>
  <div class="code-example-block">
    <div class="code-example__title">
      Checkboxes Components
    </div>
    <a
      href="https://github.com/YuriyShandor/code-examples/tree/vue3-with-typescript/src/components/ui-elements/other/checkboxes/"
      target="_blank"
      class="button code-example__button">
      Watch Code on GitHub
      <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
    </a>
    <div class="code-example__description">
      Use component as single checkbox
    </div>
    <div class="code-example__result">
      <CheckboxWithoutInput
        id="checkbox-without-input"
        :label="`Is single checkbox checked: ${state.isSingleCheckboxChecked}`"
        v-model:isChecked="state.isSingleCheckboxChecked"
        class="checkbox-block"
      />
    </div>
    <div class="code-example__description">
      Use component in the group selection
    </div>
    <div class="code-example__result">
      <CheckboxWithoutInput
        v-for="option in state.checkboxOptionsList"
        :key="option.value"
        :id="option.value"
        :label="option.label"
        :isChecked="state.selectedGroupOptions.length > 0 && state.selectedGroupOptions.some((item) => item.value === option.value)"
        @update:isChecked="selectGroupOption(option, $event)"
        class="checkbox-block"
      />
      <CheckboxWithoutInput
        :id="selectAllCheckboxOption.value"
        :label="selectAllCheckboxOption.label"
        :isChecked="state.selectedGroupOptions.length > 0 && state.selectedGroupOptions.some((item) => item.value === selectAllCheckboxOption.value)"
        @update:isChecked="selectGroupOption(selectAllCheckboxOption, $event)"
        class="checkbox-block"
      />
      <div class="selected-group-options">
        <div>Selected group options: {{ state.selectedGroupOptionsLabelsStr }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import CheckboxWithoutInput from '@/components/ui-elements/other/checkbox/CheckboxWithoutInput.vue';
import { CheckboxOptionsObject } from '@/types';

export default defineComponent({
  name: 'CheckboxExamples',
  components: {
    CheckboxWithoutInput,
  },
  setup() {
    const state = reactive({
      isSingleCheckboxChecked: false as boolean,
      checkboxOptionsList: [] as Array<CheckboxOptionsObject>,
      selectedGroupOptions: [] as Array<CheckboxOptionsObject>,
      selectedGroupOptionsLabelsStr: '' as string,
    });

    const selectAllCheckboxOption: CheckboxOptionsObject = {
      value: 'select-all',
      label: 'Select All',
    };

    const selectGroupOption = (option, checked) => {
      if (checked) {
        if (option.value === selectAllCheckboxOption.value) {
          state.selectedGroupOptions = [];
          state.checkboxOptionsList.forEach((item) => {
            state.selectedGroupOptions.push(item);
          });
          state.selectedGroupOptions.push(selectAllCheckboxOption);
        } else {
          state.selectedGroupOptions.push(option);
        }
      } else if (option.value === selectAllCheckboxOption.value) {
        state.selectedGroupOptions = [];
      } else {
        state.selectedGroupOptions.splice(state.selectedGroupOptions.indexOf(option), 1);
      }

      const selectedGroupOptionsLabelsArr = [];
      state.selectedGroupOptions.forEach((item) => {
        if (item.value !== selectAllCheckboxOption.value) {
          selectedGroupOptionsLabelsArr.push(item);
        }
      });

      state.selectedGroupOptionsLabelsStr = '';
      selectedGroupOptionsLabelsArr.forEach((item, index) => {
        state.selectedGroupOptionsLabelsStr += item.label;

        if (index + 1 < selectedGroupOptionsLabelsArr.length) {
          state.selectedGroupOptionsLabelsStr += ', ';
        } else {
          state.selectedGroupOptionsLabelsStr += '.';
        }
      });
    };

    onMounted(() => {
      for (let i = 1; i <= 7; i++) {
        state.checkboxOptionsList.push({
          value: `option-0${i}`,
          label: `Option 0${i}`,
        });
      }
    });

    return {
      state,
      selectAllCheckboxOption,
      selectGroupOption,
    };
  },
});
</script>

<style scoped lang="scss">
.selected-group-options {
  margin-top: 10px;
  div {
    display: inline;
  }
}
</style>
