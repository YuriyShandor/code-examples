<template>
  <div
    class="input-block"
    :class="{'error': state.isDirty && !state.isValid,
      'valid': state.isDirty && state.isValid && state.email.length > 0}">
    <div v-if="label.length > 0" class="input-label">
      {{ label }}
    </div>
    <label :for="id">
      <input
        type="email"
        :id="id"
        :ref="id"
        class="input"
        v-model="state.email">
    </label>
    <div v-if="state.isDirty && !state.isValid" class="input-error">
      <span v-for="error in state.errors" :key="error">
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, onMounted } from 'vue';

export default defineComponent({
  name: 'InputEmail',
  props: {
    label: String,
    id: String,
    value: String,
    isRequired: Boolean,
  },
  setup(props, { emit }) {
    const state = reactive({
      email: '' as string,
      isDirty: false as boolean,
      isValid: false as boolean,
      errors: [] as Array<string>,
    });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validateField = () => {
      state.errors = [];
      if (props.isRequired && state.email.length === 0) {
        state.errors.push('This input field is required. Please fill it in. ');
      }
      if (state.email.length > 0 && !emailRegex.test(state.email)) {
        state.errors.push('Please enter a valid email address. ');
      }
      state.isValid = state.errors.length === 0;
    };

    onMounted(() => {
      if (props.value !== undefined && props.value.length > 0) {
        state.email = props.value;
        document.getElementById(props.id)?.focus();
      }
    });

    watch(() => state.email, () => {
      if (!state.isDirty) {
        state.isDirty = true;
      }
      validateField();
      if (state.isDirty && !state.isValid) {
        emit('update:value', '');
      } else {
        emit('update:value', state.email);
      }
    });

    return {
      state,
    };
  },
});
</script>
