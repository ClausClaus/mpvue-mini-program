<template>
  <view class="article-detail-container" :data-post_id="item.postId">
    <view class="image-header">
      <image class="article-image" :src="item.imgSrc"/>
      <image class="music-icon" :src="musicStatusImg"/>
    </view>
    <view class="author-info-wrap">
      <image class="author-avatar" :src="item.avatar"/>
      <text class="author-name">{{item.author}}</text>
      <text class="deliver-date">发表于<text class="date">{{item.dateTime}}</text></text>
    </view>
    <view class="article-title">{{item.title}}</view>
    <view class="article-operate">
      <image class="operate-icon" @tap.stop="collectArticle" :src="collected ? '/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'"/>
      <image class="operate-icon" @tap.stop="toast"  src="/static/images/icon/share-anti.png"/>
    </view>
    <view class="article-content">
      {{item.detail}}
    </view>
  </view>
</template>

<script>
import { saveCollect, loadCollect } from "@/common/js/cache";
export default {
  components: {},
  data() {
    return {
      collected: false
    };
  },
  computed: {
    item() {
      return this.$store.getters.article;
    }
  },
  methods: {
    collectArticle() {
      let collected = saveCollect(this.item.postId);
      this.collected = collected;
      wx.showToast({
        title: this.collected ? "收藏成功" : "取消成功",
        duration: 1000,
        icon: "success"
      });
    }
  },
  onLoad(options) {
    this.collected = loadCollect(options.postId);
  }
};
</script>

<style lang="less">
.article-detail-container {
  .image-header {
    width: 750rpx;
    height: 450rpx;
    position: relative;
    .article-image {
      width: 100%;
      height: 100%;
    }
    .music-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      transform: translate(-50%, -50%);
      width: 100rpx;
      height: 100rpx;
      text-align: center;
    }
  }
  .author-info-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 23rpx 0;
    .author-avatar {
      width: 60rpx;
      height: 60rpx;
      border-radius: 50%;
      margin-left: 32rpx;
      margin-right: 24rpx;
    }
    .author-name {
      font-size: 28rpx;
      color: #666666;
    }
    .deliver-date {
      margin-left: 22px;
      font-size: 24rpx;
      color: #999;
      .date {
        margin-left: 32rpx;
      }
    }
  }
  .article-title {
    font-size: 35rpx;
    font-weight: bold;
    color: #333;
    margin-left: 45rpx;
  }
  .article-operate {
    margin-left: 45rpx;
    margin-right: 40rpx;
    padding: 20rpx 0 30rpx 0;
    height: 90rpx;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      z-index: -1;
      transform: translateY(-50%);
      width: 100%;
      height: 1px;
      background: #e5e5e5;
      line-height: 90rpx;
    }
    .operate-icon {
      width: 90rpx;
      height: 90rpx;
      &:last-of-type {
        margin-left: 30rpx;
      }
    }
  }
  .article-content {
    color: #666;
    font-size: 24rpx;
    margin-bottom: 20rpx;
    margin-left: 20rpx;
    letter-spacing: 2rpx;
    line-height: 40rpx;
    margin: 0 45rpx 0 30rpx;
  }
}
</style>
