<template>
  <div id="app">鼠标当前坐标位置: {{ x }} {{ y }}</div>
</template>

<script setup>
import { useMouse } from './hooks/useMouse'

const { x, y } = useMouse()
</script>

<style scoped></style>
