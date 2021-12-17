/* eslint-disable */
import SinglePage from '@/components/pages/SinglePage'

import JavaScriptGeneralExamples from '@/components/javascript/JavaScriptGeneralExamples'
import JavaScriptArraysExamples from '@/components/javascript/JavaScriptArraysExamples'
import JavaScriptNumbersExamples from '@/components/javascript/JavaScriptNumbersExamples'
import JavaScriptStringsExamples from '@/components/javascript/JavaScriptStringsExamples'

class JavaScriptExamplesRouterHelper {
  static get JAVASCRIPT_EXAMPLES_PAGE_NAME() {
    return 'JavaScript Examples'
  }
  static get JAVASCRIPT_EXAMPLES_PAGE_PATH() {
    return 'javascript'
  }

  static get JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME() {
    return 'General Examples'
  }
  static get JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH() {
    return 'general'
  }

  static get JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME() {
    return 'Arrays Examples'
  }
  static get JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH() {
    return 'arrays'
  }

  static get JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_NAME() {
    return 'Numbers Examples'
  }
  static get JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_PATH() {
    return 'numbers'
  }

  static get JAVASCRIPT_STRINGS_EXAMPLES_PAGE_NAME() {
    return 'Strings Examples'
  }
  static get JAVASCRIPT_STRINGS_EXAMPLES_PAGE_PATH() {
    return 'strings'
  }

  routes() {
    return {
      name: this.constructor.JAVASCRIPT_EXAMPLES_PAGE_NAME,
      path: `/${this.constructor.JAVASCRIPT_EXAMPLES_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.constructor.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME,
          path: this.constructor.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH,
          component: JavaScriptGeneralExamples
        },
        {
          name: this.constructor.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME,
          path: this.constructor.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH,
          component: JavaScriptArraysExamples
        },
        {
          name: this.constructor.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_NAME,
          path: this.constructor.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_PATH,
          component: JavaScriptNumbersExamples
        },
        {
          name: this.constructor.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_NAME,
          path: this.constructor.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_PATH,
          component: JavaScriptStringsExamples
        }
      ]
    }
  }

  menuItems() {
    return {
      title: this.constructor.JAVASCRIPT_EXAMPLES_PAGE_NAME,
      link: `/${this.constructor.JAVASCRIPT_EXAMPLES_PAGE_PATH}`,
      subItems: [
        {
          title: this.constructor.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME,
          link: `/${this.constructor.JAVASCRIPT_EXAMPLES_PAGE_PATH}/${this.constructor.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH}`
        },
        {
          title: this.constructor.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME,
          link: `/${this.constructor.JAVASCRIPT_EXAMPLES_PAGE_PATH}/${this.constructor.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH}`
        },
        {
          title: this.constructor.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_NAME,
          link: `/${this.constructor.JAVASCRIPT_EXAMPLES_PAGE_PATH}/${this.constructor.JAVASCRIPT_NUMBERS_EXAMPLES_PAGE_PATH}`
        },
        {
          title: this.constructor.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_NAME,
          link: `/${this.constructor.JAVASCRIPT_EXAMPLES_PAGE_PATH}/${this.constructor.JAVASCRIPT_STRINGS_EXAMPLES_PAGE_PATH}`
        }
      ]
    }
  }
}

export default new JavaScriptExamplesRouterHelper()
