<template>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data">
    Data loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { ref } from 'vue'
import { useFetch } from '../hooks/useFetch'

const url = ref('https://jsonplaceholder.typicode.com/posts/1')

const { data, error } = useFetch(url)
</script>

<style scoped></style>
