import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FlexView from "../views/FlexView.vue";
import { h } from "vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/grid",
      name: "grid",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/GridView.vue"),
    },
    {
      path: "/flex",
      name: "flex",
      component: FlexView,
    },
    {
      path: "/todo",
      name: "todo",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TodoList.vue"),
    },
    {
      path: "/tv",
      name: "transitionview",
      component: () => import("../views/TransitionView.vue"),
    },
    {
      path: "/tgv",
      name: "transitiongroupview",
      component: () => import("../views/TransitionGroupView.vue"),
    },
    {
      path: "/bus",
      name: "bustestview",
      component: () => import("../views/BusTest.vue"),
    },
    {
      path: "/tsx",
      name: "tsxview",
      component: () => import("../views/TsxView.vue"),
    },
    {
      path: "/vmt",
      name: "VModelTest",
      component: () => import("../views/VModelTestAndDirective.vue"),
    },
    {
      path: "/ntt",
      name: "nextticktest",
      component: () => import("../views/NextTickTest.vue"),
    },
    {
      path: "/fv",
      name: "FunctionView",
      component: () => import("../views/FunctionView.vue"),
    },
  ],
});

//动态路由
router.addRoute({
  path: "/drouter",
  name: "drouter",
  component: () => import("../views/DRouter.vue"),
});

router.addRoute("drouter", {
  path: "/drouter/info",
  component: {
    render() {
      return h("div", "info page");
    },
  },
});

export default router;
