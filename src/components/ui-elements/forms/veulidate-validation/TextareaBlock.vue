<template>
  <div
    class="textarea-block"
    :class="{'error': v$.textField.$error,
    'valid': !v$.textField.$error && v$.textField.$dirty && v$.textField.$model.length > 0}">
    <span v-if="label.length > 0" class="textarea-label">
      {{ label }}
    </span>
    <label :for="id">
      <textarea
        :id="id"
        class="textarea"
        v-model="v$.textField.$model"
      ></textarea>
    </label>
    <div v-if="v$.textField.$error" class="textarea-error">
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
      if (props.defaultValue !== undefined && props.defaultValue.length > 0) {
        state.textField = props.defaultValue;
      }
    });

    watch(() => state.textField, () => {
      console.log(v$.value);
      if (v$.value.textField.$error) {
        emit(`update-${props.id}`, '');
      } else {
        emit(`update-${props.id}`, state.textField);
      }
    });

    return {
      state,
      v$,
    };
  },
});
</script>
