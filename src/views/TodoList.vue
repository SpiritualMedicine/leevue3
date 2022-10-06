<template>
  <div class="todolist">
    <EditTodo
      v-model:todoTitle="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增待办"
      autocomplete="off"
    >
    </EditTodo>

    <el-card shadow="always">
      <template #header>
        <div class="card-title">
          <span>TodoList</span>
        </div>
      </template>
      <TodoItem
        v-for="todo in filteredTodos"
        :todo="todo"
        :key="todo.id"
        v-model:edited-todo="editedTodo"
        @remove-todo="removeTodo"
      ></TodoItem>
      <FilterTodo :items="filteredItems" v-model="visibility"></FilterTodo>
    </el-card>
  </div>
</template>
<script lang="ts">
import { computed, reactive, toRefs, watchEffect, defineComponent } from "vue";
import EditTodo from "../components/todos/EditTodo.vue";
import TodoItem from "../components/todos/TodoItem.vue";
import FilterTodo from "../components/todos/FilterTodo.vue";

type todoItem = {
  id: number;
  title: string;
  completed: boolean;
};

interface StateOptions {
  newTodo: string;
  todos: Array<todoItem>;
  beforeEditedCache: string;
  editedTodo: todoItem | null;
  visibility: string;
  filteredItems: Array<{ label: string; value: string }>;
  filteredTodos: Array<todoItem>;
}
const filters = {
  all: (todos: Array<todoItem>) => {
    return todos;
  },
  active: (todos: Array<todoItem>) => {
    return todos.filter((todo) => !todo.completed);
  },
  completed: (todos: Array<todoItem>) => {
    return todos.filter((todo) => todo.completed);
  },
};

//缓存
const todoStorage = {
  get() {
    let todos = JSON.parse(localStorage.getItem("vue3-todos") || "[]");
    todos.forEach((todo: todoItem, index: number) => {
      todo.id = index + 1;
    });
    return todos;
  },
  save(todos: Array<todoItem>) {
    localStorage.setItem("vue3-todos", JSON.stringify(todos));
  },
};
export default defineComponent({
  setup() {
    const state: StateOptions = reactive({
      newTodo: "",
      todos: todoStorage.get(),
      beforeEditedCache: "",
      editedTodo: null,
      visibility: "all",
      filteredItems: [
        { label: "All", value: "all" },
        { label: "Active", value: "active" },
        { label: "Completed", value: "completed" },
      ],
      filteredTodos: computed<Array<todoItem>>(() => {
        return filters[state.visibility as keyof typeof filters](state.todos);
      }),
    });
    function addTodo() {
      const todoitem: todoItem = {
        id: state.todos.length + 1,
        title: state.newTodo,
        completed: false,
      };
      state.todos.push(todoitem);
      state.newTodo = "";
    }

    function removeTodo(todo: todoItem) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    }
    watchEffect(() => {
      todoStorage.save(state.todos);
    });
    return {
      ...toRefs(state),
      addTodo,
      removeTodo,
    };
  },
  components: { EditTodo, TodoItem, FilterTodo },
});
</script>
<style scoped>
.todolist {
  margin: 0;
}
.card-title {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
