import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes.js'
import Particles from 'particles.js'


Vue.use(Particles)
Vue.use(VueRouter)


new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')


let loading = false;

