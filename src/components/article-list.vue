<template>
  <view class="article-list-container">
      <block v-for="(item,index) in grouplist" :key="index">
        <view class="article-item" @tap.stop="seeDetail(item)">
          <view class="article-author-wrap">
            <image class="author-avatar" :src="item.avatar"/>
            <text class="deliver-date">{{item.date}}</text>
          </view>
          <view class="article-title">{{item.title}}</view>
          <image class="article-image" :src="item.imgSrc"/>
          <view class="article-content">
            {{item.content}}
          </view>
          <view class="article-read-wrap">
            <image class="article-like-icon" src="/static/images/icon/chat.png"/>
            <text class="article-like-num">{{item.collection}}</text>
            <image class="article-like-icon" src="/static/images/icon/view.png"/>
            <text class="article-like-num">{{item.reading}}</text>
          </view>
        </view>
    </block>
  </view>
</template>

<script>
import articleDataArr from "@/data/mock/posts-data.js";

export default {
  components: {},
  data() {
    return {
      grouplist: articleDataArr
    };
  },
  methods: {
    seeDetail(item) {
      this.$emit("seeDetail", item);
    }
  }
};
</script>

<style lang="less">
.article-list-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  border-bottom: 1px solid #ededed;
  border-top: 1px solid #ededed;
  .article-item {
    margin-bottom: 20px;
    background: #ffffff;
    &:last-of-type {
      margin-bottom: 0;
    }
    .article-author-wrap {
      margin: 10rpx 0 20rpx 10rpx;
      .author-avatar {
        width: 60rpx;
        height: 60rpx;
        vertical-align: middle;
      }
      .deliver-date {
        margin: 0 0 20px 20rpx;
        vertical-align: middle;
        font-size: 26rpx;
      }
    }
    .article-title {
      font-size: 34rpx;
      font-weight: bold;
      color: #333;
      margin: 0 0 10px 10px;
    }
    .article-image {
      width: 100%;
      height: 340rpx;
      margin: auto 0;
      margin-bottom: 15px;
    }
    .article-content {
      color: #666;
      font-size: 28rpx;
      margin-bottom: 20rpx;
      margin-left: 20rpx;
      letter-spacing: 2rpx;
      line-height: 40rpx;
    }
    .article-read-wrap {
      font-size: 20rpx;
      flex-direction: row;
      line-height: 16px;
      margin: 20rpx 0;
      margin-left: 10px;
      .article-like-icon {
        height: 16px;
        width: 16px;
        margin-right: 8px;
        vertical-align: middle;
      }
      .article-like-num {
        vertical-align: -1px;
        margin-right: 20px;
      }
    }
  }
}
</style>
