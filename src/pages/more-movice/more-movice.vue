<template>
  <div class="more-movice-container">
    <movice-grid :moviceList="moviceList"></movice-grid>
  </div>
</template>

<script>
import { THEATERS, TOP250, COMINGSOON } from "@/api/config";
import { HTTP } from "@/api/base-request";
import { normalLizeMovice } from "@/common/js/reset-movice";
import moviceGrid from "@/components/movice-grid";
export default {
  data() {
    return {
      moviceList: [],
    };
  },
  onLoad(options) {
    this.categoryTitle = options.category;
    let url = "";
    switch (this.categoryTitle) {
      case "正在热映":
        url = THEATERS;
        break;
      case "豆瓣Top250":
        url = TOP250;
        break;
      case "即将上映":
        url = COMINGSOON;
        break;
    }
    this.$store.commit("URL", url);
    this.$store
      .dispatch("moviceRequest", {
        params: { count: 18 }
      })
      .then(list => {
        this.moviceList = list;
      });
  },
  components: {
    moviceGrid
  },
  onReady() {
    wx.setNavigationBarTitle({
      title: this.categoryTitle || "测试"
    });
  }
};
</script>

<style lang="less">
</style>
