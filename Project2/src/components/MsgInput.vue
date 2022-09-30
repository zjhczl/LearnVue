<template>
  <form @submit.prevent="getData" action="">
    <label for=""></label>
    <input type="text" v-model="data" />
    <button>submit</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      data: "",
    };
  },
  emits: ["get-msg"],
  methods: {
    getData() {
      this.$emit("get-msg", this.data);
    },
  },
};
</script>
