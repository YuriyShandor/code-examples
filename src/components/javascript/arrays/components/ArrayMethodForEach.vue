<script setup lang="ts">
import NumbersHelper from '@/helpers/numbers.helper';

const randomNumbers: number[] = NumbersHelper.getXRandomNumbersBetweenTwoNumbers(10, -100, 100);

randomNumbers.forEach((number) => console.log(number));
</script>
