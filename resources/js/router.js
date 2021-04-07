import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home/Home.component.vue'
import Login from './views/Login/Login.component.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/welcome',
      components: {
        default: Home,
      },
      meta: {
        requiresAuth: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: Login,
      },
      meta: {
        requiresAuth: false,
      }
    },
    {
      path: '/404',
      name: '404',
      component: {
        default: NotFound,
      },
      meta: {
        requiresAuth: false,
      }
    },
    {
      path: '*',
      redirect: '/404',
    },
  ]
})