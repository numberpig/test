import Vue from 'vue'
import Vuex from 'vuex'
// import VueResource from 'vue-resource'
import axios from 'axios'

import VueRouter from 'vue-router'
import Login from './Login.vue'
Vue.use(VueRouter)
// Vue.use(VueResource)
Vue.use(Vuex)
Vue.prototype.http = axios
/* eslint-disable no-new */
new Vue({
  el: '#login',
  template: '<Login></Login>',
  components: {
    Login
  }
})
