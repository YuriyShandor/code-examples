<template>
  <div class="radio-button-block" @click="toggleCheckboxValue">
    <div
      class="radio-button"
      :class="{'checked': isChecked}">
    </div>
    <div class="checkbox-text">
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RadioButtonComponent',
  props: {
    id: String,
    name: String,
    label: String,
    isChecked: Boolean,
  },
  setup(props, { emit }) {
    const toggleCheckboxValue = () => {
      emit('update:isChecked', !props.isChecked);
    };

    return {
      toggleCheckboxValue,
    };
  },
});
</script>

<style scoped lang="scss">
.radio-button-block {
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-button {
  width: 22px;
  height: 22px;
  background: transparent;
  border: 2px solid #D4D2CD;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  transition: all, .25s;

  &:after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: darken(#228B22, 7%);
    opacity: 0;
    transition: all, .25s;
    -webkit-tap-highlight-color: transparent;
  }

  &.checked {
    border: 2px solid darken(#228B22, 7%);

    &:after {
      opacity: 1;
    }
  }
}

.checkbox-text {
  margin-left: 8px;
}
</style>
