<template>
  <div class="interview-questions-page">
    <div class="container">
      <h1 class="page-title">
        JavaScript Questions for Interview
      </h1>
      <el-collapse accordion
        class="interview-questions-accordion">
        <el-collapse-item
          class="interview-questions-accordion__item" :name="item.title"
          v-for="item in questionsList" :key="item.title">
          <template #title>
            <div class="interview-questions-accordion__item-title">
              {{ item.title }}
            </div>
          </template>
          <div
            class="interview-questions-accordion__item-content"
            v-html="item.content">
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TypeScriptQuestionsPage',
  setup() {
    const questionsList: {title: string, content: string}[] = [
      {
        title: 'Title 01',
        content: 'Content 01',
      },
      {
        title: 'Title 02',
        content: 'Content 02',
      },
    ];

    return {
      questionsList,
    };
  },
});
</script>
