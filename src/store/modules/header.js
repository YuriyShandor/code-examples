export default {
  state: {
    headerMenu: [
      {
        itemTitle: 'Vue',
        itemLink: '/vue'
      },
      {
        itemTitle: 'UI Elements',
        itemLink: '/ui-elements'
      },
      {
        itemTitle: 'CodeWars',
        itemLink: '/codewars'
      }
    ]
  },
  getters: {
    GET_HEADER_MENU: state => {
      return state.cabinetConfig
    }
  }
}