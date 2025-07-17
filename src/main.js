import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'

const app = createApp(App)

app.config.globalProperties.Test = {
  msg: 'Hello from Test',
}

app.use(router)

app.mount('#app')
