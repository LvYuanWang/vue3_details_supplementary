<template>
  <div class="loading">
    <div class="loading-content">
      <div class="loading-icon"></div>
      <p>加载中...</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.loading-icon {
  width: 50px;
  height: 50px;
  border: 5px solid #fff;
  border-top-color: #000;
  border-radius: 50%;
  animation: loading 1s linear infinite;
}
.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
