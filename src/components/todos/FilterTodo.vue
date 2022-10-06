<template>
  <div class="tagCom">
    <el-tag
      v-for="item in items"
      :key="item.value"
      @click="$emit('update:modelValue', item.value)"
      :class="{ selected: modelValue === item.value }"
      class="tagClass"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script lang="ts">
export default {
  props: ["items", "modelValue"],
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.tagCom {
  display: flex;
  justify-content: center;
}
.tagClass {
  cursor: pointer;
  margin: 1rem 1rem;
  font-size: 14px;
}
</style>
