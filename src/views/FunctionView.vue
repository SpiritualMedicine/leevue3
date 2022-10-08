<template>
  <div>
    <btn text="ldladlsa" @on-click="getBtn">
      <template #default>123</template>
    </btn>
  </div>
</template>

<script setup lang="ts">
import { h } from "vue";

type Props = {
  text?: string;
};

const btn = (props: Props, ctx: any) => {
  return h(
    "div",
    {
      class: ["roudned"],
      onClick: () => {
        ctx.emit("on-click", "woshiannie");
      },
    },
    //props.text
    ctx.slots.default()
  );
};
const getBtn = (str: string) => {
  console.log(str);
};
</script>

<style scoped>
.roudned {
  border-radius: 20px;
  text-align: center;
  background-color: aquamarine;
  color: red;
}
</style>
