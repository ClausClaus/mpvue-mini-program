<template>
  <view class="movices-container">
      <movice-list></movice-list>
      <movice-list></movice-list>
      <movice-list></movice-list>
  </view>
</template>

<script>
import { HTTP } from "@/api/base-request";
import MoviceList from "@/components/movice-list";
export default {
  data() {
    return {};
  },
  components: {
    MoviceList
  },
  created() {
    // HTTP();
  }
};
</script>

<style lang="less">
page {
  background: #f2f2f2;
}
</style>
