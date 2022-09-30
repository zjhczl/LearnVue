<template>
  <section>
    <h1>{{ title }}</h1>
    <msg-input @get-msg="getMsg"></msg-input>

    <hello-world :msg="data" :msg2="msg" @e-zj="getAlter"></hello-world>
    <input type="text" v-model="msg" />
  </section>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  data() {
    return {
      title: "home",
      msg: "dsads",
      data: "",
    };
  },
  methods: {
    getAlter(msgChlid) {
      alert(msgChlid);
    },
    getMsg(data) {
      this.data = data;
      // alert(data);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
