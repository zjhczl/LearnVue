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
}
</style>
