(function(e){function t(t){for(var s,r,i=t[0],c=t[1],l=t[2],p=0,_=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&_.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(_.length)_.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},o=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp1627915657255"]=window["webpackJsonp1627915657255"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0857":function(e,t,n){"use strict";n("d168")},"0d8a":function(e,t,n){},"1fc3":function(e,t,n){"use strict";n("6c68")},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("a026"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("GlobalMenu"),e._v(" "),n("router-view")],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"global-menu-wrap"},[n("div",{staticClass:"global-menu-btn",class:{active:e.isMenuVisible},on:{click:e.toggleMenuVisibility}},[n("span")]),e._v(" "),n("div",{staticClass:"global-menu-block",class:{visible:e.isMenuVisible}},[n("div",{staticClass:"global-menu-overlay",on:{click:function(t){e.isMenuVisible=!1}}}),e._v(" "),n("div",{staticClass:"global-menu-content",class:{visible:e.isMenuVisible}},[n("badger-accordion",{staticClass:"global-menu-accordion",attrs:{options:e.globalMenuAccordionOptions}},e._l(e.globalMenu,(function(t){return n("badger-accordion-item",{key:t.title},[n("template",{slot:"header"},[n("div",{staticClass:"global-menu__item"},[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"global-menu__item-arrow"})]),e._v(" "),n("template",{slot:"content"},e._l(t.subItems,(function(t){return n("router-link",{key:t.title,staticClass:"global-menu__sub-item",attrs:{to:t.link}},[e._v("\n              "+e._s(t.title)+"\n            ")])})),1)],2)})),1)],1)])])},i=[],c=n("49fa"),l={name:"GlobalMenu",components:{BadgerAccordion:c["a"],BadgerAccordionItem:c["b"]},data(){return{isMenuVisible:!1,globalMenuAccordionOptions:{openMultiplePanels:!0}}},computed:{globalMenu(){return this.$store.getters.GET_GLOBAL_MENU}},methods:{toggleMenuVisibility(){this.isMenuVisible=!this.isMenuVisible}},mounted(){},watch:{$route(){this.isMenuVisible=!1}}},u=l,p=(n("d532"),n("8603"),n("2877")),_=Object(p["a"])(u,r,i,!1,null,"d369949a",null),d=_.exports,m={name:"App",components:{GlobalMenu:d}},v=m,E=Object(p["a"])(v,a,o,!1,null,"b65c86aa",null),g=E.exports,P=n("2f62");class x{static get HOME_PAGE_NAME(){return"Home Page"}static get HOME_PAGE_PATH(){return""}static get VUE_EXAMPLES_PAGE_NAME(){return"Vue Templates Page"}static get VUE_EXAMPLES_PAGE_PATH(){return"vue"}static get UI_ELEMENTS_PAGE_NAME(){return"UI Elements Page"}static get UI_ELEMENTS_PAGE_PATH(){return"ui-elements"}static get CODEWARS_PAGE_NAME(){return"CodeWars Page"}static get CODEWARS_PAGE_PATH(){return"codewars"}}var A=new x;class f{static get HOME_PAGE_NAME(){return"Vue Examples"}static get HOME_PAGE_PATH(){return"/"}static get VUEX_EXAMPLES_PAGE_NAME(){return"Vuex Examples"}static get VUEX_EXAMPLES_PAGE_PATH(){return"vuex"}static get ROUTER_EXAMPLES_PAGE_NAME(){return"Router Examples"}static get ROUTER_EXAMPLES_PAGE_PATH(){return"router"}static get AXIOS_EXAMPLES_PAGE_NAME(){return"Axios Examples"}static get AXIOS_EXAMPLES_PAGE_PATH(){return"axios"}}var b=new f,h={state:{globalMenu:[{title:"Vue Templates",link:"/"+A.constructor.VUE_EXAMPLES_PAGE_PATH,subItems:[{title:b.constructor.VUEX_EXAMPLES_PAGE_NAME,link:`/${A.constructor.VUE_EXAMPLES_PAGE_PATH}/${b.constructor.VUEX_EXAMPLES_PAGE_PATH}`},{title:b.constructor.ROUTER_EXAMPLES_PAGE_NAME,link:`/${A.constructor.VUE_EXAMPLES_PAGE_PATH}/${b.constructor.ROUTER_EXAMPLES_PAGE_PATH}`},{title:b.constructor.AXIOS_EXAMPLES_PAGE_NAME,link:`/${A.constructor.VUE_EXAMPLES_PAGE_PATH}/${b.constructor.AXIOS_EXAMPLES_PAGE_PATH}`}]},{title:"UI Elements",link:"/"+A.constructor.UI_ELEMENTS_PAGE_PATH,subItems:[{title:"SubTitle01",link:""},{title:"SubTitle02",link:""},{title:"SubTitle03",link:""}]},{title:"CodeWars",link:"/"+A.constructor.CODEWARS_PAGE_PATH,subItems:[{title:"SubTitle01",link:""},{title:"SubTitle02",link:""},{title:"SubTitle03",link:""}]}]},getters:{GET_GLOBAL_MENU:e=>e.globalMenu}},S=n("bc3a"),T=n.n(S),C={state:{users:void 0,usersPagesCount:void 0},getters:{GET_USERS:e=>e.users,USERS_PAGES_COUNT:e=>e.usersPagesCount},mutations:{SET_USERS:(e,t)=>{e.users=t},SET_USERS_PAGES_COUNT:(e,t)=>{e.usersPagesCount=t}},actions:{SET_USERS:async(e,[t])=>{T.a.get("https://gorest.co.in/public-api/users?_format=json\n\t\t\t&access-token=d9RNoCGT5ERohcjWtxkJ8qkrc3o_Ap8Q8pUr&page="+t).then(t=>{e.commit("SET_USERS",t.result),e.commit("SET_USERS_PAGES_COUNT",t["_meta"].pageCount)}).catch(e=>{console.log(e)})}}};s["default"].use(P["a"]);const M=new P["a"].Store({modules:{globalMenu:h,users:C}});var G=n("8c4f"),X=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner"},[n("div",{staticClass:"banner-ttl"},[e._v("Code Examples")]),e._v(" "),n("img",{staticClass:"banner-img",attrs:{src:"images/banner-bg.jpg",alt:""}})])}],w={name:"HomePage"},R=w,L=(n("7bf4"),Object(p["a"])(R,X,U,!1,null,"4cc59edf",null)),y=L.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner"},[n("div",{staticClass:"banner-ttl"},[e._v("Page 404")]),e._v(" "),n("img",{staticClass:"banner-img",attrs:{src:"images/banner-bg.jpg",alt:""}})])}],$={name:"Page404"},k=$,j=(n("1fc3"),Object(p["a"])(k,O,V,!1,null,"1d12d9de",null)),H=j.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"single-page"},[n("div",{staticClass:"container"},[n("router-view")],1)])},I=[],q={name:"SinglePage"},W=q,B=(n("0857"),Object(p["a"])(W,N,I,!1,null,"27773411",null)),F=B.exports,D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},J=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vuex-examples"},[n("h1",{staticClass:"page-title"},[e._v("Vuex Examples")]),e._v(" "),n("div",{staticClass:"code-example-wrap"},[n("div",{staticClass:"code-example__title"},[e._v("Simple Vuex Variable")]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Init simple vuex variable.\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-javascript"},[e._v("\n          export default {\n            state: {\n              exampleText: ''\n            },\n            getters: {\n              GET_EXAMPLE_TEXT: state => {\n                return state.exampleText\n              }\n            },\n            mutations: {\n              SET_EXAMPLE_TEXT: (state, payload) => {\n                state.exampleText = payload\n              }\n            },\n            actions: {\n              SET_EXAMPLE_TEXT: (context, payload) => {\n                context.commit('SET_EXAMPLE_TEXT', payload)\n              }\n            }\n          }\n        ")]),e._v("\n      ")])]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Using simple vuex variable in vue component.\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-javascript"},[e._v("\n          computed: {\n            exampleText() {\n              return this.$store.getters.GET_EXAMPLE_TEXT\n            }\n          },\n          methods: {\n            setExampleText() {\n              this.$store.dispatch('SET_EXAMPLE_TEXT', 'Example Text')\n            }\n          },\n          watch: {\n            exampleText() {\n              console.log('Example Text Was Changed')\n            }\n          }\n        ")]),e._v("\n      ")])])]),e._v(" "),n("div",{staticClass:"code-example-wrap"},[n("div",{staticClass:"code-example__title"},[e._v("Asynchronous Vuex Variable")]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Init asynchronous vuex variable.\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-javascript"},[e._v("\n          import axios from 'axios'\n\n          export default {\n            state: {\n              users: undefined\n            },\n            getters: {\n              GET_USERS: state => {\n                return state.users\n              }\n            },\n            mutations: {\n              SET_USERS: (state, payload) => {\n                state.users = payload\n              }\n            },\n            actions: {\n              SET_USERS: async (context, [page]) => {\n                axios.get(`https://gorest.co.in/public-api/users?_format=json\n                &access-token=d9RNoCGT5ERohcjWtxkJ8qkrc3o_Ap8Q8pUr&page=${page}`)\n                  .then(response => {\n                    context.commit('SET_USERS', response.result)\n                  })\n                  .catch(error => {\n                    console.log(error)\n                  })\n              }\n            }\n          }\n        ")]),e._v("\n      ")])]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Using asynchronous vuex variable in vue component.\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-javascript"},[e._v("\n          computed: {\n            users() {\n              return this.$store.getters.GET_USERS\n            }\n          },\n          watch: {\n            users() {\n              console.log('Users list updated')\n            }\n          }\n        ")]),e._v("\n      ")])])])])}],Q=n("c197"),z=n.n(Q),K=(n("416b"),n("826c"),n("867a"),{name:"VuexExamples",components:{},computed:{exampleText(){return this.$store.getters.GET_EXAMPLE_TEXT},users(){return this.$store.getters.GET_USERS}},methods:{setExampleText(){this.$store.dispatch("SET_EXAMPLE_TEXT","Example Text")}},mounted(){window.Prism=window.Prism||{},window.Prism.manual=!0,z.a.highlightAll(),this.$store.dispatch("SET_USERS",[1])}}),Y=K,Z=(n("f808"),Object(p["a"])(Y,D,J,!1,null,"52b2404e",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vuex-examples"},[n("h1",{staticClass:"page-title"},[e._v("Axios Examples")]),e._v(" "),n("div",{staticClass:"code-example-wrap"},[n("div",{staticClass:"code-example__title"},[e._v("Simple Axios Using")]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Simple GET and POST requests\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-javascript"},[e._v("\n          import axios from 'axios'\n\n          axios.get(`url-request`)\n            .then(response => {\n              console.log(response)\n            })\n            .catch(error => {\n              console.log(error)\n            })\n\n          axios.post(`url-request`, {\n            body: {\n              firstField: 'firstFieldValue',\n              secondField: 'secondFieldValue'\n            }\n          })\n            .then(response => {\n            console.log(response)\n            })\n            .catch(e => {\n              this.errors.push(e)\n            })\n        ")]),e._v("\n      ")])])]),e._v(" "),n("div",{staticClass:"code-example-wrap"},[n("div",{staticClass:"code-example__title"},[e._v("Create And Using Axios Service")]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Create axios service\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-javascript"},[e._v("\n          import Vue from 'vue'\n          import axios from 'axios'\n\n          const $axios = axios.create({\n            // customized XMLHttpRequest wrapper library\n            headers: {\n              'X-Requested-With': 'XMLHttpRequest'\n            },\n            withCredentials: true,\n            baseURL: ConstantService.domain + '/api/v1'\n          })\n          // global request interceptor\n          $axios.interceptors.request.use((config) => {\n            config.params = config.params || {}\n            config.params['session-token'] = 'session-token'\n            config.headers.Accept = 'application/json'\n            return config\n          })\n\n          // global response interceptor\n          $axios.interceptors.response.use(\n            response => {\n              console.log(response)\n              return response\n            },\n            error => {\n              console.log(error)\n              return error\n            }\n          )\n\n          Vue.prototype.$axios = $axios\n\n          export default $axios\n        ")]),e._v("\n      ")])]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Using axios service with API helper\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-javascript"},[e._v("\n          import $axios from '@/services/axios.service'\n\n          class UsersApiHelper {\n            getUsers(page, quantity) {\n              return $axios.get(`/users/users-full-list?page=${page}&quantity=${quantity}`)\n            }\n\n            addNewUser(userFirstName, userLastName, userAge) {\n              const data = new FormData()\n              data.append('user-first-name', userFirstName)\n              data.append('user-last-name', userLastName)\n              data.append('user-age', userAge)\n            }\n          }\n\n          export default new UsersApiHelper()\n        ")]),e._v("\n      ")])])])])}],se={name:"AxiosExamples",props:[],components:{},computed:{},methods:{},mounted(){window.Prism=window.Prism||{},window.Prism.manual=!0,z.a.highlightAll()},watch:{exampleText(){console.log("Example Text Was Changed")}}},ae=se,oe=Object(p["a"])(ae,te,ne,!1,null,"d650b5b6",null),re=oe.exports,ie=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ce=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vuex-examples"},[n("h1",{staticClass:"page-title"},[e._v("Router Examples")]),e._v(" "),n("div",{staticClass:"code-example-wrap"},[n("div",{staticClass:"code-example__title"},[e._v("Routes Structure")]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Creating routes structure in routes.js\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-javascript"},[e._v("\n          import VueRouter from 'vue-router'\n\n          import HomePage from '@/components/pages/HomePage.vue'\n          import Page404 from '@/components/pages/Page404.vue'\n          import SinglePage from '@/components/pages/SinglePage.vue'\n\n          import SubPage1 from '@/components/sub-pages/SubPage1.vue'\n          import SubPage2 from '@/components/sub-pages/SubPage2.vue'\n          import SubPage3 from '@/components/sub-pages/SubPage13.vue'\n\n          export default new VueRouter({\n            // mode: 'history',\n            routes: [\n              {\n                name: 'Home Page',\n                path: '/',\n                component: HomePage\n              },\n              {\n                name: 'Single Page',\n                path: `/single-page`,\n                component: SinglePage,\n                children: [\n                  {\n                    name: 'Sub Page 1',\n                    path: 'sub-page-1',\n                    component: SubPage1\n                  },\n                  {\n                    name: 'Sub Page 2',\n                    path: 'sub-page-2',\n                    component: SubPage2\n                  },\n                  {\n                    name: 'Sub Page 2',\n                    path: 'sub-page-2',\n                    component: SubPage2\n                  }\n                ]\n              },\n              {\n                path: '*',\n                component: Page404\n              }\n            ],\n            scrollBehavior (to, from, savedPosition) {\n              if (savedPosition) {\n                return savedPosition\n              } else {\n                return { x: 0, y: 0 }\n              }\n            }\n          })\n        ")]),e._v("\n      ")])])]),e._v(" "),n("div",{staticClass:"code-example-wrap"},[n("div",{staticClass:"code-example__title"},[e._v("Using Router Inside Vue Component")]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Redirect to another page in js code\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-javascript"},[e._v("\n          this.$router.push(`/single-page/sub-page`)\n        ")]),e._v("\n      ")])]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Redirect to another page in html code\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-markup"},[e._v("\n          "),n("script",{attrs:{type:"prism-html-markup"}},[e._v('\n            <router-link :to="/single-page/sub-page">\n              Go To Sub Page\n            </router-link>\n          ')]),e._v("\n        ")]),e._v("\n      ")])]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Redirect to previous page in js code\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-javascript"},[e._v("\n          this.$router.go(-1)\n        ")]),e._v("\n      ")])]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Redirect to previous page in html code\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-markup"},[e._v("\n          "),n("script",{attrs:{type:"prism-html-markup"}},[e._v('\n            <div class="back-button" @click="$router.go(-1)">\n              Go Back\n            </div>\n          ')]),e._v("\n        ")]),e._v("\n      ")])]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Get route params and queries\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-javascript"},[e._v("\n          this.$route.params.paramsName\n          this.$route.query.queryName\n        ")]),e._v("\n      ")])])]),e._v(" "),n("div",{staticClass:"code-example-wrap"},[n("div",{staticClass:"code-example__title"},[e._v("Router Init")]),e._v(" "),n("div",{staticClass:"code-example__description"},[e._v("\n      Router init with dynamic page title\n    ")]),e._v(" "),n("div",{staticClass:"code-example"},[n("pre",[e._v("        "),n("code",{staticClass:"language-javascript"},[e._v("\n          import VueRouter from 'vue-router'\n          import router from './routes'\n          Vue.use(VueRouter)\n          router.afterEach((to, from) => {\n            Vue.nextTick( () => {\n              document.title = to.name ? to.name : 'Default Page Title'\n            })\n          })\n        ")]),e._v("\n      ")])])])])}],le={name:"RouterExamples",props:[],components:{},computed:{},methods:{},mounted(){window.Prism=window.Prism||{},window.Prism.manual=!0,z.a.highlightAll()},watch:{}},ue=le,pe=Object(p["a"])(ue,ie,ce,!1,null,"64105896",null),_e=pe.exports,de=new G["a"]({routes:[{name:A.constructor.HOME_PAGE_NAME,path:"/",component:y,children:[{name:b.constructor.VUEX_EXAMPLES_PAGE_NAME,path:b.constructor.VUEX_EXAMPLES_PAGE_PATH,component:ee}]},{name:A.constructor.VUE_EXAMPLES_PAGE_NAME,path:"/"+A.constructor.VUE_EXAMPLES_PAGE_PATH,component:F,children:[{name:b.constructor.VUEX_EXAMPLES_PAGE_NAME,path:b.constructor.VUEX_EXAMPLES_PAGE_PATH,component:ee},{name:b.constructor.ROUTER_EXAMPLES_PAGE_NAME,path:b.constructor.ROUTER_EXAMPLES_PAGE_PATH,component:_e},{name:b.constructor.AXIOS_EXAMPLES_PAGE_NAME,path:b.constructor.AXIOS_EXAMPLES_PAGE_PATH,component:re}]},{path:"*",component:H}],scrollBehavior(e,t,n){return n||{x:0,y:0}}}),me=n("5c96"),ve=n.n(me),Ee=n("f13c"),ge=n.n(Ee),Pe=n("caf9"),xe=n("2ead"),Ae=n.n(xe),fe=n("e37d"),be=n("0cfa"),he=n.n(be),Se=n("c3cc"),Te=n("e057"),Ce=n.n(Te);n("0d8a");s["default"].use(P["a"]),s["default"].use(G["a"]),de.afterEach((e,t)=>{s["default"].nextTick(()=>{document.title=e.name?e.name:"Code Examples"})}),s["default"].use(ve.a),s["default"].use(ge.a,{duration:500,easing:"ease-out",offset:700}),s["default"].config.productionTip=!1,s["default"].use(Pe["a"],{preLoad:1.3,attempt:1}),s["default"].use(Ae.a),s["default"].use(fe["a"]),s["default"].use(he.a),s["default"].use(Se["default"]),s["default"].use(Ce.a),new s["default"]({store:M,render:e=>e(g),router:de}).$mount("#app")},"5b70":function(e,t,n){},"5e35":function(e,t,n){},"6c68":function(e,t,n){},"7bf4":function(e,t,n){"use strict";n("5b70")},8136:function(e,t,n){},8603:function(e,t,n){"use strict";n("5e35")},d168:function(e,t,n){},d532:function(e,t,n){"use strict";n("8136")},d72f:function(e,t,n){},f808:function(e,t,n){"use strict";n("d72f")}});
//# sourceMappingURL=app.js.map