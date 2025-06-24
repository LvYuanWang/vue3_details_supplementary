<template>
  <div class="container language">
    <h2>语言:</h2>
    <em>{{ globalData.language }}</em>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const globalData = inject('globalData')
</script>

<style scoped>
.language {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
