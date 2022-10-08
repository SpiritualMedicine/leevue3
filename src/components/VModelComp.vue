<template>
  <div>
    <h2>zizujian</h2>
    <div>{{ modelValue }}</div>
    <el-button @click="close">{{ textVal }}</el-button>
    <input @input="change" @change="change" :value="textVal" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: Boolean;
  textVal: string;
  textValModifiers?: {
    isNew: Boolean;
  };
}>();

const emit = defineEmits(["update:modelValue", "update:textVal"]);

const close = () => {
  emit("update:modelValue", false);
};
const change = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit(
    "update:textVal",
    props?.textValModifiers?.isNew ? target.value + "new" : target.value
  );
};
</script>

<style scoped></style>
