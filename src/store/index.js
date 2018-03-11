import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.http.options.root = '/src/components'

import tasks from './modules/tasks'

export const store = new Vuex.Store({
  getters: {
    $http: () => (VueResource)
  },
  modules: {
    tasks
  }
})

export default store
