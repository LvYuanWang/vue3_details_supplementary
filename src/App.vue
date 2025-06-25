<template>
  <div id="app">
    <h1>错误插件使用示例</h1>
    <button @click="handleError">触发错误</button>
    <ErrorLogger />
  </div>
</template>

<script setup>
const handleError = () => {
  throw new Error('这是一个测试错误')
}
</script>

<style scoped></style>
