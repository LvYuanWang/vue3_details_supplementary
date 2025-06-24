import { ref } from 'vue'
import { useEvent } from './useEvent'

/**
 * 实时返回鼠标的坐标
 * @returns {Object} 鼠标当前的x和y坐标
 */
export function useMouse() {
  // 定义两个状态变量 x 和 y, 分别用于保存坐标
  const x = ref(0)
  const y = ref(0)

  // 根据鼠标事件对象更新 x 和 y 的值
  function updatePosition(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // 在组件挂载和卸载时分别添加和移除鼠标移动事件
  // onMounted(() => window.addEventListener('mousemove', updatePosition))
  // onUnmounted(() => window.removeEventListener('mousemove', updatePosition))
  useEvent(window, 'mousemove', updatePosition)

  // 返回 x 和 y 坐标
  return { x, y }
}
