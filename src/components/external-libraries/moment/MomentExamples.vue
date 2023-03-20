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
        <pre>
          <code class="language-javascript">
            const currentDate = moment();
            const currentDay = currentDate.format('dddd');
            const currentDayNumber = currentDate.format('DD');
            const currentMonth = currentDate.format('MMMM');
            const currentMonthNumber = currentDate.format('MM');
            const currentYear = currentDate.format('YYYY');
            const currenDateFormatted = currentDate.format('MMMM DD, YYYY');
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-block">
      <div class="code-example__title">
        Get previous and next months
      </div>
      <div class="code-example__description">
        Get the previous month's title from the month's title
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            const monthTitle = 'May';
            const monthNumber = moment().month(monthTitle).format('M');
            const previousMonthTitle = moment().month(+monthNumber - 2).format('MMMM');
            console.log(previousMonthTitle);
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Get the previous months titles from the month's title
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            const getPrevMonthsTitles = (monthTitle: string, prevMonthsQty: number) => {
              const prevMonthsTitlesArr: string[] = [];
              let prevMonthsTitlesString: string = '';
              const monthNumber = moment().month(monthTitle).format('M');

              for (let i = prevMonthsQty; i > 0; i--) {
                prevMonthsTitlesArr.push(moment(monthNumber).subtract(i, 'months').format('MMMM'));
              }

              prevMonthsTitlesArr.forEach((title, index) => {
                if (index === 0) {
                  prevMonthsTitlesString += title;
                } else if (index === prevMonthsTitlesArr.length - 1) {
                  prevMonthsTitlesString += ` and ${title}`;
                } else {
                  prevMonthsTitlesString += `, ${title}`;
                }
              });

              return prevMonthsTitlesString;
            };

            console.log(getPrevMonthsTitles('March', 7));
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Get the next month's title from the month's title
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            const monthTitle = 'May';
            const monthNumber = moment().month(monthTitle).format('M');
            const nextMonthTitle = moment().month(+monthNumber).format('MMMM');
            console.log(nextMonthTitle);
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Get the next months titles from the month's title
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            const getNextMonthsTitles = (monthTitle: string, nextMonthsQty: number) => {
              const nextMonthsTitlesArr: string[] = [];
              let nextMonthsTitlesString: string = '';
              const monthNumber = moment().month(monthTitle).format('M');

              for (let i = 1; i &lt;= nextMonthsQty; i++) {
                nextMonthsTitlesArr.push(moment(monthNumber).add(i, 'months').format('MMMM'));
              }

              nextMonthsTitlesArr.forEach((title, index) => {
                if (index === 0) {
                  nextMonthsTitlesString += title;
                } else if (index === nextMonthsTitlesArr.length - 1) {
                  nextMonthsTitlesString += ` and ${title}`;
                } else {
                  nextMonthsTitlesString += `, ${title}`;
                }
              });

              return nextMonthsTitlesString;
            };

            console.log(getNextMonthsTitles('December', 7));
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-block">
      <div class="code-example__title">Formatting dates</div>
      <div class="code-example__description">Format the javascript native date with the moment</div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            const date = new Date();
            const formattedDate = moment(date).format('MMMM DD, YYYY');
            console.log(formattedDate);
          </code>
        </pre>
      </div>
      <div class="code-example__description">Another dates formatting with the moment</div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            console.log(moment('2000-12-24').format('MM.DD.YYYY'));
            console.log(moment('01-17-2023').format('MMMM DD, YYYY'));
            console.log(moment('03-17-2023').format('dddd DD, MMMM YYYY'));
          </code>
        </pre>
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
import moment from 'moment-mini-ts';

export default defineComponent({
  name: 'MomentExamples',
  setup() {
    onMounted(() => {
      console.log('MomentExamples');
      console.log(moment().format('MMMM DD, YYYY'));
    });
  },
});
</script>
