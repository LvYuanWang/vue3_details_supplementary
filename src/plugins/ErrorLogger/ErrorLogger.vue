<template>
  <div v-if="errors.length">
    <h1>错误日志</h1>
    <ul class="error-list">
      <li v-for="error in errors" :key="error.time">{{ error.time }} - {{ error.message }}</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'

// 该数组用于存储错误信息
const errors = reactive([])

onMounted(() => {
  // 改写 console.error 方法
  // 之后在使用 console.error 方法打印错误的时候
  // 会自动将错误信息推入到 errors 数组中
  const oldConsoleError = console.error
  console.error = (...args) => {
    // 将错误信息推入到 errors 数组中
    errors.push({
      message: args[0],
      time: new Date().toDateString(),
    })
    // 调用原始的 console.error 方法，保证其在控制台打印错误的默认行为得以保留
    oldConsoleError.apply(console, args)
  }
})
</script>

<style scoped>
.error-list {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: rgba(164, 162, 162, 0.5);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  max-height: 500px;
  overflow-y: auto;
  width: 500px;
}

.error-list li {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
  &:hover {
    background-color: #f0f0f0;
    color: #333;
  }
}
</style>
