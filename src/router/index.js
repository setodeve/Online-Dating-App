import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
    path: '/user/',
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
