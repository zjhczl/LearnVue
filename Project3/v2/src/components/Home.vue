<template>
  <div class="home">
    <Header class="header"></Header>

    <Menu class="menu"></Menu>

    <router-view></router-view>

    <Footer class="footer"></Footer>
  </div>
</template>
``
<script>
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import Menu from "./common/Menu.vue";

export default {
  components: { Header, Footer, Menu },
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  width: 100%;
  height: 100vh;

  color: red;
  display: grid;
  grid-template-rows: 1fr 15fr 1fr;
  grid-template-columns: 1fr 8fr;
  .header {
    grid-row: 1/2;
    grid-column: 1/3;
  }
  .menu {
    background-color: aqua;
  }
  .footer {
    grid-column: 1/3;
    background-color: white;
  }
  .el-button {
    font-size: 2rem;
  }
}
</style>
