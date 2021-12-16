import PagesRouterHelper from '@/helpers/router/pagesRouter.helper'
import VueExamplesRouterHelper from '@/helpers/router/vueExamplesRouter.helper'
import JavaScriptExamplesRouterHelper from '@/helpers/router/javascriptExamplesRouter.helper'
import UIElementsRouterHelper from '@/helpers/router/UIElementsRouter.helper'

export default {
  state: {
    globalMenu: [
      VueExamplesRouterHelper.menuItems(),
      JavaScriptExamplesRouterHelper.menuItems(),
      UIElementsRouterHelper.menuItems(),
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