<template>
  <view class="movice-item" :data-id="item.moviceId">
    <image class="movice-item-img" :src="item.coverageUrl"/>
    <text class="movice-item-name">{{item.title}}</text>
    <star :stars="item.stars" :score="item.average"></star>
  </view>
</template>

<script>
import Star from "@/components/star";
export default {
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {
    Star
  },
  mounted() {}
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
