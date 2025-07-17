import Home from '@/pages/Home.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/pages/Detail.vue'),
  },
]

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL), // Hash 模式
  history: createWebHistory(import.meta.env.BASE_URL), // History 模式
  routes,
})

export default router
