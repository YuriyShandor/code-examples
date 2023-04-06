<template>
  <div class="code-example-block">
    <div class="code-example__title">
      Radio Button Component
    </div>
    <a
      href="https://github.com/YuriyShandor/code-examples/tree/vue3-with-typescript/src/components/ui-elements/other/radio-button"
      target="_blank"
      class="button code-example__button">
      Watch Code on GitHub
      <img src="/images/github-logo.svg" alt="" class="code-example__button-image">
    </a>
    <div class="code-example__description">
      Use the component to select the option
    </div>
    <div class="code-example__result">
      <RadioButtonComponent
        v-for="option in state.radioButtonOptionsList"
        :key="option.value"
        :label="option.label"
        :value="state.selectedOption.value === option.value"
        @update:value="changeSelectedOption(option, $event)"
        class="checkbox-block"
      />
      <div class="selected-group-options">
        <div>Selected option: {{ state.selectedOption.label }}.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import RadioButtonComponent from '@/components/ui-elements/other/radio-button/RadioButtonComponent.vue';
import { RadioButtonOptionsObject } from '@/types';

export default defineComponent({
  name: 'RadioButtonsExamples',
  components: {
    RadioButtonComponent,
  },
  setup() {
    const state = reactive({
      selectedOption: {} as RadioButtonOptionsObject,
      radioButtonOptionsList: [] as Array<RadioButtonOptionsObject>,
    });

    const changeSelectedOption = (option, checked) => {
      if (checked) {
        state.selectedOption = option;
      }
    };

    onMounted(() => {
      for (let i = 1; i <= 7; i++) {
        state.radioButtonOptionsList.push({
          value: `option-0${i}`,
          label: `Option 0${i}`,
        });
      }
      state.selectedOption = state.radioButtonOptionsList[0];
    });

    return {
      state,
      changeSelectedOption,
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
