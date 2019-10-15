import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store/store'
import VueResource from 'vue-resource'

Vue.use(BootstrapVue)

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: "history"
})

Vue.use(VueResource)
Vue.http.options.root = "https://vue-resource-f5461.firebaseio.com/"

Vue.filter('currency', value => {
  return `$${value.toLocaleString()}`
})

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})
