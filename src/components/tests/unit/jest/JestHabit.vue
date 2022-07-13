<template>
  <div class="habit">
    <span class="habit__name">{{ name }}</span>
    <span :class="{ 'habit__box--done': state.done }" class="habit__box" @click="onHabitDone">
      <span v-if="state.done">✔</span>
    </span>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';

export default defineComponent({
  name: 'JestHabit',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup() {
    const state = reactive({
      done: false as boolean,
    });

    const onHabitDone = () => {
      state.done = !state.done;
    };

    return {
      state,
      onHabitDone,
    };
  },
});
</script>

<style scoped lang="scss">
.habit {
  height: 100vh;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: ui-sans-serif, system-ui;
}
.habit__name {
  font-weight: bold;
  font-size: 64px;
  margin-right: 20px;
}
.habit__box {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #cbd5e0;
  background-color: #ffffff;
  font-size: 40px;
  cursor: pointer;
  border-radius: 10px;
}
.habit__box--done {
  border-color: #22543d;
  background-color: #2f855a;
  color: white;
}
</style>
