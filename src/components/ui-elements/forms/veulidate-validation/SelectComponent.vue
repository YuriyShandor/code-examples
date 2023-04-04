<template>
  <div
    class="select-block"
    :class="{'error': v$.selectValue.$error,
      'valid': !v$.selectValue.$error && !v$.selectValue.$invalid && v$.selectValue.$model.length > 0}">
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
    <div v-if="v$.selectValue.$error" class="select-error">
      <span v-for="error in v$.selectValue.$errors" :key="error.$message">
        {{ error.$message }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { helpers, requiredIf } from '@vuelidate/validators';
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
    });

    const rules = computed(() => ({
      selectValue: {
        required: helpers.withMessage(
          'Please select an option from the dropdown menu. ',
          requiredIf(() => props.isRequired),
        ),
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
