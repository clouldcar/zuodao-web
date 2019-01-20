import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/coach/list',
      name: 'coach_list',
      component: () => import(/* webpackChunkName: "coach_list" */ './views/coach/list.vue')
    },
    {
      path: '/coach/detail',
      name: 'coach_detail',
      component: () => import(/* webpackChunkName: "coach_detail" */ './views/coach/detail.vue')
    },
    {
      path: '/tutor/list',
      name: 'tutor_list',
      component: () => import(/* webpackChunkName: "tutor_list" */ './views/tutor/list.vue')
    },
    {
      path: '/tutor/detail',
      name: 'tutor_detail',
      component: () => import(/* webpackChunkName: "tutor_detail" */ './views/tutor/detail.vue')
    },
    {
      path: '/lp/index',
      name: 'lp_index',
      component: () => import(/* webpackChunkName: "lp_index" */ './views/lp/index.vue')
    },
    {
      path: '/lp/list',
      name: 'lp_list',
      component: () => import(/* webpackChunkName: "lp_list" */ './views/lp/list.vue')
    },
    {
      path: '/lp/detail',
      name: 'lp_detail',
      component: () => import(/* webpackChunkName: "lp_detail" */ './views/lp/detail.vue')
    },
    {
      path: '/team/index',
      name: 'team_index',
      component: () => import(/* webpackChunkName: "team_index" */ './views/team/index.vue')
    },
    {
      path: '/team/detail',
      name: 'team_detail',
      component: () => import(/* webpackChunkName: "team_detail" */ './views/team/detail.vue')
    },
    {
      path: '/user/message',
      name: 'user_message',
      component: () => import(/* webpackChunkName: "user_message" */ './views/user/message.vue')
    },
    {
      path: '/user/index',
      name: 'user_index',
      component: () => import(/* webpackChunkName: "user_index" */ './views/user/index.vue')
    },
    {
      path: '/user/declaration/add',
      name: 'user_add_declaration',
      component: () => import(/* webpackChunkName: "user_add_declaration" */ './views/user/addDeclaration.vue')
    },
    {
      path: '/user/declaration/print',
      name: 'user_print_declaration',
      component: () => import(/* webpackChunkName: "user_print_declaration" */ './views/user/printDeclaration.vue')
    },
    {
      path: '/weekplan/list',
      name: 'weekplan_list',
      component: () => import(/* webpackChunkName: "weekplan_list" */ './views/weekplan/list.vue')
    },
    {
      path: '/weekplan/add',
      name: 'weekplan_add',
      component: () => import(/* webpackChunkName: "weekplan_add" */ './views/weekplan/add.vue')
    },
    {
      path: '/weekplan/detail',
      name: 'weekplan_detail',
      component: () => import(/* webpackChunkName: "weekplan_detail" */ './views/weekplan/detail.vue')
    },
    {
      path: '/member/login',
      name: 'member_login',
      component: () => import(/* webpackChunkName: "member_login" */ './views/member/login.vue')
    },
    {
      path: '/member/wx_login',
      name: 'member_wx_login',
      component: () => import(/* webpackChunkName: "member_wx_login" */ './views/member/wxLogin.vue')
    },
    {
      path: '/member/supplement',
      name: 'member_supplement',
      component: () => import(/* webpackChunkName: "member_supplement" */ './views/member/supplement.vue')
    }
  ]
})
