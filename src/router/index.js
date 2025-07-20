import Home from '@/pages/Home.vue'
import Index from '@/pages/Progress/index.vue'
import LeftProgress from '@/pages/Progress/LeftProgress.vue'
import RightProgress from '@/pages/Progress/RightProgress.vue'
import UserInfo from '@/pages/UserInfo.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // 路由元数据
    meta: {
      title: '首页',
    },
  },
  {
    path: '/detail',
    name: 'Detail',
    // 路由懒加载
    component: () => import('@/pages/Detail.vue'),
    // 路由元数据
    meta: {
      title: '详情页',
    },
  },
  {
    path: '/user/:id/detail',
    name: 'UserInfo',
    component: UserInfo,
    alias: '/userDetail/:id', // 添加别名
    // 路由元数据
    meta: {
      title: '用户信息页',
    },
  },
  {
    path: '/progress',
    name: 'Progress',
    // 一个路由可以有多个视图
    components: {
      default: Index,
      leftProgress: LeftProgress,
      rightProgress: RightProgress,
    },
    // 路由元数据
    meta: {
      title: '进度条',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Hash 模式
  routes,
})

// 设置全局前置守卫
router.beforeEach((to, from, next) => {
  // 如果路由有 meta.title，则设置为页面 title
  document.title = to.meta && to.meta.title ? to.meta.title : 'Vue3+TS+Vite'
  next()
})

export default router
