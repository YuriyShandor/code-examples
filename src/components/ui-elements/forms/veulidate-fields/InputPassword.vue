<template>
  <label :for="id" class="input-block">
    <span
      class="input-label"
      :class="{'error': v$.password.$error || (mainPassword !== undefined && state.password !== mainPassword)}">
      {{ label }}
    </span>
    <input
      :type="autocomplete || v$.password.$dirty ? 'password' : 'text'"
      :id="id"
      class="input"
      :class="{'error': v$.password.$error || (mainPassword !== undefined && state.password !== mainPassword)}"
      v-model="v$.password.$model"
    >
    <span class="password-input-eye-icon-block">
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.2565 6.962C20.7305 7.582 20.7305 8.419 20.2565 9.038C18.7635 10.987 15.1815 15 10.9995 15C6.81752 15 3.23552 10.987 1.74252 9.038C1.51191 8.74113 1.38672 8.37592 1.38672 8C1.38672 7.62408 1.51191 7.25887 1.74252 6.962C3.23552 5.013 6.81752 1 10.9995 1C15.1815 1 18.7635 5.013 20.2565 6.962V6.962Z" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z" stroke="#C3C3C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </span>
    <div class="input-error">
      <span v-if="v$.password.$error && v$.password.required.$invalid">
        Field is required
      </span>
      <span v-if="v$.password.$error && v$.password.minLength.$invalid">
        Minimum text length is {{ v$.password.minLength.$params.min }}
      </span>
      <span v-if="v$.password.$error && v$.password.maxLength.$invalid">
        Maximum text length is {{ v$.password.maxLength.$params.max }}
      </span>
      <span v-if="!v$.password.$error && v$.password.$dirty && mainPassword !== undefined && state.password !== mainPassword">
        Confirm password should be the same as main password
      </span>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { requiredIf, minLength, maxLength } from '@vuelidate/validators';

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
    autocomplete: Boolean,
  },
  setup(props, { emit }) {
    const state = reactive({
      password: '',
    });

    const rules = computed(() => ({
      password: {
        required: requiredIf(() => props.isRequired),
        minLength: minLength(props.minLength !== undefined ? props.minLength : 0),
        maxLength: maxLength(props.maxLength !== undefined ? props.maxLength : 999),
      },
    }));

    const v$ = useVuelidate(rules, state);

    onMounted(() => {
      if (props.defaultValue !== undefined && props.defaultValue.length > 0) {
        state.password = props.defaultValue;
      }
    });

    watch(() => state.password, () => {
      if (v$.value.password.$error || (props.mainPassword !== undefined && state.password !== props.mainPassword)) {
        emit(`update-${props.id}`, '');
      } else {
        emit(`update-${props.id}`, state.password);
      }
    });

    return {
      state,
      v$,
    };
  },
});
</script>
