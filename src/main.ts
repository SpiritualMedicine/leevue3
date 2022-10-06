import { createApp } from "vue";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import EditTodo from "./components/todos/EditTodo.vue";

import mitt from "mitt";

const Mit = mitt();
declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit;
  }
}

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.component("EditTodo", EditTodo);

app.config.globalProperties.$Bus = Mit;

app.mount("#app");
