<template>
  <view class="movice-item">
    <image class="movice-item-img" src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2395733377.jpg" />
    <text class="movice-item-name">你的名字</text>
    <star></star>
  </view>
</template>

<script>
import Star from "@/components/star";
export default {
  data() {
    return {};
  },
  components: {
    Star
  }
};
</script>

<style lang="less">
.movice-item {
  display: flex;
  flex-direction: column;
  width: 200rpx;
  .movice-item-img {
    height: 270rpx;
    width: 100%;
  }
  .movice-item-name {
    width: 200rpx;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 23rpx;
    color: #666666;
    margin: 26rpx 0;
  }
}
</style>
