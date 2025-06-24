<template>
  <div class="container">
    <h3>DeepChild 组件</h3>
    <em @click="simpleMethod">{{ simpleData }}</em>
    <p>{{ mainData }}</p>
    <p>{{ defaultInjectData }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const { simpleData, simpleMethod } = inject('appData')
// 设置默认数据
const defaultInjectData = inject('defaultData', '这是默认数据')
</script>

<style scoped>
em {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
