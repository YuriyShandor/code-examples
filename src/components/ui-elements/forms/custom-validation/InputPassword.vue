<template>
  <div
    class="input-block"
    :class="{'error': state.isDirty && !state.isValid,
      'valid': state.isDirty && state.isValid && state.password.length > 0}">
    <div v-if="label.length > 0" class="input-label">
      {{ label }}
    </div>
    <span class="input-wrap">
      <label :for="id">
        <input
          :type="(autocompleteEnabled || state.isDirty) && !state.isPasswordVisible ? 'password' : 'text'"
          :id="id"
          class="input password"
          v-model="state.password">
      </label>
    <div
      class="password-eye-icon"
      :class="{'crossed-out': state.isPasswordVisible}"
      @click="state.isPasswordVisible = !state.isPasswordVisible">
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.2565 6.962C20.7305 7.582 20.7305 8.419 20.2565 9.038C18.7635 10.987 15.1815 15 10.9995 15C6.81752 15 3.23552 10.987 1.74252 9.038C1.51191 8.74113 1.38672 8.37592 1.38672 8C1.38672 7.62408 1.51191 7.25887 1.74252 6.962C3.23552 5.013 6.81752 1 10.9995 1C15.1815 1 18.7635 5.013 20.2565 6.962V6.962Z" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    </span>
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
  name: 'InputPassword',
  props: {
    label: String,
    id: String,
    defaultValue: String,
    isRequired: Boolean,
    minLength: Number,
    maxLength: Number,
    mainPassword: String,
    autocompleteEnabled: Boolean,
  },
  setup(props, { emit }) {
    const state = reactive({
      password: '' as string,
      isPasswordVisible: false as boolean,
      isDirty: false as boolean,
      isValid: false as boolean,
      errors: [] as Array<string>,
    });

    const validateField = () => {
      state.errors = [];
      if (props.isRequired && state.password.length === 0) {
        state.errors.push('This input field is required. Please fill it in. ');
      }
      if (props.minLength !== undefined && state.password.length > 0 && state.password.length < props.minLength) {
        state.errors.push(`This input field must be at least ${props.minLength} characters long. `);
      }
      if (props.maxLength !== undefined && state.password.length > props.maxLength) {
        state.errors.push(`The input field cannot exceed ${props.maxLength} characters in length. `);
      }
      if (props.mainPassword !== undefined && state.password !== props.mainPassword && state.password.length === props.mainPassword.length) {
        state.errors.push('The password and confirm password fields do not match. Please try again. ');
      }
      state.isValid = state.errors.length === 0;
    };

    onMounted(() => {
      if (props.defaultValue !== undefined && props.defaultValue.length > 0) {
        state.password = props.defaultValue;
      }
    });

    watch(() => state.password, () => {
      if (!state.isDirty) {
        state.isDirty = true;
      }
      validateField();
      if (state.isDirty && !state.isValid) {
        emit(`update-${props.id}`, '');
      } else {
        emit(`update-${props.id}`, state.password);
      }
    });

    return {
      state,
    };
  },
});
</script>
