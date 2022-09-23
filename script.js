Vue.createApp({
  data: () => ({
    goals: [],
    enteredValue: "zj",
    msg: "dasdasdasdasda",
  }),
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
  },
}).mount("#app");
