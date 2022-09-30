<template>
  <div class="hello">
    <h1 @click="getClick">{{ msg }}</h1>
    <h1>{{ msg2 }}</h1>
  </div>
</template>

<script>
export default {
  // props: ["msg"],
  props: {
    // msg: String,

    msg: {
      type: String,
      required: true,
      //只是在控制台给提示
      validator: function (value) {
        if (value == "hello world2") return false;
        return true;
      },
    },
    msg2: {
      type: String,
      default: "jjjjjjjjj",
    },
  },
  methods: {
    getClick() {
      //第一个参数是事件名，以后的参数是数据
      this.$emit("e-zj", this.msg2);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
