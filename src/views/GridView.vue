<template>
  <div class="grid">
    <div class="item-1">1</div>
    <div>1</div>
    <div>1</div>
    <div class="item-4">
      <button>Shine</button>
    </div>
    <div>1</div>
    <div @click="store.increment">store: {{ store.count }}</div>
    <div>
      <el-button type="primary" @click="backToDR()">{{ state.back }}</el-button>
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
.item-4 button {
  width: 12rem;
  font-size: 1rem;
  height: calc(1rem+40px);
  line-height: 20px;
  border-radius: 40px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #dedede;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  /*本来想用径向渐变的还没想好径向渐变要怎么搞*/
  background: radial-gradient(
      circle at -26.7% 25%,
      rgba(255, 100, 0, 0.5),
      rgba(255, 0, 0, 0) 80%
    ),
    radial-gradient(
      circle at 36.7% 50%,
      rgba(0, 100, 255, 0.5),
      rgba(0, 0, 255, 0) 70.71%
    ),
    radial-gradient(
      circle at 66.7% 75%,
      rgba(0, 255, 100, 0.5),
      rgba(0, 0, 255, 0) 70.71%
    ),
    radial-gradient(
      circle at 133.3% 75%,
      rgba(255, 100, 0, 0.5),
      rgba(0, 255, 0, 0) 80%
    );
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  color: #dfdfdf;
  background-size: 400% 100%;
  background-repeat: repeat-x;
}
.item-4 button:hover {
  animation: 8s infinite linear bg;
}
.item-4 button::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 40px;
  opacity: 0;
  transition: 0.5s;
}
.item-4 button:hover::before {
  filter: blur(20px);
  opacity: 1;
  animation: animate 8s linear infinite;
}
@keyframes bg {
  100% {
    background-position: 400% 0;
  }
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
import { useCounterStore } from "@/stores";

const state = reactive({
  back: "back",
});

const store = useCounterStore();
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
    //const answer = window.confirm("qqqqqq");
    const answer = true;
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
