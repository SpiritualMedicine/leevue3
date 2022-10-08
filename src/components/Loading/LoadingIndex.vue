<template>
  <div v-if="isShow" class="loading">Loading...</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isShow = ref<boolean>(false);

const show = () => {
  isShow.value = true;
};
const hide = () => {
  isShow.value = false;
};

defineExpose({
  show,
  hide,
});
</script>

<style scoped>
.loading {
  background-color: black;
  opacity: 0.7;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}
</style>
