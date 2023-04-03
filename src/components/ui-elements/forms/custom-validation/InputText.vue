<template>
  <div
    class="input-block"
    :class="{'error': state.hasError, 'valid': state.isDirty && state.isValid}">
    <div v-if="label.length > 0" class="input-label">
      {{ label }}
    </div>
    <label :for="id">
      <input
        type="text"
        :id="id"
        class="input"
        v-model="state.textField">
    </label>
    <div v-if="state.hasError" class="input-error">
      <span v-for="error in state.errors" :key="error">
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, onMounted } from 'vue';

export default defineComponent({
  name: 'InputText',
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
      textField: '' as string,
      isDirty: false as boolean,
      isValid: false as boolean,
      hasError: false as boolean,
      errors: [] as Array<string>,
    });

    const validateField = () => {
      console.log(state.textField);
    };

    onMounted(() => {
      if (props.defaultValue !== undefined && props.defaultValue.length > 0) {
        state.textField = props.defaultValue;
      }
    });

    watch(() => state.textField, () => {
      validateField();
      if (state.hasError) {
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
