<template>
  <div class="java-script-general-examples">
    <h1 class="page-title">
      Moment Examples
    </h1>
    <div class="code-example-block">
      <div class="code-example__title">
        Get current date info
      </div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <!--        <pre>-->
        <!--          <code class="language-javascript">-->
        <!--            let current_date = moment()-->
        <!--            let current_date_day = current_date.format('dddd')-->
        <!--            let current_date_day_number = current_date.format('DDDD')-->
        <!--            let current_month = current_date.format('MMMM')-->
        <!--            let current_month_number = current_date.format('MM')-->
        <!--            let current_year = current_date.format('YYYY')-->
        <!--            console.log(current_year)-->
        <!--          </code>-->
        <!--        </pre>-->
      </div>
    </div>
    <div class="code-example-block">
      <div class="code-example__title">
        Get previous and next months
      </div>
      <div class="code-example__description">
        A previous month from the current month's title
      </div>
      <div class="code-example">
        <!--        <pre>-->
        <!--          <code class="language-javascript">-->
        <!--            let current_month_title = 'December'-->
        <!--            let current_month_number = moment().month(current_month_title).format('M')-->
        <!--            let previous_month_title = moment().month(current_month_number - 2).format('MMMM')-->
        <!--            console.log(previous_month_title)-->
        <!--          </code>-->
        <!--        </pre>-->
      </div>
      <div class="code-example__description">
        Get previous months from current month title
      </div>
      <div class="code-example">
<!--        <pre>-->
<!--          <code class="language-javascript">-->
<!--            let month_title = 'December'-->
<!--            let prev_months_qty = 7-->

<!--            const getPrevMonthsTitles = (month_title, prev_months_qty) => {-->
<!--              let prev_months_titles_arr = []-->
<!--              let prev_months_titles_string = ''-->
<!--              let month_number = moment().month(month_title).format('M')-->

<!--              for (let i = prev_months_qty; i > 0; i&#45;&#45;) {-->
<!--                prev_months_titles_arr.push(moment(month_number).subtract(i, 'months').format('MMMM'))-->
<!--              }-->

<!--              prev_months_titles_arr.forEach((title, index) => {-->
<!--                if(index === 0) {-->
<!--                  prev_months_titles_string += title-->
<!--                } else if(index === prev_months_titles_arr.length - 1) {-->
<!--                  prev_months_titles_string += ` and ${title}`-->
<!--                } else {-->
<!--                  prev_months_titles_string += `, ${title}`-->
<!--                }-->
<!--              })-->

<!--              return prev_months_titles_string-->
<!--            }-->

<!--            console.log(getPrevMonthsTitles(month_title, prev_months_qty))-->
<!--          </code>-->
<!--        </pre>-->
      </div>
      <div class="code-example__description">
        Next month from the current month's title
      </div>
      <div class="code-example">
<!--        <pre>-->
<!--          <code class="language-javascript">-->
<!--            let current_month_title = 'December'-->
<!--            let current_month_number = moment().month(current_month_title).format('M')-->
<!--            let next_month_title = moment().month(current_month_number).format('MMMM')-->
<!--            console.log(next_month_title)-->
<!--          </code>-->
<!--        </pre>-->
      </div>
      <div class="code-example__description">
        Get next months from current month title
      </div>
      <div class="code-example">
<!--        <pre>-->
<!--          <code class="language-javascript">-->
<!--            let month_title = 'December'-->
<!--            let next_months_qty = 5-->

<!--            const getNextMonthsTitles = (month_title, next_months_qty) => {-->
<!--              let next_months_titles_arr = []-->
<!--              let next_months_titles_string = ''-->
<!--              let current_month_number = moment().month(month_title).format('M')-->

<!--              for (let i = 1; i <= next_months_qty; i++) {-->
<!--                next_months_titles_arr.push(moment(month_number).add(i, 'months').format('MMMM'))-->
<!--              }-->

<!--              next_months_titles_arr.forEach((title, index) => {-->
<!--                if(index === 0) {-->
<!--                  next_months_titles_string += title-->
<!--                } else if(index === next_months_titles_arr.length - 1) {-->
<!--                  next_months_titles_string += ` and ${title}`-->
<!--                } else {-->
<!--                  next_months_titles_string += `, ${title}`-->
<!--                }-->
<!--              })-->

<!--              return next_months_titles_string-->
<!--            }-->

<!--            console.log(getNextMonthsTitles(month_title, next_months_qty))-->
<!--          </code>-->
<!--        </pre>-->
      </div>
    </div>
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
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'MomentExamples',
  setup() {
    onMounted(() => {
      console.log('MomentExamples');
    });
  },
});
</script>
