<script setup lang="ts">
import { storeToRefs } from "pinia";
import { provide } from "vue";
import { RouterView } from "vue-router";
import { useTestStore } from "./stores";
import RouterTab from "./components/RouterTab.vue";
//provide inject
provide("color", "red");
//auto import
//const str = ref<string>("tsx");

const Test = useTestStore();
//修改方式
//Test.current++
//Test.$patch({current: 888, name:"wawa"});
//Test.$patch((state => { state.current = 999; state.name="fanbingbing"}));
//Test.$state = {current: 2000, name: "manmanman"};
// actions Test.setCurrent();
console.log(Test.name);
//pinia subscribe
Test.$subscribe((args, state) => {
  console.log("subscribe", args);
  console.log("subscribe", state);
});

Test.$onAction((args) => {
  console.log("onAction", args);
});
//解构 不具有响应式
const { current, name } = Test;
console.log(current, name);
//需要响应式 使用storeToRefs
const { current: currentref, name: nameref } = storeToRefs(Test);

console.log(currentref, nameref);

Test.setCurrent();

console.log(Test.newName);
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <RouterTab></RouterTab>
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
</style>
