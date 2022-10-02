<template>
  <div
    :class="{
      completed: todo.completed,
      editing: todo === editedTodo,
    }"
  >
    <div class="view">
      <el-checkbox type="checkbox" v-model="localtodo.completed"></el-checkbox>
      <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
      <el-button @click="removeTodo(todo)">delete</el-button>
    </div>
    <div class="edit">
      <EditTodo
        v-model:todoTitle="localtodo.title"
        @blur="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.escape="cancelEdit(todo)"
        v-todo-focus="todo === editedTodo"
      ></EditTodo>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref, toRefs, type DirectiveBinding } from "vue";
export declare type todoItem = {
  id: number;
  title: string;
  completed: boolean;
};

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    editedTodo: Object,
  },
  emits: ["remove-todo", "update:edited-todo"],
  setup(props: any, { emit }: any) {
    const state = reactive({
      beforeEditedCache: "",
    });
    const localtodo = ref(props.todo);
    function editTodo(todo: todoItem) {
      state.beforeEditedCache = todo.title;
      //state.editedTodo = todo;
      emit("update:edited-todo", todo);
    }
    function cancelEdit(todo: todoItem) {
      todo.title = state.beforeEditedCache;
      //state.editedTodo = null;
      emit("update:edited-todo", null);
    }
    function doneEdit() {
      //state.editedTodo = null;
      emit("update:edited-todo", null);
    }
    function removeTodo(todo: todoItem) {
      emit("remove-todo", todo);
    }
    return {
      ...toRefs(state),
      localtodo,
      removeTodo,
      editTodo,
      cancelEdit,
      doneEdit,
    };
  },
  directives: {
    "todo-focus": (el: HTMLInputElement, { value }: DirectiveBinding) => {
      if (value as boolean) {
        el.querySelector("input")?.focus();
      }
    },
  },
};
</script>

<style scoped>
.completed label {
  text-decoration: line-through;
}

.edit,
.editing .view {
  display: none;
}

.view,
.editing .edit {
  display: block;
}
</style>
