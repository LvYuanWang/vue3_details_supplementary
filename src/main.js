import { createApp, reactive } from 'vue'
import './assets/global.css'
import App from './App.vue'

const app = createApp(App)

const globalData = reactive({
  themeColor: 'blue',
  userInfo: {
    name: 'joker',
    role: 'admin',
  },
  language: 'chinese',
})

const changeThemeColor = (color) => {
  globalData.themeColor = color
}

const changeLanguage = (newLanguage) => {
  globalData.language = newLanguage
}

app.provide('globalData', globalData)
app.provide('changeThemeColor', changeThemeColor)
app.provide('changeLanguage', changeLanguage)

app.config.globalProperties.Test = {
  msg: 'Hello from Test',
}

app.mount('#app')
