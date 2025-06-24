import { onMounted, onUnmounted } from 'vue'

/**
 * 绑定事件
 * @param {*} target 要绑定事件的元素
 * @param {String} event 要绑定事件的类型
 * @param {Function} callback 事件触发时的回调函数
 */
export function useEvent(target, event, callback) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}
