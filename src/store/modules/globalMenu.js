import PagesRouterHelper from '@/helpers/router/pagesRouter.helper'
import VueExamplesRouterHelper from '@/helpers/router/vueExamplesRouter.helper'
import JavaScriptExamplesRouterHelper from '@/helpers/router/javascriptExamplesRouter.helper'
import UIElementsRouterHelper from '@/helpers/router/UIElementsRouter.helper'

export default {
  state: {
    globalMenu: [
      {
        title: PagesRouterHelper.constructor.VUE_EXAMPLES_PAGE_NAME,
        link: `/${PagesRouterHelper.constructor.VUE_EXAMPLES_PAGE_PATH}`,
        subItems: [
          {
            title: VueExamplesRouterHelper.constructor.VUEX_EXAMPLES_PAGE_NAME,
            link: `/${PagesRouterHelper.constructor.VUE_EXAMPLES_PAGE_PATH}/${VueExamplesRouterHelper.constructor.VUEX_EXAMPLES_PAGE_PATH}`
          },
          {
            title: VueExamplesRouterHelper.constructor.ROUTER_EXAMPLES_PAGE_NAME,
            link: `/${PagesRouterHelper.constructor.VUE_EXAMPLES_PAGE_PATH}/${VueExamplesRouterHelper.constructor.ROUTER_EXAMPLES_PAGE_PATH}`
          },
          {
            title: VueExamplesRouterHelper.constructor.AXIOS_EXAMPLES_PAGE_NAME,
            link: `/${PagesRouterHelper.constructor.VUE_EXAMPLES_PAGE_PATH}/${VueExamplesRouterHelper.constructor.AXIOS_EXAMPLES_PAGE_PATH}`
          }
        ]
      },
      {
        title: PagesRouterHelper.constructor.JAVASCRIPT_EXAMPLES_PAGE_NAME,
        link: `/${PagesRouterHelper.constructor.JAVASCRIPT_EXAMPLES_PAGE_PATH}`,
        subItems: [
          {
            title: JavaScriptExamplesRouterHelper.constructor.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_NAME,
            link: `/${PagesRouterHelper.constructor.JAVASCRIPT_EXAMPLES_PAGE_PATH}/${JavaScriptExamplesRouterHelper.constructor.JAVASCRIPT_GENERAL_EXAMPLES_PAGE_PATH}`
          },
          {
            title: JavaScriptExamplesRouterHelper.constructor.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_NAME,
            link: `/${PagesRouterHelper.constructor.JAVASCRIPT_EXAMPLES_PAGE_PATH}/${JavaScriptExamplesRouterHelper.constructor.JAVASCRIPT_ARRAYS_EXAMPLES_PAGE_PATH}`
          }
        ]
      },
      {
        title: PagesRouterHelper.constructor.UI_ELEMENTS_PAGE_NAME,
        link: `/${PagesRouterHelper.constructor.UI_ELEMENTS_PAGE_PATH}`,
        subItems: [
          {
            title: UIElementsRouterHelper.constructor.MODALS_EXAMPLES_PAGE_NAME,
            link: `/${PagesRouterHelper.constructor.UI_ELEMENTS_PAGE_PATH}/${UIElementsRouterHelper.constructor.MODALS_EXAMPLES_PAGE_PATH}`
          }
        ]
      },
      {
        title: 'CodeWars',
        link: `/${PagesRouterHelper.constructor.CODEWARS_PAGE_PATH}`,
        subItems: [
          {
            title: 'SubTitle01',
            link: ''
          },
          {
            title: 'SubTitle02',
            link: ''
          },
          {
            title: 'SubTitle03',
            link: ''
          },
        ]
      }
    ]
  },
  getters: {
    GET_GLOBAL_MENU: state => {
      return state.globalMenu
    }
  }
}