<template>
  <button @click="getPosts">Get posts</button>
  <ul>
    <li v-for="post in state.posts" :key="post.id" data-test="post">
      {{ post.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import axios from 'axios'

export default defineComponent({
  name: 'JestPostList',
  setup() {
    const state = reactive({
      posts: undefined as (undefined | any[]),
    });

    const getPosts = async () => {
      state.posts = await axios.get('/api/posts')
    };

    return {
      state,
      getPosts,
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
