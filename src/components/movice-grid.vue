<template>
  <div class="movice-grid-container">
    <movice-item v-for="(item,index) in moviceList" :key="index"   :item="item"></movice-item>
  </div>
</template>

<script>
import MoviceItem from "@/components/movice-item";
export default {
  data() {
    return {};
  },
  props: {
    moviceList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    MoviceItem
  }
};
</script>

<style lang="less">
@import "../common/style/common.less";
.movice-grid-container {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  margin: 30rpx auto;
  .movice-item {
    margin-left: 38rpx;
    margin-bottom: 30rpx;
  }
}
</style>
