<template>
  <view class="welcome-container">
      <image class="user-avatar" src="/static/images/4.png"/>
      <text class="user-info-desc">Hello, Smile</text>
      <view  class="open-wechat-btn" @tap.stop="open">
       <text class="open-wechat-text">开启小程序之旅</text>
      </view>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    open() {
      wx.redirectTo({
        url: "/pages/article/main"
      });
    }
  },
  components: {}
};
</script>

<style lang="less">
page {
  height: 100%;
  background: #b3d4db;
}
.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .user-avatar {
    width: 200rpx;
    height: 200rpx;
    margin-top: 160rpx;
  }
  .user-info-desc {
    font-size: 32rpx;
    font-weight: bold;
    margin-top: 100rpx;
  }
  .open-wechat-btn {
    margin-top: 200rpx;
    border: 1px solid #405f80;
    width: 200rpx;
    height: 80rpx;
    text-align: center;
    border-radius: 4px;
    .open-wechat-text {
      font-size: 22rpx;
      font-weight: bold;
      color: #405f80;
      line-height: 80rpx;
    }
  }
}
</style>
