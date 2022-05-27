import axios from 'axios';

export default {
  state: {
    users: undefined,
    usersPagesCount: undefined,
  },
  getters: {
    GET_USERS: (state) => state.users,

    USERS_PAGES_COUNT: (state) => state.usersPagesCount,
  },
  mutations: {
    SET_USERS: (state, payload) => {
      state.users = payload;
    },

    SET_USERS_PAGES_COUNT: (state, payload) => {
      state.usersPagesCount = payload;
    },
  },
  actions: {
    SET_USERS: async (context, [page]) => {
      axios.get(`https://gorest.co.in/public-api/users?_format=json
			&access-token=d9RNoCGT5ERohcjWtxkJ8qkrc3o_Ap8Q8pUr&page=${page}`)
        .then((response) => {
          context.commit('SET_USERS', response.result);
          context.commit('SET_USERS_PAGES_COUNT', response._meta.pageCount);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
