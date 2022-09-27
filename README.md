[TOC]

# LearnVue

## Project1

简单的例子

## Project2

新建一个 vue 项目(vite)

```
npm init vue@latest
cd <your-project-name>
npm install
npm run dev
```

## Project3

实际应用《学生管理系统》

### 局部安装 vue 并创建项目(vue-cli)。

```shell
npm init -y
npm install -D @vue/cli
npx vue -V #查看vue版本
npx vue create projectName
```

### 项目中使用 elementUI

#### 全局安装

```shell
npm install element-ui -S
```

#### main.js 引入 elementUI

```shell
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";#
import "element-ui/lib/theme-chalk/index.css";#

Vue.use(ElementUI);#
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

```

网址：https://element.eleme.cn/#/zh-CN/component/quickstart

### 使用 sass

#### 安装 sass

```
npm install sass-loader node-sass -S
```

### 使用图标

#### 安装

```
npm install -D font-awesome
```

#### 配置 main.js

```shell
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "font-awesome/css/font-awesome.min.css";#

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

```

#### 使用

```
<i class="fa fa-users"></i>
```

网址：https://fontawesome.dashgame.com/

### 使用 axios

#### 安装

```
npm install axios -S
```

#### main.js 配置 axios

```shell
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "font-awesome/css/font-awesome.min.css";
import axios from 'axios';#

Vue.prototype.axios = axios;#
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

```

### 路由

#### 安装

```
npm install vue-router@3.5.3 -S
```

#### 配置路由

创建 src/router/index.js

```shell
import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
  mode: "history",
});

```

配置 main.js

```shell
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";
import router from './router'#

Vue.prototype.axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,#
  render: (h) => h(App),
}).$mount("#app");

```

app.vue 添加出口

```
<template>
  <div id="app">
    <!-- <Home /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    // Home,
  },
};
</script>

<style lang="scss">
@import url(./assets/css/reset.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

路由懒加载
src/router/index.js

```shell
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/components/Home"),
    },
  ],
  mode: "history",
});

```

### 其他页面

需要重新在 router 里配置路由

### echarts

#### npm 安装 echarts

```
npm install -D echarts@4
```

#### main.js 挂载 echarts

```shell
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";
import router from "./router";
import echarts from "echarts";#
Vue.prototype.$echarts = echarts;#
Vue.prototype.axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

```

#### 使用 echarts

src/components/echarts/MapView.vue

```
<template>
  <div class="data-view">
    <el-card>
      <div id="main"></div>
    </el-card>
  </div>
</template>
<style lang="scss">
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 100%;

    #main {
      height: 50rem;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    //初始化echarts实例
    let myChart = this.$echarts.init(document.getElementById("main"));

    myChart.setOption({
      title: {
        text: "chart1",
      },
      toolotip: {},
      xAxis: {
        data: ["一", "二", "三", "四", "五"],
      },
      yAxis: {},
      series: [
        {
          name: "人数",
          type: "bar",
          data: [99, 34, 75, 46, 56],
        },
      ],
    });
  },
};
</script>

```

### 路由导航守卫

main.js

```
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
  //if里面设置条件
  if (to.path == "/zj") {
    next("/login");
  }
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

```

### TS 重构项目

#### 新建 ts 项目

```
npx vue create ts
```

手动配置项目选择：
◉ Babel
◉ TypeScript
◯ Progressive Web App (PWA) Support
◉ Router
◯ Vuex
◉ CSS Pre-processors
◉ Linter / Formatter
◯ Unit Testing
◯ E2E Testing

```
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? No
```

#### 安装其他依赖

```
npm install element-ui font-awesome axios echarts@4 -S
```
