<template>
  <view class="movices-container">
      <view class="search">
    <icon size="13" class="search-img" type="search" color="#405f80"></icon>
    <input
    placeholder="你的名字"
    value=""
    v-model="Val"
    placeholder-class="placeholder"
    @focus="onBindFocus"
    @confirm="onBindChange" />
    <image class="close" src="/static/images/icon/xx.png" @tap="onCancelImgTap" />
</view>
      <theater-preview :moviceData="Theaters"></theater-preview>
      <top250-preview :moviceData="Top250"></top250-preview>
      <coming-soon-preview :moviceData="ComingSoon"></coming-soon-preview>
  </view>
</template>

<script>
import { THEATERS, TOP250, COMINGSOON, SEARCHAPI } from "@/api/config";
import { HTTP, flyInstance } from "@/api/base-request"; // 获取请求函数与fly实例
import { normalLizeMovice } from "@/common/js/reset-movice";
import MoviceList from "@/components/movice-list";
export default {
  data() {
    return {
      Theaters: { header: "正在热映" },
      Top250: { header: "豆瓣Top250" },
      ComingSoon: { header: "即将上映" },
      SearchList: {},
      Val: "",
      containerShow: true,
      searchPanelShow: false
    };
  },
  components: {
    TheaterPreview: MoviceList,
    Top250Preview: MoviceList,
    ComingSoonPreview: MoviceList
  },
  methods: {
    onBindFocus() {},
    onBindChange() {},
    onCancelImgTap() {},
    getTheaters() {
      return HTTP(THEATERS)
        .then(res => {
          return res;
        })
        .catch(err => {
          return `${err} from getTheaters`;
        });
    },
    getTop250() {
      return HTTP(TOP250)
        .then(res => {
          return res;
        })
        .catch(err => {
          return `${err} from getTop250`;
        });
    },
    getComingsoon() {
      return HTTP(COMINGSOON)
        .then(res => {
          return res;
        })
        .catch(err => {
          return `${err} from getComingsoon`;
        });
    }
  },
  created() {
    var _this = this;
    flyInstance
      .all([this.getTheaters(), this.getTop250(), this.getComingsoon()])
      .then(
        flyInstance.spread(function(Theaters, Top250, ComingSoon) {
          _this.$set(_this.Theaters, "arr", normalLizeMovice(Theaters.data));
          _this.$set(_this.Top250, "arr", normalLizeMovice(Top250.data));
          _this.$set(
            _this.ComingSoon,
            "arr",
            normalLizeMovice(ComingSoon.data)
          );
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style lang="less">
page {
  background: #f2f2f2;
}
.search {
  background-color: #f2f2f2;
  height: 80rpx;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.search input {
  height: 100%;
  width: 600rpx;
  margin-left: 20rpx;
  font-size: 28rpx;
}

.search-pannel {
  position: absolute;
  top: 80rpx;
}

.search-img {
  margin: auto 0 auto 20rpx;
}

.placeholder {
  font-size: 24rpx;
  color: #d1d1d1;
  margin-left: 20rpx;
}

.close {
  width: 30rpx;
  height: 30rpx;
  margin: auto 0 auto 20rpx;
}
</style>
