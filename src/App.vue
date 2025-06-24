<template>
  <div id="app" :style="{ color: globalData.themeColor }">
    <h1>App组件</h1>
    <div class="container configBox">
      <Language />
      <div class="container">
        <h2>配置语言:</h2>
        <div class="languageBox">
          <input type="text" v-model="language" />
          <button @click="clickChangeLanguage(language)">设置</button>
        </div>
      </div>
      <ThemeConfig />
      <UserInfo />
    </div>
    <Child />
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import Child from './components/Child.vue'
import Language from './components/Language.vue'
import UserInfo from './components/UserInfo.vue'
import ThemeConfig from './components/ThemeConfig.vue'
const globalData = inject('globalData')
const language = ref(globalData.language)

const changeLanguage = inject('changeLanguage')

const clickChangeLanguage = (newLanguage) => {
  if (newLanguage.trim().length !== 0) {
    changeLanguage(newLanguage)
    return
  }
  alert('请重新输入语言!!')
  language.value = globalData.language
}
</script>

<style scoped>
input {
  width: 100%;
  box-sizing: border-box;
}

.configBox {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.languageBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
</style>
