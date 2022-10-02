<template>
  <el-tag
    v-for="item in items"
    :key="item.value"
    @click="$emit('update:modelValue', item.value)"
    :class="{ selected: modelValue === item.value }"
    class="tagClass"
  >
    {{ item.label }}
  </el-tag>
</template>

<script lang="ts">
export default {
  props: ["items", "modelValue"],
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.tagClass {
  cursor: pointer;
}
</style>
