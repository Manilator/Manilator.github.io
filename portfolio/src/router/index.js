import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Walls from '@/components/Walls'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
        path: '/walls',
        name: 'Walls',
        component: Walls
    }
  ]
})