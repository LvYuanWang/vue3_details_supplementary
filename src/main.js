import { createApp } from 'vue'
import App from './App.vue'

// 导入错误日志插件
import ErrorLogger from './plugins/ErrorLogger/error-logger'

const app = createApp(App)

app.use(ErrorLogger, {
  logToConsole: true,
  remoteLogging: true,
  remoteUrl: 'http://localhost:3000/log',
})

app.mount('#app')
