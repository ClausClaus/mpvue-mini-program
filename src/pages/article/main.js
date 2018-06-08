import Vue from "vue";
import App from "./article";

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: "文与字",
    navigationBarBackgroundColor: "#405f80"
  }
};
