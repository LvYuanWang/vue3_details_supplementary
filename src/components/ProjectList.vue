<template>
  <div class="container">
    <div class="btn-container">
      <button @click="addItem">添加项目</button>
      <button @click="remoteItem">移除项目</button>
    </div>
    <TransitionGroup name="fade" tag="ul">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref(['内容1', '内容2', '内容3'])

const addItem = () => items.value.push(`内容${items.value.length + 1}`)

const remoteItem = () => items.value.pop()
</script>

<style scoped>
.container {
  width: 40%;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.btn-container {
  display: flex;
  gap: 15px;
}

ul {
  width: 100%;
  padding: 0;
  list-style: none;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

ul li {
  width: 60%;
  height: 60px;
  box-shadow: 0 4px 8px #ccc;
  border-radius: 15px;
  box-sizing: border-box;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  font-weight: bold;
  background-color: aliceblue;
  cursor: pointer;
  transition: all 0.5s;
}

ul li:hover {
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
