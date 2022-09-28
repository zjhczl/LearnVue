<template>
  <div class="data-view">
    <el-card>
      <div id="main"></div>
    </el-card>
  </div>
</template>
<style lang="scss">
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 100%;

    #main {
      height: 50rem;
    }
  }
}
</style>
<script>
//中国地图数据
import chinaJson from "echarts/map/json/china";
export default {
  data() {
    return {};
  },
  mounted() {
    //初始化echarts实例
    let myChart = this.$echarts.init(document.getElementById("main"));
    //注册地图
    this.$echarts.registerMap("china", chinaJson);
    myChart.setOption({
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
  },
};
</script>
