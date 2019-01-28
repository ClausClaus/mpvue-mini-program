<template>
  <view class="stars-container">
    <view class="stars">
      <block v-for="(item,index) in stars" :key="index">
        <image class="star-item" v-if="item === 'on'" src="/static/images/icon/star.png"/>
        <image class="star-item" v-else-if="item === 'half'" src="/static/images/icon/half-star.png"/>
        <image class="star-item" v-else-if="item === 'off'" src="/static/images/icon/none-star.png"/>
       </block>
    </view>
    <text class="score">{{score}}</text>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    score: {
      type: String
    },
    stars: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {}
};
</script>

<style lang="less">
.stars-container {
  display: flex;
  flex-direction: row;
  .stars {
    display: flex;
    flex-direction: row;
    margin-left: 3rpx;
    margin-right: 23rpx;
    .star-item {
      width: 16rpx;
      height: 16rpx;
      margin-right: 2rpx;
    }
  }
  .score {
    color: #384a74;
    font-size: 16rpx;
  }
}
</style>
