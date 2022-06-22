<template>
  <div class="axios-examples">
    <h1 class="page-title">Axios Examples</h1>
    <div class="code-example-block">
      <div class="code-example__title">Simple Axios Using</div>
      <div class="code-example__description">
        Simple GET request
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import axios from 'axios'

            axios.get('request-url').then((response) => {
              console.log('Response ', response);
            }).catch((error) => {
              console.log('Error: ', error);
            });
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Simple POST request
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import axios from 'axios'

            axios.post('request-url', {
              firstName: 'FirstName',
              lastName: 'LastName',
            }).then((response) => {
              console.log('Response ', response);
            }).catch((error) => {
              console.log('Error: ', error);
            });
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'AxiosExamples',
  setup() {
    onMounted(() => {
      console.log('Axios Examples');
    });
  },
});
</script>
