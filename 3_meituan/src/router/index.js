import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from '@/views/detail/index'
import Index from '@/views/home/index'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:Index
  },
  {
    path:"/detail",
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
