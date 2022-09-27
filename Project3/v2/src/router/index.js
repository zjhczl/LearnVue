import Vue from "vue";
import Router from "vue-router";
// import Home from "../components/Home.vue";
Vue.use(Router);
export default new Router({
  routes: [
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
    //   path: "/home",
    //   component: () => import("@/components/Home"),
    // },
    {
      path: "*",
      name: "NotFound",
      hidden: true,
      component: () => import("@/components/NotFound"),
    },
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
  ],
  mode: "history",
});
