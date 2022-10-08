import { createApp, toRaw } from "vue";
import { createPinia, type PiniaPluginContext } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import EditTodo from "./components/todos/EditTodo.vue";
//全局注册loading
import Loading from "./components/Loading";
//自定义use
//import { MyUse } from "./myUse";
import mitt from "mitt";
type Filters = {
  format<T>(str: T): string;
};
type MyLoading = {
  show: () => void;
  hide: () => void;
};
const Mit = mitt();
declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit;
    $filters: Filters;
    $myLoading: MyLoading;
  }
}
export const app = createApp(App);

const piniaPlugin = (ctx: PiniaPluginContext) => {
  const { store } = ctx;
  const data = getStorage("__PINIA__");
  store.$subscribe(() => {
    setStorage("__PINIA__", toRaw(store.$state));
  });
  return { ...data };
};
const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const getStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as any);
};
const store = createPinia();
store.use(piniaPlugin);
app.use(store);
app.use(router);
app.use(ElementPlus, { size: "small", zIndex: 3000 });

//MyUse(Loading, []);
app.use(Loading);
app.component("EditTodo", EditTodo);

//全局函数
app.config.globalProperties.$Bus = Mit;
app.config.globalProperties.$filters = {
  format<T>(str: T): string {
    return `真.${str}`;
  },
};
app.mount("#app");
