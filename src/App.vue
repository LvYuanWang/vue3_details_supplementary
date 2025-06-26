<template>
  <div class="todo-list">
    <input
      class="todo-input"
      type="text"
      placeholder="请输入新的待办事项"
      v-model="newTodoContent"
      @keydown.enter="addTodo"
    />
    <TransitionGroup name="fade" tag="ul">
      <li class="todo" v-for="todo in todos" :key="todo.id">
        <span>{{ todo.content }}</span>
        <button @click="deleteTodo(todo.id)">删除</button>
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/**
 * 生成随机Id
 */
function randomId() {
  return Math.random().toString(36).substring(2, 9)
}

/**
 * 新的任务
 */
const newTodoContent = ref('')

/**
 * 任务列表
 */
const todos = ref([
  { id: randomId(), content: '学习Vue' },
  { id: randomId(), content: '看电影' },
  { id: randomId(), content: '学习React' },
])

/**
 * 删除任务
 * @param id 任务Id
 */
function deleteTodo(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

/**
 * 新增任务
 */
function addTodo() {
  if (newTodoContent.value.trim !== '') {
    todos.value.unshift({
      id: randomId(),
      content: newTodoContent.value,
    })
    newTodoContent.value = ''
  }
}
</script>

<style scoped>
.todo-list {
  width: 50%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
}

.todo-list::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: #007bff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.todo-input {
  width: 100%;
  box-sizing: border-box;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  border-bottom: none;
  border-radius: 4px;
  margin-top: 15px;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* xxx-enter-active 新元素进入的时候会挂这个类 */
/* xxx-leave-active 旧元素离开的时候会挂这个类 */
/* xxx-move 其他元素涉及到移动的时候, 会挂这个类 */
.fade-enter-active,
.fade-leave-active,
.fade-move {
  transition: 0.5s;
}

.fade-leave-to,
.fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
