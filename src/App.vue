<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/grid">Grid</RouterLink>
      <RouterLink to="/flex">Flex</RouterLink>
      <RouterLink to="/todo">Todo</RouterLink>
    </el-aside>
    <el-container>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-main {
  min-height: 100vh;
}
.el-aside {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.el-aside a {
  height: 33px;
  line-height: 33px;
  text-align: center;
  font-size: 1.5rem;
}
.el-aside a:first-child {
  margin-top: 2rem;
}
</style>
