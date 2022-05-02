import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import ChatView from '../pages/chat.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/user/id/chat',
    name: 'chat-comp',
    component: () => import('../pages/chat-comp.vue')
  },
  {
    path: '/message-list',
    name: 'message-list',
    component: () => import('../pages/message-list.vue')
  },
  {
    path: '/user/id',
    name: 'user-detail',
    component: () => import('../pages/user-detail.vue')
  },
  {
    path: '/',
    name: 'user-list',
    component: () => import('../pages/user-list.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
