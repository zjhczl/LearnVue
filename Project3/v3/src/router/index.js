import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
// import Home from "@/components/Home";
// import Login from "@/components/Login";
const routes = [
  // {
  //   path: "/home",
  //   name: "home",
  //   component: Home,
  // },
  {
    path: "/",
    redirect: "/login",
    hidden: true,
    component: () => import("@/components/Login"),
  },
  {
    path: "/login",
    hidden: true,
    component: () => import("@/components/Login"),
  },
  // {
  //   path: "*",
  //   name: "NotFound",
  //   hidden: true,
  //   component: () => import("@/components/NotFound"),
  // },
  {
    path: "/home",
    name: "学生管理",
    redirect: "/home/students",
    iconClass: "fa fa-users",
    component: () => import("@/components/Home"),
    children: [
      {
        path: "/home/students",
        name: "学生列表",
        iconClass: "fa fa-list",
        component: () => import("@/components/students/StudentsList.vue"),
      },
      {
        path: "/home/work",
        name: "学生作业",
        iconClass: "fa fa-th-list",
        component: () => import("@/components/students/WorkList.vue"),
      },
    ],
  },
  {
    path: "/home",
    name: "视图管理",
    redirect: "/home/students",
    iconClass: "fa fa-users",
    component: () => import("@/components/Home"),
    children: [
      {
        path: "/home/dataview",
        name: "数据展示",
        iconClass: "fa fa-th-list",
        component: () => import("@/components/echarts/DataView.vue"),
      },
      {
        path: "/home/mapview",
        name: "地图展示",
        iconClass: "fa fa-th-list",
        component: () => import("@/components/echarts/MapView.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
