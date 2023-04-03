<template>
  <div
    class="textarea-block"
    :class="{'error': v$.textField.$error, 'valid': !v$.textField.$error && v$.textField.$dirty}">
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
      <span v-if="v$.textField.$error && v$.textField.required.$invalid">
        Field is required
      </span>
      <span v-if="v$.textField.$error && v$.textField.minLength.$invalid">
        Minimum text length is {{ v$.textField.minLength.$params.min }}
      </span>
      <span v-if="v$.textField.$error && v$.textField.maxLength.$invalid">
        Maximum text length is {{ v$.textField.maxLength.$params.max }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { requiredIf, minLength, maxLength } from '@vuelidate/validators';

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
        required: requiredIf(() => props.isRequired),
        minLength: minLength(props.minLength !== undefined ? props.minLength : 0),
        maxLength: maxLength(props.maxLength !== undefined ? props.maxLength : 999),
      },
    }));

    const v$ = useVuelidate(rules, state);

    onMounted(() => {
      if (props.defaultValue !== undefined && props.defaultValue.length > 0) {
        state.textField = props.defaultValue;
      }
    });

    watch(() => state.textField, () => {
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
