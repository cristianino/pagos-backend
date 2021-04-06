import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home/Home.component.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/dashboard',
      components: {
        default: Home,
      },
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/404',
      name: '404',
      component: {
        default: NotFound,
      },
    },
    {
      path: '*',
      redirect: '/404',
    },
  ]
})