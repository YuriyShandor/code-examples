<template>
  <div
    class="select-block"
    :class="{'error': v$.selectValue.$error, 'valid': !v$.selectValue.$error && !v$.selectValue.$invalid}">
    <span v-if="label.length > 0" class="select-label">
      {{ label }}
    </span>
    <el-select
      v-model="state.selectValue"
      value-key
      :filterable="isFilterable"
      :placeholder="''"
      class="select"
      popper-class="dark-select-popper">
      <el-option
        v-for="option in selectOptions"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      />
    </el-select>
    <div v-if="v$.selectValue.$error" class="select-error">
      <span v-if="v$.selectValue.$error && v$.selectValue.required.$invalid">
        Field is required
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { requiredIf } from '@vuelidate/validators';
import { ElOption, ElSelect } from 'element-plus';

export default defineComponent({
  name: 'SelectComponent',
  props: {
    label: String,
    id: String,
    defaultValue: [String, Number],
    isRequired: Boolean,
    selectOptions: Array,
    isFilterable: Boolean,
  },
  components: {
    ElSelect,
    ElOption,
  },
  setup(props, { emit }) {
    const state = reactive({
      selectValue: undefined as (string | number),
    });

    const rules = computed(() => ({
      selectValue: {
        required: requiredIf(() => props.isRequired),
      },
    }));

    const v$ = useVuelidate(rules, state);

    watch(() => state.selectValue, () => {
      emit(`update-${props.id}`, state.selectValue);
    });

    onMounted(() => {
      if (props.defaultValue !== undefined) {
        state.selectValue = props.defaultValue;
      }
    });

    watch(() => props.defaultValue, () => {
      state.selectValue = props.defaultValue;
    });

    return {
      state,
      v$,
    };
  },
});
</script>
