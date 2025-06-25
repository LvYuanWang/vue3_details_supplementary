<template>
  <div class="app-container">
    <div class="time-card">
      <h2>Current Time</h2>
      <div class="time-display" v-time="timeNow"></div>
    </div>

    <div class="time-card">
      <h2>Previous Time</h2>
      <div class="time-display" v-time="timeBefore"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 当前时间
const timeNow = ref(new Date().getTime())
// 之前时间
const timeBefore = ref(1750814712367)
</script>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #2c3e50;
}

.time-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.time-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 500;
  color: #3a7bd5;
  font-size: 1.25rem;
}

.time-display {
  font-size: 1.5rem;
  font-weight: 300;
  color: #34495e;
  padding: 0.75rem 0;
  border-bottom: 2px solid #f5f5f5;
}

@media (min-width: 768px) {
  .app-container {
    flex-direction: row;
  }

  .time-card {
    flex: 1;
  }
}
</style>
