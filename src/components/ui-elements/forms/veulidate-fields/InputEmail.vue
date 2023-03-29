<template>
  <label :for="id" class="input-block">
    <span class="input-label" :class="{'error': v$.email.$error}">
      {{ label }}
    </span>
    <input
      type="email"
      :id="id"
      class="input"
      :class="{'error': v$.email.$error}"
      v-model="v$.email.$model"
    >
    <div class="input-error">
      <span v-if="v$.email.$error && v$.email.required.$invalid">
        Field is required
      </span>
      <span v-if="v$.email.$error && v$.email.email.$invalid">
        Entered email is invalid
      </span>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

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
      email: '',
    });

    const rules = computed(() => ({
      email: {
        required,
        email,
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
