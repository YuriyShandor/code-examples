<template>
  <div class="java-script-general-examples">
    <h1 class="page-title">
      Moment Examples
    </h1>
    <div class="code-example-wrap">
      <div class="code-example__title">
        Get current date info
      </div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let current_date = moment()
            let current_date_day = current_date.format('dddd')
            let current_date_day_number = current_date.format('DDDD')
            let current_month = current_date.format('MMMM')
            let current_month_number = current_date.format('MM')
            let current_year = current_date.format('YYYY')
            console.log(current_year)
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title">
        Get previous and next months
      </div>
      <div class="code-example__description">
        A previous month from the current month's title
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let current_month_title = 'December'
            let current_month_number = moment().month(current_month_title).format('M')
            let previous_month_title = moment().month(current_month_number - 2).format('MMMM')
            console.log(previous_month_title)
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Get previous months from current month title
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            // code here
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Next month from the current month's title
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let current_month_title = 'December'
            let current_month_number = moment().month(current_month_title).format('M')
            let next_month_title = moment().month(current_month_number).format('MMMM')
            console.log(next_month_title)
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Get next months from current month title
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            let month_title = 'December'
            let next_months_qty = 5

            const getNextMonthsTitles = (month_title, next_months_qty) => {
              let nextMonthsTitlesArr = []
              let nextMonthsTitlesString = ''
              let current_date_day_number = moment().month(month_title).format('M')

              for (let i = 1; i <= next_months_qty; i++) {
                nextMonthsTitlesArr.push(moment(current_date_day_number).add(i, 'months').format('MMMM'))
              }

              nextMonthsTitlesArr.forEach((monthTitle, index) => {
                if(index === 0) {
                  nextMonthsTitlesString += monthTitle
                } else if(index === nextMonthsTitlesArr.length - 1) {
                  nextMonthsTitlesString += ` and ${monthTitle}`
                } else {
                  nextMonthsTitlesString += `, ${monthTitle}`
                }
              })

              return nextMonthsTitlesString
            }

            console.log(getNextMonthsTitles(month_title, next_months_qty))
          </code>
        </pre>
      </div>
    </div>
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
import PrismApiHelper from '@/api-helpers/prism.api-helper'

import moment from 'moment'

export default {
  name: 'MomentExamples',
  mounted() {
    PrismApiHelper.initPrism()

    let month_title = 'December'
    let next_months_qty = 5

    const getNextMonthsTitles = (month_title, next_months_qty) => {
      let nextMonthsTitlesArr = []
      let nextMonthsTitlesString = ''
      let current_date_day_number = moment().month(month_title).format('M')

      for (let i = 1; i <= next_months_qty; i++) {
        nextMonthsTitlesArr.push(moment(current_date_day_number).add(i, 'months').format('MMMM'))
      }

      nextMonthsTitlesArr.forEach((monthTitle, index) => {
        if(index === 0) {
          nextMonthsTitlesString += monthTitle
        } else if(index === nextMonthsTitlesArr.length - 1) {
          nextMonthsTitlesString += ` and ${monthTitle}`
        } else {
          nextMonthsTitlesString += `, ${monthTitle}`
        }
      })

      return nextMonthsTitlesString
    }

    console.log(getNextMonthsTitles(month_title, next_months_qty))

    // let month_title = 'December'
    // let previous_months_qty = 5
    // const getPreviousMonthsTitles = (month_title, previous_months_qty) => {
    //   let previousMonthsTitlesArr = []
    //   let previousMonthsTitlesString = ''
    //   let current_date_day_number = moment().month(month_title).format('M')
    //
    //   for (let i = 1; i <= previous_months_qty; i++) {
    //     previousMonthsTitlesArr.push(moment(current_date_day_number).add(i, 'months').format('MMMM'))
    //   }
    //
    //   previousMonthsTitlesArr.forEach((monthTitle, index) => {
    //     if(index === 0) {
    //       previousMonthsTitlesString += monthTitle
    //     } else if(index === previousMonthsTitlesArr.length - 1) {
    //       previousMonthsTitlesString += ` and ${monthTitle}`
    //     } else {
    //       previousMonthsTitlesString += `, ${monthTitle}`
    //     }
    //   })
    //
    //   return previousMonthsTitlesString
    // }
    //
    // console.log(getPreviousMonthsTitles(month_title, previous_months_qty))
  },
  watch: {

  }
}
</script>

<style scoped lang="scss">

</style>