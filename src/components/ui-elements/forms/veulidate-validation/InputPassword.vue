<template>
  <div
    class="input-block"
    :class="{'error': v$.password.$error,
      'valid': !v$.password.$error && v$.password.$dirty && v$.password.$model.length > 0}">
    <div v-if="label.length > 0" class="input-label">
      {{ label }}
    </div>
    <span class="input-wrap">
      <label :for="id">
        <input
          :type="(autocompleteEnabled || v$.password.$dirty) && !state.isPasswordVisible ? 'password' : 'text'"
          :id="id"
          class="input password"
          v-model="v$.password.$model">
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
    <div
      v-if="v$.password.$error"
      class="input-error">
      <span v-for="error in v$.password.$errors" :key="error.$message">
        {{ error.$message }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { requiredIf, minLength, maxLength, helpers } from '@vuelidate/validators';

export default defineComponent({
  name: 'InputPassword',
  props: {
    label: String,
    id: String,
    value: String,
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
    });

    const rules = computed(() => ({
      password: {
        required: helpers.withMessage(
          'This input field is required. Please fill it in. ',
          requiredIf(() => props.isRequired),
        ),
        minLength: helpers.withMessage(
          ({ $params }) => `This input field must be at least ${$params.min} characters long. `,
          minLength(props.minLength !== undefined ? props.minLength : 0),
        ),
        maxLength: helpers.withMessage(
          ({ $params }) => `The input field cannot exceed ${$params.max} characters in length. `,
          maxLength(props.maxLength !== undefined ? props.maxLength : 999),
        ),
        confirmPassword: helpers.withMessage(
          'The password and confirm password fields do not match. Please try again. ',
          (value) => props.mainPassword === undefined || (value === props.mainPassword || state.password.length !== props.mainPassword.length),
        ),
      },
    }));

    const v$ = useVuelidate(rules, state);

    onMounted(() => {
      if (props.value !== undefined && props.value.length > 0) {
        state.password = props.value;
        v$.value.password.$touch();
      }
    });

    watch(() => state.password, () => {
      if (v$.value.password.$error || (props.mainPassword !== undefined && state.password !== props.mainPassword)) {
        emit('update:value', '');
      } else {
        emit('update:value', state.password);
      }
    });

    return {
      state,
      v$,
    };
  },
});
</script>
