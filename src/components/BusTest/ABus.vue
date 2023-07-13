<template>
  <div class="A">
    <el-button @click="emitB">派发</el-button>
    <el-button @click="emit">派发Mit</el-button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
import Bus from "../../bus";
let flag = false;
const emitB = () => {
  flag = !flag;
  Bus.emit("on-click", flag);
};

const instance = getCurrentInstance();

const emit = () => {
  instance?.proxy?.$Bus.emit("on-xiaoli", "mitt" as string);
};
</script>

<style scoped>
.A {
  display: block;
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
