<template>
  <div class="single-page">
    <div class="single-page-sidebar">
      <div class="single-page-nav-title">{{ sidebarNav.title }}</div>
      <div class="single-page-nav">
        <router-link
          v-for="item in sidebarNav.subItems"
          :key="item.title"
          :to="item.link"
          class="single-page-nav__item"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
    <div class="single-page-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SinglePage',
    computed: {
      sidebarNav() {
        let sidebarNav = undefined
        let globalMenu = this.$store.getters.GET_GLOBAL_MENU
        globalMenu.forEach(item => {
          if(this.$route.path.includes(item.link)) {
            sidebarNav = item
          }
        })
        return sidebarNav
      }
    },
    mounted() {
      console.log(this.$route.path)
    }
  }
</script>

<style scoped lang="scss">
.single-page {
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.single-page-sidebar {
  display: none;

  @media only screen and (min-width: 1200px) {
    display: block;
    width: 400px;
    height: 100vh;
    background: #000;
    padding: 30px 20px;
  }
}

.single-page-nav-title {
  font-family: $secondary-font-family;
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 20px;
  color: $secondary-text-color;
}

.single-page-nav {
  display: flex;
  flex-direction: column;
}

.single-page-nav__item {
  font-family: $primary-font-family;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  color: $primary-text-color;
  cursor: pointer;
  transition: all, .25s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: $code-bg-color;
  }
}
</style>