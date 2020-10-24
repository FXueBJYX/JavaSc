import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import test from '../views/test'
import A from '../views/A'
import B from '../views/B'
import Vuex from '../views/Vuex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    children:[{
      path:'a',
      component:A
    },{
      path:'b',
      component:B
    }
  ]
  },
  {
    path:'/test',
    name:'test',
    component:test
  },
  {
    // 定向页面  直接到home下的A
    path:'/',
    redirect:'/home/A'
  },
  {
    path:'/Vuex',
    component:Vuex
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
