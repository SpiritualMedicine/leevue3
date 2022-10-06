<template>
  <!-- 普通 -->
  <div class="content">
    <button @click="flag = !flag">tv</button>
    <transition name="fade" :duration="{ enter: 500, leave: 800 }">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
  <!-- 使用animate.css -->
  <div class="content2">
    <button @click="flag = !flag">tv</button>
    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__pulse"
    >
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
  <!-- 生命周期 -->
  <div class="content3">
    <button @click="flag = !flag">tv</button>
    <transition
      @before-enter="EnterFrom"
      @enter="EnterActive"
      @after-enter="EnterTo"
      @enter-cancelled="EnterCancel"
      @before-leave="LeaveFrom"
      @leave="Leave"
      @after-leave="LeaveTo"
      @leave-cancelled="LeaveCancel"
      appear
      appear-active-class="animate__animated animate__bounceOut"
    >
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "animate.css";
import gsap from "gsap";

const flag = ref<Boolean>(true);
const EnterFrom = (el: Element) => {
  console.log("进入之前", el);
  gsap.set(el, {
    width: 0,
    height: 0,
  });
};
const EnterActive = (el: Element, done: gsap.Callback) => {
  console.log("过渡曲线", el);
  gsap.to(el, {
    width: 200,
    height: 200,
    onComplete: done,
  });
};
const EnterTo = (el: Element) => {
  console.log("过渡完成", el);
};
const EnterCancel = (el: Element) => {
  console.log("过渡被打断", el);
};
const LeaveFrom = (el: Element) => {
  console.log("离开之前", el);
};
const Leave = (el: Element, done: gsap.Callback) => {
  console.log("离开过渡曲线", el);
  gsap.to(el, {
    width: 200,
    height: 200,
    onComplete: done,
  });
};
const LeaveTo = (el: Element) => {
  console.log("离开完成", el);
};
const LeaveCancel = (el: Element) => {
  console.log("离开被打断", el);
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: blue;
}
.fade-enter-from {
  width: 0;
  height: 0;
}
.fade-enter-active {
  transition: all 1.5s ease;
}
.fade-enter-to {
  width: 200px;
  height: 200px;
  background-color: blue;
}
.fade-leave-from {
  width: 200px;
  height: 200px;
  background-color: blue;
}
.fade-leave-active {
  transition: all 1.5s ease;
}
.fade-leave-to {
  width: 0;
  height: 0;
}
</style>
