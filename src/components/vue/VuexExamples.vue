<template>
  <div class="vuex-examples">
    <h1 class="page-title">Vuex Examples</h1>
    <div class="code-example-block">
      <div class="code-example__title">Simple Vuex Variable</div>
      <div class="code-example__description">
        Init simple vuex variable.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            export default {
              state: {
                exampleText: ''
              },
              getters: {
                GET_EXAMPLE_TEXT: state => {
                  return state.exampleText
                }
              },
              mutations: {
                SET_EXAMPLE_TEXT: (state, payload) => {
                  state.exampleText = payload
                }
              },
              actions: {
                SET_EXAMPLE_TEXT: (context, payload) => {
                  context.commit('SET_EXAMPLE_TEXT', payload)
                }
              }
            }
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Using simple vuex variable in vue component.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            computed: {
              exampleText() {
                return this.$store.getters.GET_EXAMPLE_TEXT
              }
            },
            methods: {
              setExampleText() {
                this.$store.dispatch('SET_EXAMPLE_TEXT', 'Example Text')
              }
            },
            watch: {
              exampleText() {
                console.log('Example Text Was Changed')
              }
            }
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-block">
      <div class="code-example__title">Asynchronous Vuex Variable</div>
      <div class="code-example__description">
        Init asynchronous vuex variable.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import axios from 'axios'

            export default {
              state: {
                users: undefined
              },
              getters: {
                GET_USERS: state => {
                  return state.users
                }
              },
              mutations: {
                SET_USERS: (state, payload) => {
                  state.users = payload
                }
              },
              actions: {
                SET_USERS: async (context, [page]) => {
                  axios.get(`https://gorest.co.in/public-api/users?_format=json
                  &access-token=d9RNoCGT5ERohcjWtxkJ8qkrc3o_Ap8Q8pUr&page=${page}`)
                    .then(response => {
                      context.commit('SET_USERS', response.result)
                    })
                    .catch(error => {
                      console.log(error)
                    })
                }
              }
            }
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Using asynchronous vuex variable in vue component.
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            computed: {
              users() {
                return this.$store.getters.GET_USERS
              }
            },
            watch: {
              users() {
                console.log('Users list updated')
              }
            }
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>
