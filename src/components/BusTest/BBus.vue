<template>
  <div class="B">
    <div>{{ Flag }}</div>
    <div>{{ mittFlag }}</div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";
import Bus from "../../bus";

let Flag = ref(false);
const mittFlag = ref("");
Bus.on("on-click", (flag: boolean) => {
  Flag.value = flag;
});

const instance = getCurrentInstance();

instance?.proxy?.$Bus.on("on-xiaoli", (str) => {
  mittFlag.value = str as string;
  console.log(str);
});
</script>

<style scoped>
.B {
  display: block;
  width: 200px;
  height: 200px;
  background-color: blue;
  color: #ccc;
}
</style>
