<template>
  <!-- 只有在权限为 read 的时候, 才显示这个按钮 -->
  <button v-permission="['read']">读取</button>
  <!-- 只有在权限为 write 的时候, 才显示这个按钮 -->
  <button v-permission="['write']">写入</button>
  <!-- 只有在权限为 manage 的时候, 才显示这个按钮 -->
  <button v-permission="['manage']">管理</button>
</template>

<script setup></script>

<style scoped></style>
