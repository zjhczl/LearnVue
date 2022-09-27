<template>
  <div class="header">
    <div class="title">学生管理系统</div>
    <div class="username">{{ name }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return { name: "zj" };
  },
};
</script>
<style lang="scss" scoped>
.header {
  color: orange;
  background-color: rgb(28, 28, 163);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 3rem;
  .title {
    // background-color: red;
    font-size: 2rem;
  }
  .username {
    // background-color: red;
    font-size: 1.5rem;
  }
}
</style>
