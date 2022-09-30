<template>
  <div class="">
    <el-input
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="add todo"
      autocomplete="off"
    >
    </el-input>

    <el-card>
      <template #header>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <span>todolist</span>
        </div>
      </template>
      <div
        v-for="todo in filteredTodos"
        :key="todo.id"
        :class="{ completed: todo.completed, editing: todo === editedTodo }"
      >
        <div class="view">
          <el-checkbox type="checkbox" v-model="todo.completed"></el-checkbox>
          <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
          <el-button @click="removeTodo(todo)">delete</el-button>
        </div>
        <div class="edit">
          <el-input
            v-model="todo.title"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit"
            @keyup.escape="cancelEdit(todo)"
            v-todo-focus="todo === editedTodo"
          ></el-input>
        </div>
      </div>
      <el-tag
        @click="visibility = 'all'"
        :class="{ selected: visibility === 'all' }"
        >all
      </el-tag>
      <el-tag
        @click="visibility = 'completed'"
        :class="{ selected: visibility === 'completed' }"
        >completed
      </el-tag>
      <el-tag
        @click="visibility = 'active'"
        :class="{ selected: visibility === 'active' }"
        >active
      </el-tag>
    </el-card>
  </div>
</template>
<script lang="ts">
import {
  computed,
  reactive,
  toRefs,
  type DirectiveBinding,
  watchEffect,
} from "vue";
type todoItem = {
  id: number;
  title: string;
  completed: boolean;
};

interface StateOptions {
  newTodo: string;
  todos: todoItem[];
  beforeEditedCache: string;
  editedTodo: todoItem | null;
  visibility: string;
  filteredTodos: todoItem[];
}

const filters = {
  all: (todos: todoItem[]) => {
    return todos;
  },
  active: (todos: todoItem[]) => {
    return todos.filter((todo) => !todo.completed);
  },
  completed: (todos: todoItem[]) => {
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
  save(todos: todoItem[]) {
    localStorage.setItem("vue3-todos", JSON.stringify(todos));
  },
};
export default {
  setup() {
    const state: StateOptions = reactive({
      newTodo: "",
      todos: todoStorage.get(),
      beforeEditedCache: "",
      editedTodo: null,
      visibility: "all",
      filteredTodos: computed<todoItem[]>(() => {
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

    function editTodo(todo: todoItem) {
      state.beforeEditedCache = todo.title;
      state.editedTodo = todo;
    }

    function cancelEdit(todo: todoItem) {
      todo.title = state.beforeEditedCache;
      state.editedTodo = null;
    }

    function doneEdit() {
      state.editedTodo = null;
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
