<template>
  <section class="section-users-list">
    <div class="users-list">
      <router-link
        class="users-list-item"
        v-for="item in usersList"
        :key="item.id"
        :to="'/user-' + item.id + '/articles'"
      >
        <div
          class="users-list-item__name"
          @click="setUserArticles(item.id)"
        >
          {{ item.first_name + ' ' + item.last_name }}
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
/* eslint-disable */

export default {
  name: 'UsersListPage',
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    usersList() {
      let usersList = this.$store.getters.USERS
      if (usersList !== undefined) {
        return usersList
      }
      return undefined
    },

    usersPageCount: function () {
      let usersPageCount = this.$store.getters.USERS_PAGES_COUNT
      if (usersPageCount !== undefined) {
        return usersPageCount
      }
      return undefined
    },
  },
  methods: {
    handleCurrentChange(val) {
      window.scrollTo( 0, 0 );
      this.$store.dispatch('SET_USERS', [val])
    },

    setUserArticles(userId) {
      console.log(userId)
      this.$store.dispatch('SET_USER_ARTICLES', [1])
    }
  }
}
</script>

<style scoped lang="scss">
  .section-users-list {
    width: 100%;
  }

  .users-list {
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
  }

  .users-list-item {
    width: 100%;
    padding: 10px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    padding: 20px;
    border-radius: 5px;
    transition: all, .3s;

    &:nth-child(odd) {
      background: #fafafa;
    }

    &:nth-child(even) {
      background: #e0e0e0;
    }

    &:hover {
      background: #757575;
      color: #FF7A74;
    }
  }

  .users-list-item__name {
    text-transform: capitalize;
  }
</style>
