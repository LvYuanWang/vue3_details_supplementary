import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 接下来需要对时间戳进行一个转换
const time = {
  // 获取当前时间戳
  getUnix() {
    const date = new Date()
    return date.getTime()
  },
  // 获取今天0时0分0秒的时间戳
  getTodayUnix() {
    const date = new Date()
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0) // 毫秒
    return date.getTime()
  },
  // 获取今年1月1日0时0分0秒的时间戳
  getYearUnix: function () {
    const date = new Date()
    date.setMonth(0)
    date.setDate(1)
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date.getTime()
  },
  // 获取标准年月日
  getLastDate: function (time) {
    const date = new Date(time)
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    return `${date.getFullYear()}-${month}-${day}`
  },
  // 转换时间
  getFormatTime(timestamp) {
    // 根据时间戳来决定返回的提示信息
    const now = this.getUnix() // 当前时间戳
    const today = this.getTodayUnix() // 今天0点的时间戳
    const timer = (now - timestamp) / 1000 // 时间差
    let tip = ''

    if (timer <= 0 || Math.floor(timer / 60) <= 0) {
      tip = '刚刚'
    } else if (timer < 3600) {
      tip = `${Math.floor(timer / 60)}分钟前`
    } else if (timer >= 3600 && timestamp - today >= 0) {
      tip = `${Math.floor(timer / 3600)}小时前`
    } else if (timer / 86400 <= 31) {
      tip = `${Math.ceil(timer / 86400)}天前`
    } else {
      tip = this.getLastData(timestamp)
    }

    return tip
  },
}

app.directive('time', {
  mounted(el, { value }) {
    // value: 时间戳
    el.innerHTML = time.getFormatTime(value)
    // 并且创建一个计时器, 实时更新提示信息
    el.timeout = setInterval(() => {
      el.innerHTML = time.getFormatTime(value)
    }, 60000)
  },
  unmounted(el) {
    clearInterval(el.timeout)
    // 删除定时器
    delete el.timeout
  },
})

app.mount('#app')
