import Vue from "vue";
import App from "./movices";

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: "豆瓣电影"
  }
};
