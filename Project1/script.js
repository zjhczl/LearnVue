// import "vue";
Vue.createApp({
  data: () => ({
    goals: [],
    enteredValue: "zj",
    msg: "dasdasdasdasda",
    link: "https://www.baidu.com",
  }),
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
  },
}).mount("#app");
