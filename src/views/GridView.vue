<template>
  <div class="grid">
    <div class="item-1">1</div>
    <div>1</div>
    <div>1</div>
    <div class="item-4">4</div>
    <div>1</div>
    <div @click="store.increment">store: {{ store.count }}</div>
    <div>
      <el-button @click="backToDR()">{{ state.back }}</el-button>
    </div>
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  gap: 30px 20px;
  min-height: 100%;
}
.grid .item-4 {
  grid-column-start: span 3;
}
</style>

<script setup lang="ts">
import { reactive, watch } from "vue";
import {
  onBeforeRouteLeave,
  useRoute,
  useRouter,
  type RouteLocationNormalized,
} from "vue-router";
import { useCounterStore } from "@/stores/counter";

const state = reactive({
  back: "back",
});

const store = useCounterStore();
console.log(store);
//获取路由器的实例
const router = useRouter();

//route是响应式对象
const route = useRoute();

watch(
  () => route.query,
  (query) => {
    console.log(query);
  }
);

onBeforeRouteLeave(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    const answer = window.confirm("qqqqqq");
    console.log(to, from);
    if (!answer) {
      return false;
    }
  }
);
function backToDR() {
  router.push("/");
}
</script>
