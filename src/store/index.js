import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cases from './cases'

export default new Vuex.Store({
  modules: {
    cases
  }
}) 