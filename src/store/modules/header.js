import RouterHelper from '@/helpers/router.helper'

export default {
  state: {
    headerMenu: [
      {
        itemTitle: 'Vue Templates',
        itemLink: `/${RouterHelper.constructor.VUE_TEMPLATES_PAGE_PATH}`
      },
      {
        itemTitle: 'UI Elements',
        itemLink: `/${RouterHelper.constructor.UI_ELEMENTS_PAGE_PATH}`
      },
      {
        itemTitle: 'CodeWars',
        itemLink: `/${RouterHelper.constructor.CODEWARS_PAGE_PATH}`
      }
    ]
  },
  getters: {
    GET_HEADER_MENU: state => {
      return state.cabinetConfig
    }
  }
}