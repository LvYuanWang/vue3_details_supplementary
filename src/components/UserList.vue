<template>
  <div class="user-list-container">
    <h2>用户列表</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <span>{{ user.name }}</span>
        <span>{{ user.email }}</span>
        <button @click="checkDetail(user.id)">查看详情</button>
      </li>
    </ul>

    <MyModal :open="open" :user-info="userInfo" @close="open = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MyModal from './MyModal.vue'
// 随机Id
const randomId = () => Math.random().toString(36).substring(2, 9)

const open = ref(false)
const userInfo = ref({})

const users = ref([
  {
    id: randomId(),
    name: '张三',
    email: 'zhangsan@example.com',
  },
  {
    id: randomId(),
    name: '李四',
    email: 'lisi@example.com',
  },
  {
    id: randomId(),
    name: '王五',
    email: 'wangwu@example.com',
  },
])

function checkDetail(id) {
  userInfo.value = users.value.filter((user) => user.id === id)[0]
  open.value = true
}
</script>

<style scoped>
.user-list-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px #ccc;
  border-radius: 10px;
  transform: translateX(-40%);
}

h2 {
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 24px;
  margin-top: 0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

li:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

span {
  color: #495057;
  margin-right: 15px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}
</style>
