<template>
  <input
    type="text"
    :value="todoTitle"
    @input="onInputChange"
    v-bind="$attrs"
    autofocus
    class="el-input"
  />
</template>

<script lang="ts">
export default {
  props: {
    todoTitle: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInputChange(e: Event) {
      (this as any).$emit(
        "update:todoTitle",
        (e.target as HTMLInputElement).value
      );
    },
  },
};
</script>

<style></style>
