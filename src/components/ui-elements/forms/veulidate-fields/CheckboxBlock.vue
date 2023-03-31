<template>
  <div class="checkbox-block" @click="toggleCheckboxValue">
    <div class="checkbox" :class="{'checked': checkboxValue}">
      <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999978 5.5L4.5 9L11.54 1" stroke="#F9F6F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="checkbox-text">
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CheckboxBlock',
  props: {
    id: String,
    label: String,
    checkboxValue: Boolean,
  },
  setup(props, { emit }) {
    const toggleCheckboxValue = () => {
      emit(`update-${props.id}`, !props.checkboxValue);
    };

    return {
      toggleCheckboxValue,
    };
  },
});
</script>
