<template>
  <label :for="id" class="input-block">
    <span
      v-if="label.length > 0"
      class="input-label"
      :class="{'error': v$.textField.$error}">
      {{ label }}
    </span>
    <input
      type="text"
      :id="id"
      class="input"
      :class="{'error': v$.textField.$error}"
      v-model="v$.textField.$model"
    >
    <div class="input-error" v-if="v$.textField.$error">
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
  </label>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { requiredIf, minLength, maxLength } from '@vuelidate/validators';

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
