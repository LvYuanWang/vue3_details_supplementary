<template>
  <div class="image-container">
    <img :src="`../src/assets/${imgName}`" :alt="imgName" :title="imgName" />
  </div>
</template>

<script setup>
defineProps({
  imgName: {
    type: String,
    default: '机甲.jpg',
  },
})
</script>

<style scoped>
.image-container {
  /* 容器样式 */
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s ease;
}

.image-container:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

.image-container img {
  /* 图片样式 */
  width: 100%;
  height: auto;
  border-radius: 4px;
  display: block;
  object-fit: cover;
}
</style>
