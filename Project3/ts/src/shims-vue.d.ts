declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
//没有支持TS的第三方库在这声明
declare module "echarts";
declare module "*.js";
