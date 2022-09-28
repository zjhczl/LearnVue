<template>
  <div class="data-view">
    <el-card>
      <div id="main1"></div>
    </el-card>
    <el-card>
      <div id="main2"></div>
    </el-card>
  </div>
</template>
<style lang="scss">
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 50%;
    #main1,
    #main2 {
      height: 50rem;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    //初始化echarts实例
    let myChart1 = this.$echarts.init(document.getElementById("main1"));
    myChart1.setOption({
      title: {
        text: "chart1",
      },
      toolotip: {},
      xAxis: {
        data: ["一", "二", "三", "四", "五"],
      },
      yAxis: {},
      series: [
        {
          name: "人数",
          type: "bar",
          data: [99, 34, 75, 46, 56],
        },
      ],
    });

    let myChart2 = this.$echarts.init(document.getElementById("main2"));
    myChart2.setOption({
      title: {
        text: "chart1",
      },
      toolotip: {},
      xAxis: {
        data: ["一", "二", "三", "四", "五"],
      },
      yAxis: {},
      series: [
        {
          name: "人数",
          type: "line",
          data: [99, 34, 75, 46, 56],
        },
      ],
    });
  },
};
</script>
