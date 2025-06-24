<template>
  <div class="container">
    <h2>用户信息:</h2>
    <p>姓名: {{ userInfo.name }}</p>
    <p>角色: {{ userInfo.role }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const { userInfo } = inject('globalData')
</script>

<style scoped></style>
