import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
//ElementPlu
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import locale from "element-plus/es/locale/lang//zh-cn";
//axios
import axios from "axios";
//echarts
import echarts from "echarts";

const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$https = axios;
app.use(ElementPlus, { locale });
app.use(router);
app.mount("#app");
