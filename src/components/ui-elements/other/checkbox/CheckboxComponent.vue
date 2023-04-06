<template>
  <div class="checkbox-block" @click="toggleCheckboxValue">
    <div class="checkbox" :class="{'checked': value}">
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
  name: 'CheckboxComponent',
  props: {
    label: String,
    value: Boolean,
  },
  setup(props, { emit }) {
    const toggleCheckboxValue = () => {
      emit('update:value', !props.value);
    };

    return {
      toggleCheckboxValue,
    };
  },
});
</script>

<style scoped lang="scss">
.checkbox-block {
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox {
  width: 22px;
  height: 22px;
  background: transparent;
  border: 2px solid #D4D2CD;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  transition: all, .25s;

  svg {
    display: block;
    opacity: 0;
    transition: all, .25s;
    -webkit-tap-highlight-color: transparent;

    path {
      stroke: #228B22;
    }
  }

  &.checked {
    border: 2px solid darken(#228B22, 7%);

    svg {
      opacity: 1;
    }
  }
}

.checkbox-text {
  margin-left: 8px;
}
</style>
