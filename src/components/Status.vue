<template>
  <div>好友状态: {{ friendStatus }}</div>
</template>

<script setup>
import { ref } from 'vue'

const friendStatus = ref('加载中...')

// 模拟异步操作
await new Promise((resolve) => setTimeout(resolve, 2000))
friendStatus.value = '在线'
console.log('好友状态组件已加载完成')
</script>

<style scoped></style>
