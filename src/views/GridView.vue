<template>
  <div class="grid">
    <div class="item-1">1</div>
    <div>1</div>
    <div>1</div>
    <div class="item-4">4</div>
    <div>1</div>
    <div>1</div>
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
