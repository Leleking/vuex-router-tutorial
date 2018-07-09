// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './router/routes.js'
import { store} from './store/store.js'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store:store,
  el: '#app',
  router,
  render: h=> h(App)
})
