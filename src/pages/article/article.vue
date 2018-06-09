<template>
  <view class="page">
  <swiper class="swiper-container" :indicator-dots="indicatorDots"
    :autoplay="autoplay" :interval="interval" :duration="duration" >
    <block v-for="(item,index) in imgs" :key="index">
      <swiper-item>
        <image :src="item.img"/>
      </swiper-item>
    </block>
  </swiper>
     <article-list @seeDetail="getDetail"></article-list>
  </view>
</template>

<script>
import ArticleList from "@/components/article-list";
export default {
  data() {
    return {
      // 轮播图配置项
      autoplay: true,
      interval: 4000,
      duration: 500,
      indicatorDots: true,
      imgs: [
        { img: "/static/images/iqiyi.png" },
        { img: "/static/images/vr.png" },
        { img: "/static/images/wx.png" }
      ]
    };
  },
  components: {
    "article-list": ArticleList
  },
  created() {},
  methods: {
    getDetail(item) {
      wx.navigateTo({
        url: `/pages/article-detail/main?postId=${item.postId}`
      });
      this.$store.commit("GET_ARTICLE_DETAIL", item);
    }
  }
};
</script>

<style lang="less">
.swiper-container {
  width: 100%;
  height: 600rpx;
  image {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
}
</style>
