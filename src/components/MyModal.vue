<template>
  <Teleport to="body">
    <div class="modal" v-if="open">
      <p>姓名：{{ userInfo.name }}</p>
      <p>邮箱：{{ userInfo.email }}</p>
      <button @click="$emit('close')" class="close">关闭</button>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  userInfo: {
    type: Object,
  },
})
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  margin: 0;
}

button {
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 8px;
  background-color: #56e456;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s;
}

button:hover {
  opacity: 0.8;
}

button:active {
  opacity: 0.4;
}

.close {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: -18px;
  right: -18px;
}
</style>
