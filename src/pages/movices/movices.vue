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
import { HTTP, flyInstance } from "@/api/base-request";
import { ERROK } from "@/api/config";
import MoviceList from "@/components/movice-list";
const START = 0;
const COUNT = 3;
const TOP250 = `/v2/movie/top250`;
const THEATERS = `/v2/movie/in_theaters`;
const COMINGSOON = `/v2/movie/coming_soon`;
const SEARCHAPI = `/v2/movie/search`;
export default {
  data() {
    return {
      Theaters: {},
      Top250: {},
      ComingSoon: {},
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
  onload() {},
  created() {
    var _this = this;
    flyInstance
      .all([this.getTheaters(), this.getTop250(), this.getComingsoon()])
      .then(
        flyInstance.spread(function(Theaters, Top250, ComingSoon) {
          _this.Theaters = Object.assign(
            {},
            { arr: Theaters.data.subjects },
            {
              header: "正在热映"
            }
          );
          _this.Top250 = Object.assign(
            {},
            { arr: Top250.data.subjects },
            {
              header: "Top250"
            }
          );
          _this.ComingSoon = Object.assign(
            {},
            { arr: ComingSoon.data.subjects },
            {
              header: "即将上映"
            }
          );
          console.log("Theaters", _this.Theaters);
          console.log("Top250", _this.Top250);
          console.log("ComingSoon", _this.ComingSoon);
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
