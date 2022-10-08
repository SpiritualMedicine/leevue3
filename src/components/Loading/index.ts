import type { App, VNode } from "vue";
import Loading from "./LoadingIndex.vue";
import { createVNode, render } from "vue";
//对象形式（必须有install函数） 或 函数形式
export default {
  install(app: App) {
    const vNode: VNode = createVNode(Loading);
    render(vNode, document.body);
    app.config.globalProperties.$myLoading = {
      show: vNode.component?.exposed?.show,
      hide: vNode.component?.exposed?.hide,
    };
    console.log(app, 123, vNode);
  },
};
