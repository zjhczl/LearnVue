<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Login</span>
      </div>
      <el-form label-width="80px" :model="form" prop="username">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" prop="password"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>

        <el-button @click="login(form)">登陆</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login(form) {
      alert(form.username);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  // background-color: red;
  .box-card {
    width: 30%;
    margin: 20rem auto;
  }
}
</style>
