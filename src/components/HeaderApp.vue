<template>
  <header class="header">
    <div class="header-button"
      :class="{'active': isMenuVisible}"
      @click="toggleMenuVisibility"
    ><span></span>
    </div>
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
      isMenuVisible: false,
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
  methods: {
    toggleMenuVisibility() {
      this.isMenuVisible = !this.isMenuVisible
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
.header-button {
  display: block;
  width: 40px;
  height: 40px;
  padding: 6px;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;

  @media only screen and (min-width: 760px) {
    top: 30px;
    left: 30px;
  }

  @media only screen and (min-width: 760px) {
    top: 50px;
    left: 50px;
  }

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 2px;
    background-color: black;
    backface-visibility: hidden;
    border-radius: 2px;
    transition: all, .25s;

    &:before, &:after  {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: black;
      backface-visibility: hidden;
      border-radius: 2px;
      transition: all, .25s;
    }

    &:before {
      top: 9px;
    }

    &:after {
      top: 18px;
    }
  }

  &.active {
    span {
      background: transparent;

      &:before {
        transform: rotate(45deg) translate(-1px, 0px);
      }

      &:after {
        transform: rotate(-45deg) translate(6px, -7px);
      }
    }
  }
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