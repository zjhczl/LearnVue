import { createApp } from "vue";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import MsgInput from "./components/MsgInput.vue";
import { createRouter, createWebHistory } from "vue-router";
import ZjTest from "./components/ZjTest.vue";
import ZjHome from "./components/ZjHome.vue";
const router = createRouter({
  routes: [
    {
      path: "/",
      component: ZjHome,
    },
    {
      path: "/zj",
      component: ZjTest,
      children: [
        {
          //配置动态路由
          path: "/zj/:id",
          component: ZjTest,
        },
      ],
    },
  ],
  history: createWebHistory(),
});

const app = createApp(App);
app.component("hello-world", HelloWorld);
app.component("msg-input", MsgInput);
app.use(router);
app.mount("#app");
