import RouterHelper from '@/helpers/router.helper'

export default {
  state: {
    headerMenu: [
      {
        title: 'Vue Templates',
        link: `/${RouterHelper.constructor.VUE_TEMPLATES_PAGE_PATH}`,
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
      },
      {
        title: 'UI Elements',
        link: `/${RouterHelper.constructor.UI_ELEMENTS_PAGE_PATH}`,
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
      },
      {
        title: 'CodeWars',
        link: `/${RouterHelper.constructor.CODEWARS_PAGE_PATH}`,
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
    GET_HEADER_MENU: state => {
      return state.headerMenu
    }
  }
}