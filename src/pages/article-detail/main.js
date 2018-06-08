import Vue from "vue";
import App from "./article-detail";

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: "阅读",
    navigationBarBackgroundColor: "#405f80",
    navigationBarTextStyle: "#fff"
  }
};
