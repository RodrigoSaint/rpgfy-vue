import Vue from 'vue'
import Router from 'vue-router'
import PlayerCreation from '@/components/player-creation'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlayerCreation',
      component: PlayerCreation
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
