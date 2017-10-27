import Vue from 'vue'
import Router from 'vue-router'
import PlayerCreation from '@/components/player-creation'
import Login from '@/components/login'
import PlayerStatus from '@/components/player-status'
import QuestList from '@/components/quest-list'
import QuestCreation from '@/components/quest-creation'
import QuestReport from '@/components/quest-report'

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
    },
    {
      path: '/status',
      name: 'PlayerStatus',
      component: PlayerStatus
    },
    {
      path: '/quest',
      name: 'QuestList',
      component: QuestList
    },
    {
      path: '/quest/new',
      name: 'QuestCreation',
      component: QuestCreation
    },
    {
      path: '/quest/report',
      name: 'QuestReport',
      component: QuestReport
    }
  ]
})
