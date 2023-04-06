<template>
  <div
    class="input-block"
    :class="{'error': v$.textField.$error,
    'valid': !v$.textField.$error && v$.textField.$dirty && v$.textField.$model.length > 0}">
    <div v-if="label.length > 0" class="input-label">
      {{ label }}
    </div>
    <label :for="id">
      <input
        type="text"
        :id="id"
        class="input"
        v-model="v$.textField.$model">
    </label>
    <div v-if="v$.textField.$error" class="input-error">
      <span v-for="error in v$.textField.$errors" :key="error.$message">
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
  name: 'InputText',
  props: {
    label: String,
    id: String,
    value: String,
    isRequired: Boolean,
    minLength: Number,
    maxLength: Number,
  },
  setup(props, { emit }) {
    const state = reactive({
      textField: '' as string,
    });

    const rules = computed(() => ({
      textField: {
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
      },
    }));

    const v$ = useVuelidate(rules, state);

    onMounted(() => {
      if (props.value !== undefined && props.value.length > 0) {
        state.textField = props.value;
      }
    });

    watch(() => state.textField, () => {
      if (v$.value.textField.$error) {
        emit('update:value', '');
      } else {
        emit('update:value', state.textField);
      }
    });

    return {
      state,
      v$,
    };
  },
});
</script>
