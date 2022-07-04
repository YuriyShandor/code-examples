<template>
  <div>
    <input type="email" v-model="email" />
    <button @click="submit">Submit</button>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'JestEmail',
  setup(props, { emit }) {
    const email = ref('');

    const submit = () => {
      emit('submit', email);
    };

    return {
      email,
      submit,
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
