<template>
  <!-- <div id="a-container" class="a-container" data-test="a-test">
    <h2>A组件</h2>
  </div> -->

  <!-- 自定义透传的位置 / 不设置透传 -->
  <div>
    <p v-bind="$attrs">A组件</p>
  </div>

  <!-- 会继续透传 -->
  <!-- <B /> -->
</template>

<script setup>
import { useAttrs } from 'vue'

// import B from './B.vue'

// 设置接收传递的属性
// defineProps(['id', 'class'])

// 禁止透传
defineOptions({
  inheritAttrs: false,
})

// 获取所有透传的 attribute
const attrs = useAttrs()
console.log(attrs)
</script>

<style scoped>
.a-component {
  color: red;
}
</style>
