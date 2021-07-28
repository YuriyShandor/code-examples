<template>
  <div class="vuex-examples">
    <h1 class="page-title">Vuex Examples</h1>
    <div class="code-example-wrap">
      <div class="code-example__title">Single Vuex Variable Init</div>
      <div class="code-example__description">
        Single init of store, getter, setter and action.
      </div>
      <div class="code-example">
        <div v-highlight>
          <pre class="language-javascript">
            <code>
              let isPalindrome = (word) => {
              let [length, result] = [word.length, true];
              for (let i = 0; i &lt; length / 2; i++) {
              if (word[i] !== word[length - 1 - i]) result = false;
              }
              return result;
              }
              module.exports = isPalindrome;
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <div v-highlight>
          <pre class="language-html">
            <code>
              <div class="global-menu-btn"
                   :class="{'active': isMenuVisible}"
                   @click="isMenuVisible = !isMenuVisible"
              ><span></span>
              </div>
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <div class="code-example">
          <div v-highlight>
          <pre class="language-jsx">
            <code>
              <div class="global-menu-btn"
                   :class="{'active': isMenuVisible}"
                   @click="isMenuVisible = !isMenuVisible"
              ><span></span>
              </div>
            </code>
          </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title"></div>
      <div class="code-example__description"></div>
      <div class="code-example">
        <div class="code-example">
          <div v-highlight>
          <pre class="language-scss">
            <code>
              .global-menu-btn {
  display: block;
  width: 50px;
  height: 41px;
  padding: 10px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: $secondary-bg-color;
  border: 1px solid $secondary-text-color;
  z-index: 1001;
  cursor: pointer;
  transition: all, .25s;

  &:hover {
    border: 1px solid $hover-text-color;

    span {
      background-color: $hover-text-color;

      &:before, &:after {
        background-color: $hover-text-color;
      }
    }
  }

  @media only screen and (min-width: 700px) {
    bottom: 15px;
    right: 15px;
  }

  @media only screen and (min-width: 1200px) {
    bottom: 20px;
    right: 20px;
  }

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 2px;
    background-color: $secondary-text-color;
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
      background-color: $secondary-text-color;
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
            </code>
          </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>/* eslint-disable */

export default {
  name: 'VuexExamples',
  components: {

  }
}
</script>

<style scoped lang="scss">
.banner {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
}

.banner-ttl {
  width: 100%;
  background: $primary-bg-color;
  padding: 30px 0;
  border-top: 10px solid $secondary-text-color;
  border-bottom: 10px solid $secondary-text-color;
  position: relative;
  z-index: 2;
  font-family: $secondary-font-family;
  font-size: 40px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  color: $secondary-text-color;

  @media only screen and (min-width: 700px) {
    font-size: 60px;
    padding: 40px 0;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 80px;
    padding: 50px 0;
  }
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>