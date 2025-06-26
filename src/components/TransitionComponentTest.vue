<template>
  <div>
    <button @click="isShow = !isShow">Toggle</button>
    <div :class="['fade', { active: isShow, leave: !isShow }]">
      <TestComponent />
      <p>淡入淡出</p>
    </div>
    <!-- name -->
    <Transition name="fade">
      <div v-if="isShow">
        <TestComponent />
        <p>淡入淡出</p>
      </div>
    </Transition>
    <!-- 使用 class -->
    <Transition
      enter-active-class="fade"
      enter-from-class="leave"
      enter-to-class="active"
      leave-active-class="fade"
      leave-from-class="active"
      leave-to-class="leave"
    >
      <div v-if="isShow">
        <TestComponent />
        <p>淡入淡出</p>
      </div>
    </Transition>
    <!-- 使用 css 动画  appear 首次渲染时也应用动画 -->
    <Transition name="bounce" appear>
      <div v-if="isShow">
        <TestComponent />
        <p>淡入淡出</p>
      </div>
    </Transition>
    <!-- mode -->
    <Transition name="fade" mode="in-out">
      <div v-if="isShow">
        <TestComponent Text="动画" />
        <p>淡入淡出</p>
      </div>
      <div v-else>
        <TestComponent Text="水果" />
        <p>苹果</p>
        <p>香蕉</p>
      </div>
    </Transition>
    <!-- 对文本节点的过渡, 只需要加个 key 就可以了 -->
    <Transition name="fade" mode="out-in">
      <TestComponent :key="message" :Text="message" />
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TestComponent from './TestComponent.vue'

const isShow = ref(true)
const message = computed(() => {
  return isShow.value ? 'Hello' : 'World'
})
</script>

<style scoped>
/* 使用 css 过渡 */
.fade {
  transition: all 1s;
}

.active {
  opacity: 1;
}

.leave {
  opacity: 0;
}

/* 使用 class */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* css 动画 */
.bounce-enter-active {
  animation: bounce-in 1s;
}

.bounce-leave-active {
  animation: bounce-in 1s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
