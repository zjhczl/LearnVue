# vue 原理

## 数据变化绑定

```javascript
const data = {
  message: "zj",
  longMessage: "",
};
const handler = {
  set: function (target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
    if ((key = "message")) target.longMessage = "long" + value;
  },
};
const proxy = new Proxy(data, handler);
proxy.message = "asd";
console.log(proxy.longMessage);
```

## virtual dom

## vue life circle

createApp()->beforeCreate()->created()->beforeMount()->mounted()
![图片](./img/vue.png)

## 使用 vue-cli

全局安装

```shell
npm install -g @vue/cli
```

创建项目

```shell
vue create project
```

## vs code 扩展

vetur

## vue 组件

## http

post 数据

```
fetch("https://xxxx",{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  body:Json.stringify({name:"key",value:"sdasdasda"});
})
```

get 数据

```javascript
fetch("https://xxxx")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (data) {
    console.log(data);
  });
```

## vue-router

安装 vue-router

```
npm install vue-router -S
```

在 main.js 引入 router

```javascript
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
    },
  ],
  history: createWebHistory(),
});

const app = createApp(App);
app.component("hello-world", HelloWorld);
app.component("msg-input", MsgInput);
app.use(router);
app.mount("#app");
```

在 app.vue 导入页面

```
<router-view></router-view>
```

页面跳转

```html
<router-link to="/home"></router-link>
```

```javascript
this.$router.push("/home");
this.$router.back();
this.$router.forward();
```
