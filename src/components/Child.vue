<template>
  <div class="container">
    <h2>Child 组件</h2>
    <DeepChild />
  </div>
</template>

<script setup>
import DeepChild from './DeepChild.vue'
import { provide, ref } from 'vue'

const simpleData = ref('该数据来自于Child')

const simpleMethod = () => {
  simpleData.value = '该数据来自于simpleMethod方法'
}
provide('appData', { simpleData, simpleMethod })
</script>

<style scoped></style>
