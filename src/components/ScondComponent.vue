<template>
  <div class="container">
    <h2>第二部分内容</h2>
    <Suspense>
      <template #default>
        <div>
          <AsyncActiveComponent />
          <AsyncTotalComponent />
        </div>
      </template>
      <template #fallback>
        <LoadingComponent />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import LoadingComponent from './LoadingComponent.vue'

// 异步组件
const AsyncActiveComponent = defineAsyncComponent(() => {
  // 模拟从服务器加载组件
  return new Promise((resolve) => {
    // 8秒后加载组件
    setTimeout(() => {
      resolve(import('./ActiveComponent.vue'))
      console.log('活动提要组件加载完成')
    }, 8000)
  })
})
const AsyncTotalComponent = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./TotalComponent.vue'))
      console.log('统计提要组件加载完成')
    }, 5000)
  })
})
</script>

<style scoped>
.container {
  box-sizing: border-box;
}
</style>
