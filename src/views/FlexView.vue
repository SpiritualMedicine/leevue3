<script setup lang="ts">
import {
  computed,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";

const msg = ref("some message");

//使用元素引用
const desc = ref<Node | null>(null);
const { counter, doubleCounter } = useCounter();

watch(counter, (val, oldVal) => {
  (desc.value as Node).textContent = `counter change from ${oldVal} to ${val}`;
});
interface COUNTER_TYPE {
  counter: number;
  doubleCounter: number;
}
function useCounter() {
  const data: COUNTER_TYPE = reactive({
    counter: 1,
    doubleCounter: computed(() => data.counter * 2),
  });

  let timer: ReturnType<typeof setTimeout>;

  onMounted(() => {
    timer = setInterval(() => {
      data.counter++;
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });

  return toRefs(data);
}
</script>
<template>
  <div class="flex">
    <div>{{ msg }}</div>
    <div>{{ counter }}</div>
    <div>{{ doubleCounter }}</div>
    <div ref="desc"></div>
  </div>
</template>
<style>
.flex {
  display: flex;
  background: skyblue;
  flex-direction: column;
}
</style>
