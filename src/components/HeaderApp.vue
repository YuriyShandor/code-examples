<template>
  <header class="header">
    <div class="container">
      <nav class="header-nav">
        <router-link
          class="header-nav__item"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          {{ item.title }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'Slick',
          link: '/slick'
        },
        {
          title: 'Smooth Scroll',
          link: '/smooth-scroll'
        },
        {
          title: 'Users List',
          link: '/users'
        },
      ]
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
}

.header-nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 40px 90px rgba(179, 179, 179, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 10px;
  z-index: 1000;
}

.header-nav__item {
  font-size: 16px;
  font-weight: 500;
}
</style>