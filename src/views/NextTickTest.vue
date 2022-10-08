<template>
  <div>
    <input v-model="message" type="text" />
    <div ref="div">{{ message }}</div>
    <button @click="change">change</button>
  </div>
  <div>
    <div>{{ counter }}</div>
    <button @click="add">$ref语法糖</button>
  </div>
</template>

<script setup lang="ts">
import { $ref, $ } from "vue/macros";
import { ref, nextTick, reactive } from "vue";
const message = ref<string>("");
const div = ref<HTMLElement>();
const change = async () => {
  message.value = "1231212312";
  await nextTick();
  console.log(div.value?.innerHTML);
};

//const counter = ref<number>(0);
//$ref 语法糖
//watch 无法监听 需要使用$$counter变为可监听
let counter = $ref<number>(0);
const add = () => {
  //counter.value++;
  counter++;
};

const obj = reactive({
  name: "ssss",
  desc: "mmmmm",
});

let { name, desc } = $(obj);
console.log(name, desc);
name = " mmmm";
console.log(name, desc);
</script>

<style scoped></style>
