<template>
  <div id="app">
    <h1 class="title">用户管理系统</h1>
    <UserList />
  </div>
</template>

<script setup>
import UserList from './components/UserList.vue'
</script>

<style scoped>
.title {
  background-color: #74f47493;
  padding: 10px;
  text-align: center;
}
</style>
