<template>
  <renderDom title="woshibiaoti" @on-click="getNum"></renderDom>
</template>

<script setup lang="ts">
import renderDom from "./TsxView";

const getNum = (v: string | number) => {
  console.log(v);
};
</script>

<style scoped></style>
