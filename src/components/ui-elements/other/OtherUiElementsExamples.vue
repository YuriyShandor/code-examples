<template>
  <div class="modals-examples">
    <h1 class="page-title">Other UI Examples</h1>
    <CheckboxExamples/>
    <RadioButtonsExamples/>
    <SwitcherExamples/>
  </div>
</template>

<script lang="ts">
import CheckboxExamples from '@/components/ui-elements/other/checkbox/CheckboxExamples.vue';
import RadioButtonsExamples from '@/components/ui-elements/other/radio-button/RadioButtonsExamples.vue';
import SwitcherExamples from '@/components/ui-elements/other/switcher/SwitcherExamples.vue';

export default {
  name: 'OtherUiElementsExamples',
  components: {
    CheckboxExamples,
    RadioButtonsExamples,
    SwitcherExamples,
  },
};
</script>

<style scoped lang="scss">

</style>
