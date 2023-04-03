<template>
  <div class="modals-examples">
    <h1 class="page-title">Forms Examples</h1>
    <VuelidateValidationExample/>
    <CustomValidationExample/>
  </div>
</template>

<script lang="ts">
import VuelidateValidationExample from '@/components/ui-elements/forms/veulidate-validation/VuelidateValidationExample.vue';
import CustomValidationExample from '@/components/ui-elements/forms/custom-validation/CustomValidationExample.vue';

export default {
  name: 'FormsExamples',
  components: {
    VuelidateValidationExample,
    CustomValidationExample,
  },
};
</script>

<style scoped lang="scss">

</style>
