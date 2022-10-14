<template>
  <div class="floating">
    <div class="pad">
      <div class="hover">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.floating {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

@keyframes ro {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
.floating::after {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  /*background: conic-gradient(from 0deg, white, deepskyblue);*/
  background: conic-gradient(transparent, #8758ff, transparent, deepskyblue);
  z-index: -1;
  animation: 4s linear infinite ro;
}

.pad {
  position: absolute;
  inset: 6px;
  border-radius: 16px;
  background-color: #181818;
  z-index: 1;
}
.hover {
  position: relative;
  z-index: 2;
  color: #eee;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
