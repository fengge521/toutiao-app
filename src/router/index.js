import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('../views/layout'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('../views/home')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('../views/qa')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('../views/video')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my')
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search')
  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: () => import('@/views/article'),
    props: true
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: () => import('@/views/user')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/profile')
  }
]

const router = new VueRouter({
  routes
})

export default router
