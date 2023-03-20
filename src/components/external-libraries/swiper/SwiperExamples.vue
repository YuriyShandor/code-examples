<template>
  <div class="java-script-general-examples">
    <h1 class="page-title">
      Swiper Examples
    </h1>
    <OneActiveSlide/>
    <div class="code-example-block">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OneActiveSlide from '@/components/external-libraries/swiper/OneActiveSlide.vue';

export default defineComponent({
  name: 'SwiperExamples',
  components: {
    OneActiveSlide,
  },
});
</script>
