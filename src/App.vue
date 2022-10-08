<script setup lang="ts">
import { storeToRefs } from "pinia";
import { provide } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useTestStore } from "./stores";
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
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/grid">Grid</RouterLink>
      <RouterLink to="/flex">Flex</RouterLink>
      <RouterLink to="/todo">Todo</RouterLink>
      <RouterLink to="/drouter">drouter</RouterLink>
      <RouterLink to="/tv">tv</RouterLink>
      <RouterLink to="/tgv">tgv</RouterLink>
      <RouterLink to="/bus">bus</RouterLink>
      <RouterLink to="/tsx">tsx</RouterLink>
      <RouterLink to="/vmt">vmt</RouterLink>
      <RouterLink to="/ntt">ntt</RouterLink>
      <RouterLink to="/fv">FunctionView</RouterLink>
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
