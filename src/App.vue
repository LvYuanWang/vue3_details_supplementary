<template>
  <div class="container">
    <button @click="show = !show">切换</button>
    <Transition @beforeEnter="beforeEnter" @enter="enter" @leave="leave">
      <p v-if="show">Hello</p>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)

const beforeEnter = (el) => {
  // 在元素进入之前, 设置初始样式
  el.style.opacity = 0
  el.style.transform = 'translateY(-20px)'
}

const enter = (el, done) => {
  // 这里设置 setTimeout 是为了让浏览器有时间应用初始样式
  // 将这个函数推到下一个时间循环中执行
  // 避免初始样式和目标样式在同一帧中执行(如果在同一帧执行则样式会被合并)
  setTimeout(() => {
    el.style.transition = 'all 1s'
    el.style.opacity = 1
    el.style.transform = 'translateY(0)'
    done()
  }, 0)
}

const leave = (el, done) => {
  // 因为元素已经在文档中了, 直接设置样式即可
  el.style.transition = 'all 1s'
  el.style.opacity = 0
  el.style.transform = 'translateY(-20px)'
  // 这里的 setTimeout 是为了让动画执行完毕之后再调用 done
  // 保证和过渡时间一致
  setTimeout(() => {
    done()
  }, 1000)
}
</script>

<style scoped>
.container {
  text-align: center;
  position: fixed;
  padding-top: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #000;
  border-radius: 15px;
  box-sizing: border-box;
  height: 162px;
  width: 152px;
}

.container p {
  font-size: 24px;
  font-weight: bold;
  background-color: #333;
  width: 100px;
  margin: 0 auto;
  margin-top: 25px;
  color: #fff;
  border-radius: 10px;
  padding: 10px 0;
}
</style>
