<template>
  <div id="app">
    <h1>切换页面</h1>
    <div class="btns">
      <button @click="loadComponent('Home')">切换主页</button>
      <button @click="loadComponent('Detail')">切换详情页</button>
    </div>

    <component v-if="currentComponent" :is="currentComponent"></component>
  </div>
</template>

<script setup>
// import Home from './components/Home.vue'
// import Detail from './components/Detail.vue'
import { shallowRef, defineAsyncComponent } from 'vue'

// 当前组件
const currentComponent = shallowRef(null)

/**
 * 使用 defineAsyncComponent 异步加载组件
 * @param component 组件名称
 */
const loadComponent = (component) => {
  currentComponent.value = defineAsyncComponent(() => import(`./components/${component}.vue`))
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.btns {
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  gap: 10px;
}
</style>
