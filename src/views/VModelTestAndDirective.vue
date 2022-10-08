<template>
  <div>
    <h1>父组件</h1>
    <div>isShow: {{ isShow }}</div>
    <div>text: {{ text }}</div>
    <el-button @click="isShow = !isShow">change</el-button>
    <VModelComp
      v-mydirec.aa.leo="{ background: 'red' }"
      v-model="isShow"
      v-model:textVal.isNew="text"
    ></VModelComp>
    <div v-move class="move">canmove</div>
  </div>
</template>

<script setup lang="ts">
import VModelComp from "../components/VModelComp.vue";
import { ref, type Directive, type DirectiveBinding } from "vue";
const isShow = ref<Boolean>(true);
const text = ref<string>("text");
type Dir = {
  background: string;
};
const vMydirec: Directive = {
  created() {
    console.log("created");
  },
  beforeMount(el: HTMLElement, dir: DirectiveBinding<Dir>) {
    console.log("beforeMount");
    console.log(dir.value);
  },
  mounted(...args) {
    console.log("mounted");
    console.log(args);
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("beforeUpdate");
  },
  beforeUnmount() {
    console.log("beforeUpdate");
  },
  unmounted() {
    console.log("beforeUpdate");
  },
};

const vMove: Directive<any, void> = (
  el: HTMLElement,
  binding: DirectiveBinding
) => {
  console.log(el, binding);
  const mouseDown = (event: MouseEvent) => {
    let x = event.clientX - el.offsetLeft;
    let y = event.clientY - el.offsetTop;
    const mouseMove = (e: MouseEvent) => {
      console.log(e);
      el.style.left = e.clientX - x + "px";
      el.style.top = e.clientY - y + "px";
    };
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", mouseMove);
    });
  };
  el.addEventListener("mousedown", mouseDown);
};
</script>

<style scoped>
.move {
  width: 200px;
  height: 200px;
  background-color: aquamarine;
}
</style>
