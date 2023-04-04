<template>
  <div
    class="select-block"
    :class="{'error': state.isDirty && !state.isValid,
      'valid': state.isDirty && state.isValid && state.selectValue.length > 0}">
    <span v-if="label.length > 0" class="select-label">
      {{ label }}
    </span>
    <el-select
      v-model="state.selectValue"
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
    <div v-if="state.isDirty && !state.isValid" class="input-error">
      <span v-for="error in state.errors" :key="error">
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, onMounted } from 'vue';
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
      selectValue: '' as (string | number),
      isDirty: false as boolean,
      isValid: false as boolean,
      errors: [] as Array<string>,
    });

    const validateField = () => {
      state.errors = [];
      if (props.isRequired && state.selectValue === '') {
        state.errors.push('Please select an option from the dropdown menu. ');
      }
      state.isValid = state.errors.length === 0;
    };

    onMounted(() => {
      if (props.defaultValue !== undefined) {
        state.selectValue = props.defaultValue;
      }
    });

    watch(() => state.selectValue, () => {
      if (!state.isDirty) {
        state.isDirty = true;
      }
      validateField();
      if (state.isDirty && !state.isValid) {
        emit(`update-${props.id}`, '');
      } else {
        emit(`update-${props.id}`, state.selectValue);
      }
    });

    return {
      state,
    };
  },
});
</script>
