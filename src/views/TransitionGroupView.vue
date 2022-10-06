<template>
  <el-button @click="list.push(list.length + 1)">add</el-button>
  <el-button @click="list.pop()">del</el-button>
  <div class="tgv">
    <transition-group
      tag="section"
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOut"
    >
      <div class="item" :key="item" v-for="item in list">{{ item }}</div>
    </transition-group>
  </div>
  <el-button @click="shuffle">shuffle</el-button>
  <div class="tgv-list">
    <transition-group
      tag="div"
      class="wraps"
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOut"
      move-class="move"
    >
      <div class="items" :key="item.id" v-for="item in list2">
        {{ item.number }}
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import "animate.css";
import _ from "lodash";
const list = reactive<number[]>([1, 2, 3, 4, 5, 6]);
let list2 = ref(
  Array.apply(null, { length: 81 } as number[]).map((_, index) => {
    return {
      id: index,
      number: (index % 9) + 1,
    };
  })
);
const shuffle = () => {
  list2.value = _.shuffle(list2.value);
};
</script>

<style scoped>
.tgv {
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  border: 1px solid #ccc;
}
.item {
  margin: 10px;
}
.wraps {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 9 + 9px);
}
.items {
  width: 25px;
  height: 25px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.move {
  transition: all 1.5s ease-in-out;
}
</style>
