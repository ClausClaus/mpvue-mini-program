import Vue from "vue";
import App from "./more-movice";

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: "豆瓣电影"
  }
};
