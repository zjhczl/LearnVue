<template>
  <div class="menu">
    <el-menu
      router
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item, index) in menus">
        <el-submenu :key="index" v-if="!item.hidden">
          <template slot="title">
            <i :class="item.iconClass"></i>&
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(child, index) in item.children">
            <el-menu-item :index="child.path" :key="index">
              <i :class="child.iconClass"></i>
              {{ child.name }}
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return { menus: [] };
  },
  created() {
    // console.log(this.$router.options.routes);
    this.menus = [...this.$router.options.routes];
    console.log(this.menus);
  },
};
</script>
<style lang="scss" scoped>
.menu {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
