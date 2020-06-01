import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes.js'
import Particles from 'particles.js'
import VueScrollmagic from 'vue-scrollmagic'
import VueResource from 'vue-resource'
import store from './store'
import VuePageTransition from 'vue-page-transition'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTilt from 'vue-tilt.js'
import VueLazyload from 'vue-lazyload'

import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VuePageTransition)
Vue.use(VueResource)
Vue.use(VueScrollmagic)
Vue.use(VueTilt)
Vue.use(Particles)
Vue.use(VueRouter)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})


