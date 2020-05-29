import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes.js'
import Particles from 'particles.js'
import VueScrollmagic from 'vue-scrollmagic'
import VueResource from 'vue-resource'
import store from './store'
import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)
Vue.use(VueResource)
Vue.use(VueScrollmagic)
Vue.use(Particles)
Vue.use(VueRouter)


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

