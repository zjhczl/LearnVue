import Vue from "vue";
//import VueRouter, { RouteConfig } from "vue-router";
//import HomeView from "../views/HomeView.vue";
import Router from "vue-router";
Vue.use(Router);

const routes: Array<any> = [
  {
    path: "/",
    redirect: "/login",
    hidden: true,
    component: () => import("@/components/Login.vue"),
  },
  {
    path: "/login",
    hidden: true,
    component: () => import("@/components/Login.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    hidden: true,
    component: () => import("@/components/NotFound.vue"),
  },
  {
    path: "/home",
    name: "学生管理",
    redirect: "/home/students",
    iconClass: "fa fa-users",
    component: () => import("@/components/Home.vue"),
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
    component: () => import("@/components/Home.vue"),
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

const router = new Router({
  mode: "history",
  routes,
});

export default router;
