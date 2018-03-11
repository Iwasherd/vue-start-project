import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: require('./components/main.vue')
  },
  {
    path: '/:name',
    component: require('./components/edit.vue')
  }
]
export default new VueRouter({
  routes,
  mode: 'history'
})
