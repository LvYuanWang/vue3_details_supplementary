<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/detail">Detail</router-link>
        </li>
        <li>
          <router-link to="/user/123/detail">UserInfo</router-link>
        </li>
        <li>
          <router-link to="/progress">Progress</router-link>
        </li>
      </ul>
    </nav>
    <router-view name="leftProgress"></router-view>
    <router-view></router-view>
    <router-view name="rightProgress"></router-view>
  </div>
</template>

<script setup></script>

<style scoped></style>
