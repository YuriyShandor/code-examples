<template>
  <div
    class="input-block"
    :class="{'error': v$.email.$error,
      'valid': !v$.email.$error && v$.email.$dirty && v$.email.$model.length > 0}">
    <div v-if="label.length > 0" class="input-label">
      {{ label }}
    </div>
    <label :for="id">
      <input
        type="email"
        :id="id"
        class="input"
        v-model="v$.email.$model">
    </label>
    <div v-if="v$.email.$error" class="input-error">
      <span v-for="error in v$.email.$errors" :key="error.$message">
        {{ error.$message }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { email, helpers, requiredIf } from '@vuelidate/validators';

export default defineComponent({
  name: 'InputEmail',
  props: {
    label: String,
    id: String,
    defaultValue: String,
    isRequired: Boolean,
  },
  setup(props, { emit }) {
    const state = reactive({
      email: '' as string,
    });

    const rules = computed(() => ({
      email: {
        required: helpers.withMessage(
          'This input field is required. Please fill it in. ',
          requiredIf(() => props.isRequired),
        ),
        email: helpers.withMessage(
          'Please enter a valid email address. ',
          email,
        ),
      },
    }));

    const v$ = useVuelidate(rules, state);

    onMounted(() => {
      if (props.defaultValue !== undefined && props.defaultValue.length > 0) {
        state.email = props.defaultValue;
      }
    });

    watch(() => state.email, () => {
      if (v$.value.email.$error) {
        emit(`update-${props.id}`, '');
      } else {
        emit(`update-${props.id}`, state.email);
      }
    });

    return {
      state,
      v$,
    };
  },
});
</script>
