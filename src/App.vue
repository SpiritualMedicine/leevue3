<script setup lang="ts">
import { provide } from "vue";
import { RouterLink, RouterView } from "vue-router";
//provide inject
provide("color", "red");
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/grid">Grid</RouterLink>
      <RouterLink to="/flex">Flex</RouterLink>
      <RouterLink to="/todo">Todo</RouterLink>
      <RouterLink to="/drouter">drouter</RouterLink>
      <RouterLink to="/tv">tv</RouterLink>
      <RouterLink to="/tgv">tgv</RouterLink>
      <RouterLink to="/bus">bus</RouterLink>
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
