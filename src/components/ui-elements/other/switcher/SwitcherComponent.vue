<template>
  <div class="switcher-block" @click="toggleSwitcherValue">
    <div class="switcher" :class="{'checked': value}"></div>
    <div class="switcher-text">
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwitcherComponent',
  props: {
    label: String,
    value: Boolean,
  },
  setup(props, { emit }) {
    const toggleSwitcherValue = () => {
      emit('update:value', !props.value);
    };

    return {
      toggleSwitcherValue,
    };
  },
});
</script>

<style scoped lang="scss">
.switcher-block {
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.switcher {
  width: 42px;
  height: 22px;
  background: #D4D2CD;
  border-radius: 100px;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  transition: all .25s linear;

  &:after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: #000;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    left: 2px;
    transition: all .25s linear;
    -webkit-tap-highlight-color: transparent;
  }

  &.checked {
    background: darken(#228B22, 7%);

    &:after {
      left: 20px;
      background: #D4D2CD;
    }
  }
}

.switcher-text {
  margin-left: 8px;
}
</style>
