<template>
  <div class="testComponent_container">
    <h2>{{ Text }}</h2>
  </div>
</template>

<script setup>
defineProps({
  Text: {
    type: String,
    default: 'TestComponent',
  },
})
</script>

<style scoped></style>
