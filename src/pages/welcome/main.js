import Vue from "vue";
import App from "./welcome";

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarBackgroundColor: "#b3d4db"
  }
};
