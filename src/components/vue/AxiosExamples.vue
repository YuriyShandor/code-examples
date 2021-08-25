<template>
  <div class="axios-examples">
    <h1 class="page-title">Axios Examples</h1>
    <div class="code-example-wrap">
      <div class="code-example__title">Simple Axios Using</div>
      <div class="code-example__description">
        Simple GET and POST requests
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import axios from 'axios'

            axios.get(`url-request`).then(response => {
                console.log(response)
              }).catch(error => {
                console.log(error)
              })

            axios.post(`url-request`, {
              body: {
                firstField: 'firstFieldValue',
                secondField: 'secondFieldValue'
              }
            }).then(response => {
                console.log(response)
              }).catch(e => {
                this.errors.push(e)
              })
          </code>
        </pre>
      </div>
    </div>
    <div class="code-example-wrap">
      <div class="code-example__title">Create And Using Axios Service</div>
      <div class="code-example__description">
        Create axios service
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import Vue from 'vue'
            import axios from 'axios'

            const $axios = axios.create({
              // customized XMLHttpRequest wrapper library
              headers: {
                'X-Requested-With': 'XMLHttpRequest'
              },
              withCredentials: true,
              baseURL: domain + '/api/v1'
            })
            // global request interceptor
            $axios.interceptors.request.use((config) => {
              config.params = config.params || {}
              config.params['session-token'] = 'session-token'
              config.headers.Accept = 'application/json'
              return config
            })

            // global response interceptor
            $axios.interceptors.response.use(
              response => {
                console.log(response)
                return response
              },
              error => {
                console.log(error)
                return error
              }
            )

            Vue.prototype.$axios = $axios

            export default $axios
          </code>
        </pre>
      </div>
      <div class="code-example__description">
        Using axios service with API helper
      </div>
      <div class="code-example">
        <pre>
          <code class="language-javascript">
            import $axios from '@/services/axios.service'

            class UsersApiHelper {
              getUsers(page, quantity) {
                return $axios.get(`/users/users-full-list?page=${page}&quantity=${quantity}`)
              }

              addNewUser(userFirstName, userLastName, userAge) {
                const data = new FormData()
                data.append('user-first-name', userFirstName)
                data.append('user-last-name', userLastName)
                data.append('user-age', userAge)
              }
            }

            export default new UsersApiHelper()
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-scss'

export default {
  name: 'AxiosExamples',
  mounted() {
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()
  }
}
</script>

<style scoped lang="scss">

</style>