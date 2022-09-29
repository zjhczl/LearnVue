import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";
import router from "./router";
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
Vue.prototype.axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  console.log(to.path);
  if (to.path == "/zj") {
    next("/login");
  }
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
