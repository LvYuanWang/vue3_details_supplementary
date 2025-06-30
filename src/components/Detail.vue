<template>
  <div class="container">
    <h2>这是详情页</h2>
    <ImageComponent :imgName="imgArr[currentIndex]" />
  </div>
</template>

<script setup>
import { onUnmounted, ref } from 'vue'
import ImageComponent from './ImageComponent.vue'

// 导入所有的图片文件
const imgModules = import.meta.glob('../assets/*.{jpg,png,gif,jpeg,svg}', { eager: true })

// 当前图片索引
const currentIndex = ref(0)

// 获取所有图片的文件名数组
const imgArr = Object.keys(imgModules).map((path) => path.split('/').pop())

// 计时器
let timer = null

// 每过一秒随机变换图片
timer = setInterval(() => {
  currentIndex.value = Math.floor(Math.random() * imgArr.length)
}, 1000)

// 删除定时器
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped></style>
