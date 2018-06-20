<template>
  <view class="movice-list-container">
    <view class="movice-head">
      <view class="category-text">{{moviceData.header}}</view>
      <view class="more-target">更多 <image class="arrow-img" src="/static/images/icon/arrow-right.png" /> </view>
    </view>
    <view v-if="moviceData.arr.length" class="movice-list">
      <movice-item v-for="(item,index) in moviceData.arr" :key="index"   :item="item"></movice-item>
    </view>
  </view>
</template>

<script>
import MoviceItem from "@/components/movice-item";
export default {
  data() {
    return {};
  },
  props: {
    moviceData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {
    MoviceItem
  },
  mounted() {}
};
</script>

<style lang="less">
.movice-list-container {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin-bottom: 30rpx;
  &:last-of-type {
    margin-bottom: 0;
  }
  .movice-head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 30rpx;
    height: 90rpx;
    .category-text {
      color: #666666;
      font-size: 20rpx;
    }
    .more-target {
      font-size: 20rpx;
      color: #1f4ba5;
      .arrow-img {
        margin-left: 12rpx;
        height: 16rpx;
        width: 10rpx;
      }
    }
  }
  .movice-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 40rpx;
    padding-bottom: 28rpx;
  }
}
</style>
