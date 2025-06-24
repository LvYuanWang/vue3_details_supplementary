import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'

const app = createApp(App)

// 权限数组
const permissionArr = ['read', 'manage']

// 全局权限控制指令
app.directive('permission', {
  mounted(el, { value }) {
    if (value && value instanceof Array) {
      const isPermission = value.some((item) => permissionArr.includes(item))
      isPermission ? (el.style.display = 'block') : (el.style.display = 'none')
    } else {
      throw new Error('v-permission 的值必须是数组')
    }
  },
})

app.mount('#app')
