<script setup lang="ts">
import { inject, getCurrentInstance } from "vue";
import useBase64 from "../hooks";

console.log(import.meta.env);

useBase64({
  el: "#img",
}).then((res) => {
  console.log(res.baseUrl);
});
const color = inject("color");
const instance = getCurrentInstance();
const loadingFunc = () => {
  instance?.proxy?.$myLoading.show();
  setTimeout(() => {
    instance?.proxy?.$myLoading.hide();
  }, 5000);
};
</script>

<template>
  <ul>
    <li>
      <router-link to="/flex">dsa</router-link>
    </li>
    <li>
      <router-link to="/grid">dada</router-link>
    </li>
    <li>
      <router-link to="/grid">{{ color }}</router-link>
    </li>
    <li>
      <img id="img" src="@/assets/logo.svg" width="100" height="100" />
    </li>
    <li>
      {{ $filters.format("woshinidie") }}
    </li>
    <li>
      <el-button @click="loadingFunc">Loading</el-button>
    </li>
  </ul>
</template>
