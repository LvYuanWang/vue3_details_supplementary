<template>
  <div class="container">
    <h2>主题颜色配置:</h2>
    <div class="button-container">
      <button style="background-color: red" @click="changeThemeColor('red')">红色</button>
      <button @click="changeThemeColor('green')">绿色</button>
      <button style="background-color: blue" @click="changeThemeColor('blue')">蓝色</button>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const changeThemeColor = inject('changeThemeColor')
</script>

<style scoped>
.button-container {
  display: flex;
  gap: 10px;
}
</style>
