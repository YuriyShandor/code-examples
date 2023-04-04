<template>
  <div
    class="textarea-block"
    :class="{'error': state.isDirty && !state.isValid,
      'valid': state.isDirty && state.isValid && state.textField.length > 0}">
    <span v-if="label.length > 0" class="textarea-label">
      {{ label }}
    </span>
    <label :for="id">
      <textarea
        :id="id"
        class="textarea"
        v-model="state.textField"
      ></textarea>
    </label>
    <div v-if="state.isDirty && !state.isValid" class="textarea-error">
      <span v-for="error in state.errors" :key="error">
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, onMounted } from 'vue';

export default defineComponent({
  name: 'TextareaBlock',
  props: {
    label: String,
    id: String,
    defaultValue: String,
    isRequired: Boolean,
    minLength: Number,
    maxLength: Number,
  },
  setup(props, { emit }) {
    const state = reactive({
      textField: '',
      isDirty: false as boolean,
      isValid: false as boolean,
      errors: [] as Array<string>,
    });

    const validateField = () => {
      state.errors = [];
      if (props.isRequired && state.textField.length === 0) {
        state.errors.push('This input field is required. Please fill it in. ');
      }
      if (props.minLength !== undefined && state.textField.length > 0 && state.textField.length < props.minLength) {
        state.errors.push(`This input field must be at least ${props.minLength} characters long. `);
      }
      if (props.maxLength !== undefined && state.textField.length > props.maxLength) {
        state.errors.push(`The input field cannot exceed ${props.maxLength} characters in length. `);
      }
      state.isValid = state.errors.length === 0;
    };

    onMounted(() => {
      if (props.defaultValue !== undefined && props.defaultValue.length > 0) {
        state.textField = props.defaultValue;
      }
    });

    watch(() => state.textField, () => {
      if (!state.isDirty) {
        state.isDirty = true;
      }
      validateField();
      if (state.isDirty && !state.isValid) {
        emit(`update-${props.id}`, '');
      } else {
        emit(`update-${props.id}`, state.textField);
      }
    });

    return {
      state,
    };
  },
});
</script>
