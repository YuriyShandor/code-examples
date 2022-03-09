<template>
  <div class="modals-examples">
    <h1 class="page-title">Modals Examples</h1>
<!--    <SimpleModalWith100vhPlugin/>-->
    <SimpleModalWithAnimation/>
    <div class="code-example-wrap">
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

<script>/* eslint-disable */
import SimpleModalWith100vhPlugin from '@/components/ui-elements/modals/SimpleModalWith100vhPlugin.vue'
import SimpleModalWithAnimation from '@/components/ui-elements/modals/SimpleModalWithAnimation.vue'

export default {
  name: 'ModalsExamples',
  components: {
    SimpleModalWith100vhPlugin,
    SimpleModalWithAnimation
  }
}
</script>

<style scoped lang="scss">

</style>