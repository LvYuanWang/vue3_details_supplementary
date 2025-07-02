<template>
  <div id="app" class="container">
    <h1>控制台</h1>
    <Suspense @pending="onPending" @resolve="onResolve" @fallback="onFallback">
      <!-- 当所有异步依赖都完成后, 会进入完成状态, 展示默认插槽内容 -->
      <template #default>
        <div>
          <!-- 第一部分: 好友状态组件(2s) -->
          <FirstComponent />
          <!-- 第二部分: 活动提要组件(5s) 统计提要组件(8s) -->
          <ScondComponent />
        </div>
      </template>
      <!-- 如果有任何异步依赖外完成, 则进入挂起状态, 在挂起状态期间, 展示的是后备内容 -->
      <template #fallback>
        <LoadingComponent />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import FirstComponent from './components/FirstComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'
import ScondComponent from './components/ScondComponent.vue'

// Suspense组件事件方法
const onPending = () => {
  console.log('Suspense组件进入挂起状态')
}
const onResolve = () => {
  console.log('Suspense组件进入完成状态')
}
const onFallback = () => {
  console.log('Suspense组件进入后备状态')
}
</script>

<style scoped>
#app {
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  height: 70%;
}
</style>
