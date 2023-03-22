<template>
  <div class="java-script-general-examples">
    <h1 class="page-title">
      Swiper Examples
    </h1>
    <SimpleSlider/>
    <SlidesPerView/>
    <SliderWithScrollbar/>
    <ParallaxSlider/>
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

<script lang="ts">/* eslint-disable import/extensions */
import { defineComponent } from 'vue';
import SimpleSlider from '@/components/external-libraries/swiper/SimpleSlider.vue';
import SlidesPerView from '@/components/external-libraries/swiper/SlidesPerView.vue';
import SliderWithScrollbar from '@/components/external-libraries/swiper/SliderWithScrollbar.vue';
import ParallaxSlider from '@/components/external-libraries/swiper/ParallaxSlider.vue';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default defineComponent({
  name: 'SwiperExamples',
  components: {
    SimpleSlider,
    SlidesPerView,
    SliderWithScrollbar,
    ParallaxSlider,
  },
});
</script>
