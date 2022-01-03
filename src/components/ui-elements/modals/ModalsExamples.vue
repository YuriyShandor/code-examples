<template>
  <div class="modals-examples">
    <h1 class="page-title">Modals Examples</h1>
    <SimpleModal/>
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
import SimpleModal from '@/components/ui-elements/modals/SimpleModal.vue'

export default {
  name: 'ModalsExamples',
  components: {
    SimpleModal
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">

</style>