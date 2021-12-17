/* eslint-disable */
import SinglePage from '@/components/pages/SinglePage'

import CodeWarsJavaScriptGeneral from '@/components/codewars/CodeWarsJavaScriptGeneral'
import CodeWarsJavaScriptArrays from '@/components/codewars/CodeWarsJavaScriptArrays'
import CodeWarsJavaScriptNumbers from '@/components/codewars/CodeWarsJavaScriptNumbers'
import CodeWarsJavaScriptStrings from '@/components/codewars/CodeWarsJavaScriptStrings'

class CodeWarsJavaScriptRouterHelper {
  static get CODEWARS_JAVASCRIPT_PAGE_NAME() {
    return 'CodeWars JavaScript'
  }
  static get CODEWARS_JAVASCRIPT_PAGE_PATH() {
    return 'codewars'
  }

  static get CODEWARS_JAVASCRIPT_GENERAL_PAGE_NAME() {
    return 'CodeWars JavaScript General'
  }
  static get CODEWARS_JAVASCRIPT_GENERAL_PAGE_PATH() {
    return 'general'
  }

  static get CODEWARS_JAVASCRIPT_ARRAYS_PAGE_NAME() {
    return 'CodeWars JavaScript Arrays'
  }
  static get CODEWARS_JAVASCRIPT_ARRAYS_PAGE_PATH() {
    return 'arrays'
  }

  static get CODEWARS_JAVASCRIPT_NUMBERS_PAGE_NAME() {
    return 'CodeWars JavaScript Numbers'
  }
  static get CODEWARS_JAVASCRIPT_NUMBERS_PAGE_PATH() {
    return 'numbers'
  }

  static get CODEWARS_JAVASCRIPT_STRINGS_PAGE_NAME() {
    return 'CodeWars JavaScript Strings'
  }
  static get CODEWARS_JAVASCRIPT_STRINGS_PAGE_PATH() {
    return 'strings'
  }

  routes() {
    return {
      name: this.constructor.CODEWARS_JAVASCRIPT_PAGE_NAME,
      path: `/${this.constructor.CODEWARS_JAVASCRIPT_PAGE_PATH}`,
      component: SinglePage,
      children: [
        {
          name: this.constructor.CODEWARS_JAVASCRIPT_GENERAL_PAGE_NAME,
          path: this.constructor.CODEWARS_JAVASCRIPT_GENERAL_PAGE_PATH,
          component: CodeWarsJavaScriptGeneral
        },
        {
          name: this.constructor.CODEWARS_JAVASCRIPT_ARRAYS_PAGE_NAME,
          path: this.constructor.CODEWARS_JAVASCRIPT_ARRAYS_PAGE_PATH,
          component: CodeWarsJavaScriptArrays
        },
        {
          name: this.constructor.CODEWARS_JAVASCRIPT_NUMBERS_PAGE_NAME,
          path: this.constructor.CODEWARS_JAVASCRIPT_NUMBERS_PAGE_PATH,
          component: CodeWarsJavaScriptNumbers
        },
        {
          name: this.constructor.CODEWARS_JAVASCRIPT_STRINGS_PAGE_NAME,
          path: this.constructor.CODEWARS_JAVASCRIPT_STRINGS_PAGE_PATH,
          component: CodeWarsJavaScriptStrings
        }
      ]
    }
  }

  menuItems() {
    return {
      title: this.constructor.CODEWARS_JAVASCRIPT_PAGE_NAME,
      link: `/${this.constructor.CODEWARS_JAVASCRIPT_PAGE_PATH}`,
      subItems: [
        {
          title: this.constructor.CODEWARS_JAVASCRIPT_GENERAL_PAGE_NAME,
          link: `/${this.constructor.CODEWARS_JAVASCRIPT_PAGE_PATH}/${this.constructor.CODEWARS_JAVASCRIPT_GENERAL_PAGE_PATH}`
        },
        {
          title: this.constructor.CODEWARS_JAVASCRIPT_ARRAYS_PAGE_NAME,
          link: `/${this.constructor.CODEWARS_JAVASCRIPT_PAGE_PATH}/${this.constructor.CODEWARS_JAVASCRIPT_ARRAYS_PAGE_PATH}`
        },
        {
          title: this.constructor.CODEWARS_JAVASCRIPT_NUMBERS_PAGE_NAME,
          link: `/${this.constructor.CODEWARS_JAVASCRIPT_PAGE_PATH}/${this.constructor.CODEWARS_JAVASCRIPT_NUMBERS_PAGE_PATH}`
        },
        {
          title: this.constructor.CODEWARS_JAVASCRIPT_STRINGS_PAGE_NAME,
          link: `/${this.constructor.CODEWARS_JAVASCRIPT_PAGE_PATH}/${this.constructor.CODEWARS_JAVASCRIPT_STRINGS_PAGE_PATH}`
        }
      ]
    }
  }
}

export default new CodeWarsJavaScriptRouterHelper()
