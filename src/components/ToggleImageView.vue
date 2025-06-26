<template>
  <div class="btn-container">
    <button @click="prev">上一张</button>
    <button @click="next">下一张</button>
  </div>
  <Transition :name="`${direction}-image`" mode="out-in">
    <ImageComponent :imgName="curImgName" :key="curImgIndex" />
  </Transition>
</template>

<script setup>
import { computed, ref } from 'vue'
import ImageComponent from './components/ImageComponent.vue'
// 导入所有图片文件
// 使用 Vite 的 import.meta.glob 动态导入功能
// 参数1: 匹配文件的路径模式，这里匹配 assets 目录下所有图片文件
// 参数2: { eager: true } 表示立即加载模块，而不是按需加载
// 返回值: 一个对象，key 是文件路径，value 是文件的模块内容
const imgModules = import.meta.glob('../src/assets/*.{jpg,png,gif,jpeg}', { eager: true })

// 获取所有图片的文件名数组
const imgArr = Object.keys(imgModules).map((path) => {
  // 从路径中提取文件名
  return path.split('/').pop()
})

// 图片名称下标
const curImgIndex = ref(0)

// 根据下标获取图片名称
const curImgName = computed(() => imgArr[curImgIndex.value])

// 获取图片名数组的最大长度
const imgArrMaxLen = computed(() => imgArr.length - 1)

// 切换方向
const direction = ref('prev')

// 上一张
function prev() {
  curImgIndex.value--
  if (curImgIndex.value < 0) {
    // 跳转到最后一张
    curImgIndex.value = imgArrMaxLen.value
  }
  direction.value = 'prev'
}

// 下一张
function next() {
  curImgIndex.value++
  if (curImgIndex.value === imgArrMaxLen.value) {
    // 跳转到第一张
    curImgIndex.value = 0
  }
  direction.value = 'next'
}
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  gap: 15px;
}

.next-image-enter-active,
.next-image-leave-active,
.prev-image-enter-active,
.prev-image-leave-active {
  transition: 0.5s;
}

.next-image-enter-from,
.next-image-leave-to,
.prev-image-enter-from,
.prev-image-leave-to {
  opacity: 0;
}

.next-image-enter-from,
.prev-image-leave-to {
  transform: translateX(200px);
}

.next-image-leave-to,
.prev-image-enter-from {
  transform: translateX(-200px);
}
</style>
