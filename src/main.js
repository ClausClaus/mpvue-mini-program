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
      "pages/article/main",
      "pages/article-detail/main",
      "pages/welcome/main",
      "pages/movices/main",
      "^pages/more-movice/main"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    // 底部tabBar
    tabBar: {
      borderStyle: "white",
      position: "bottom",
      selectedColor: "#1F4BA5",
      color: "#707070",
      list: [
        {
          pagePath: "pages/article/main",
          text: "文章",
          iconPath: "/static/images/tab/yuedu.png",
          selectedIconPath: "/static/images/tab/yuedu_hl.png"
        },
        {
          pagePath: "pages/movices/main",
          text: "电影",
          iconPath: "/static/images/tab/dianying.png",
          selectedIconPath: "/static/images/tab/dianying_hl.png"
        }
      ]
    }
  }
};
