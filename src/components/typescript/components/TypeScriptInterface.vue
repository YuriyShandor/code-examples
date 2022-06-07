<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';

export default defineComponent({
  name: 'TypeScriptInterface',
  setup() {
    interface Book {
      title: string;
      year: number;
    }

    const bookObj: Book = {
      title: 'Vue 3 Guide',
      year: 2022,
    };

    const state: Book = reactive({
      title: 'Vue 3 Guide',
      year: 2022,
    });

    onMounted(() => {
      console.log(state);
      console.log(bookObj);
    });

    return {
      state,
      bookObj,
    };
  },
});
</script>
