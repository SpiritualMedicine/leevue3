<template>
  <div class="aside-me">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/grid">Grid</RouterLink>
    <RouterLink to="/flex">Flex</RouterLink>
    <RouterLink to="/todo">Todo</RouterLink>
    <RouterLink to="/drouter">drouter</RouterLink>
    <RouterLink to="/tv">tv</RouterLink>
    <RouterLink to="/tgv">tgv</RouterLink>
    <RouterLink to="/bus">bus</RouterLink>
    <RouterLink to="/tsx">tsx</RouterLink>
    <RouterLink to="/vmt">vmt</RouterLink>
    <RouterLink to="/ntt">ntt</RouterLink>
    <RouterLink to="/fv">FunctionView</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.aside-me {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.aside-me a {
  height: 33px;
  line-height: 33px;
  text-align: center;
  font-size: 1.5rem;
  width: 170px;
  border-radius: 40px;
  margin: 5px auto;
  position: relative;
  z-index: 0;
  background-color: transparent;
}
.aside-me a:hover {
  color: #eee;
  position: relative;
  z-index: 0;
  background-color: transparent;
}

.aside-me a:hover::after {
  content: "";
  background: linear-gradient(
    45deg,
    rgba(105, 5, 211, 0.7),
    rgba(141, 3, 154, 0.7)
  );
  display: block;
  position: absolute;
  bottom: -5px;
  left: 0;
  top: 5px;
  width: 100%;
  box-shadow: 5px 5px 5px #ccc;
  z-index: -1;
  border-radius: 40px;
  animation: ease 0.2s 1 up forwards;
}
@keyframes up {
  to {
    bottom: 0;
    top: 0;
  }
}

.aside-me a:first-child {
  margin-top: 2rem;
}
</style>
