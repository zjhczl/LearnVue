<template>
  <div class="hello">
    <h1>hello</h1>
    <el-button type="info">hello</el-button>
    <el-button type="danger">hello</el-button>
    <el-button type="primary">hello</el-button>
    <i class="fa fa-users"></i>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
.hello {
  color: red;
  .el-button {
    font-size: 2rem;
  }
}
</style>
