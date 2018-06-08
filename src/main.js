import Vue from "vue";
import App from "./App";
import store from "./store";
Vue.config.productionTip = false;
App.mpType = "app";
Vue.prototype.$store = store; // 将vuex挂载到vue的原型上面
const app = new Vue({
  App
});
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    // pages: ["pages/logs/main", "^pages/index/main"],
    pages: [
      "^pages/article/main",
      "pages/article-detail/main",
      "pages/welcome/main"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  }
};
