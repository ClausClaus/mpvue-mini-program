<template>
    <scroll-view :style="{'height':'2012rpx'}" :scroll-y=true :scroll-x="false" @scrolltolower="onScrollLower">
      <div class="movice-grid-container">
          <movice-item v-for="(item,index) in moviceList" :key="index"   :item="item"></movice-item>
      </div>
    </scroll-view>
</template>

<script>
import MoviceItem from "@/components/movice-item";
export default {
  data() {
    return {
      isEmpty: false,
      total: this.$store.getters.total
    };
  },
  props: {
    moviceList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    /**
     * 下拉加载更多
     *  */
    onScrollLower() {
      if (!this.isEmpty && this.moviceList.length < this.$store.getters.total) {
        this.$store
          .dispatch("moviceRequest", {
            params: {
              start: this.moviceList.length,
              count: 20
            }
          })
          .then(list => {
            if (list.length) {
              this.moviceList = this.moviceList.concat(list);
            } else {
              this.isEmpty = true;
            }
          });
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
  margin: 30rpx auto;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  .movice-item {
    margin-left: 38rpx;
    margin-bottom: 30rpx;
  }
}
</style>
