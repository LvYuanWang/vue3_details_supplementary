import ErrorLogger from './ErrorLogger.vue'

export default {
  install(app, options = {}) {
    // 1. 首先进行参数归一化

    // 设置一个默认的 options
    const defaultOptions = {
      logToConsole: true, // 是否把错误日志打印到控制台
      remoteLogging: false, // 是否把错误日志发送到远程服务器
      remoteUrl: '', // 远程服务器地址
    }

    // 合并用户传入的 options 和默认 options
    const config = { ...defaultOptions, ...options }

    // 2. 捕获两种类型的错误

    // （1）全局Vue错误
    // config.errorHandler: 全局错误处理函数
    // err: 错误对象
    // vm: 发生错误的组件实例
    // info: 错误信息
    app.config.errorHandler = (err, vm, info) => {
      // logError: 错误处理函数
      logError(err, info)
    }
    // （2）捕获未处理的 Promise 错误
    // unhandledrejection: 未处理的 Promise 错误事件
    // event.reason: 错误对象
    window.addEventListener('unhandledrejection', (event) => {
      logError(event.reason, 'unhandled promise rejection error!!!')
    })

    // 3. 统一交给错误处理函数处理

    // 错误处理函数
    function logError(error, info) {
      // 是否在控制台输出
      if (config.logToConsole) {
        // 并且 console.error 方法是改写过的, 会把 error 信息记录到 errors 数组里面
        console.error(`[错误: ${info}]`, error)
      }

      // 是否发送到远程服务器
      if (config.remoteLogging && config.remoteUrl) {
        // 发送错误信息到远程服务器
        fetch(config.remoteUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            error: error.message, // 错误消息
            stack: error.stack, // 错误堆栈: 错误发生时, 调用堆栈的详细信息
            info, // 错误信息
            time: new Date().toISOString(), // 错误时间
          }),
        }).catch(console.error) // 发送失败时, 打印错误信息到控制台
      }
    }

    // 4. 注册 ErrorLogger 组件
    app.component('ErrorLogger', ErrorLogger)
  },
}
