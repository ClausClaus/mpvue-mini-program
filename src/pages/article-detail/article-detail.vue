<template>
  <view class="article-detail-container" :data-post_id="item.postId">
    <view class="image-header">
      <image class="article-image" :src="pagePlaying ? item.music.coverImgUrl : item.headImgSrc"/>
      <image class="music-icon" @tap.stop="musicTap(item.music)" :src="pagePlaying ? '/static/images/music/music-stop.png ':'/static/images/music/music-start.png'"/>
    </view>
    <view class="author-info-wrap">
      <image class="author-avatar" :src="item.avatar"/>
      <text class="author-name">{{item.author}}</text>
      <text class="deliver-date">发表于<text class="date">{{item.dateTime}}</text></text>
    </view>
    <view class="article-title">{{item.title}}</view>
    <view class="article-operate">
      <image class="operate-icon" @tap.stop="collectArticle" :src="collected ? '/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'"/>
      <image class="operate-icon" @tap.stop="ShareTap"  src="/static/images/icon/share-anti.png"/>
    </view>
    <view class="article-content">
      {{item.detail}}
    </view>
  </view>
</template>

<script>
import { saveCollect, loadCollect } from "@/common/js/cache";
export default {
  data() {
    return {
      collected: false, // 文章是否已收藏
      pagePlaying: false // 当前页面是否是正在播放歌曲的页面
    };
  },
  computed: {
    isPlayingMusic() {
      return this.$store.getters.isPlayingMusic;
    },
    item() {
      return this.$store.getters.article;
    },
    currentMusicId() {
      return this.$store.getters.currentMusicId;
    }
  },
  methods: {
    // 点击收藏按钮
    collectArticle() {
      let collected = saveCollect(this.item.postId);
      this.collected = collected;
      wx.showToast({
        title: this.collected ? "收藏成功" : "取消成功",
        duration: 1000,
        icon: "success"
      });
    },
    // 点击分享按钮
    ShareTap() {
      wx.showActionSheet({
        itemList: ["分享给微信好友", "分享到朋友圈", "分享到QQ", "分享到微博"],
        success: function(res) {
          console.log(
            "用户点击的按钮，从上到下的顺序，从0开始.res.tapIndex -->> ",
            res.tapIndex
          );
        },
        fail: function(res) {
          console.log(res.errMsg);
        }
      });
    },
    // 控制音乐播放
    musicTap(music) {
      if (this.pagePlaying) {
        wx.pauseBackgroundAudio();
        this.pagePlaying = false;
      } else {
        wx.playBackgroundAudio({ ...music });
        this.pagePlaying = true;
      }
      // console.log("点击之后的状态", this.pagePlaying);
    },
    // 监听音乐播放,这里是让自定义控制音乐的函数与小程序音乐的总控开关做桥接
    setMusicMonitor() {
      var _this = this;
      wx.onBackgroundAudioPlay(function() {
        _this.changeMusic(true, _this.item.postId);
      });
      wx.onBackgroundAudioPause(function() {
        _this.changeMusic(false, null);
      });
      wx.onBackgroundAudioStop(function() {
        _this.changeMusic(false, null);
      });
    },
    // 控制程序与页面的播放状态
    changeMusic(hasPlay, id) {
      this.$store.commit("IS_PLAYING_MUSIC", hasPlay);
      this.$store.commit("CURRENT_MUSIC_ID", id);
      this.pagePlaying = hasPlay;
    }
  },

  components: {},
  onLoad(options) {
    this.collected = loadCollect(options.postId); // 读取缓存
    // 判断当前页面的音乐播放状态
    // console.log("ID是否相等", this.currentMusicId, parseInt(options.postId));
    // console.log("程序是否正在播放歌曲", this.isPlayingMusic);
    if (
      this.isPlayingMusic &&
      this.currentMusicId === parseInt(options.postId)
    ) {
      this.pagePlaying = true;
    } else {
      this.pagePlaying = false;
    }
    // console.log("当前页面播放状态", this.pagePlaying);
    this.setMusicMonitor();
  }
};
</script>

<style lang="less">
.article-detail-container {
  .image-header {
    width: 750rpx;
    height: 450rpx;
    position: relative;
    .article-image {
      width: 100%;
      height: 100%;
    }
    .music-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      transform: translate(-50%, -50%);
      width: 100rpx;
      height: 100rpx;
      text-align: center;
    }
  }
  .author-info-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 23rpx 0;
    .author-avatar {
      width: 60rpx;
      height: 60rpx;
      border-radius: 50%;
      margin-left: 32rpx;
      margin-right: 24rpx;
    }
    .author-name {
      font-size: 28rpx;
      color: #666666;
    }
    .deliver-date {
      margin-left: 22px;
      font-size: 24rpx;
      color: #999;
      .date {
        margin-left: 32rpx;
      }
    }
  }
  .article-title {
    font-size: 35rpx;
    font-weight: bold;
    color: #333;
    margin-left: 45rpx;
  }
  .article-operate {
    margin-left: 45rpx;
    margin-right: 40rpx;
    padding: 20rpx 0 30rpx 0;
    height: 90rpx;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      z-index: -1;
      transform: translateY(-50%);
      width: 100%;
      height: 1px;
      background: #e5e5e5;
      line-height: 90rpx;
    }
    .operate-icon {
      width: 90rpx;
      height: 90rpx;
      &:last-of-type {
        margin-left: 30rpx;
      }
    }
  }
  .article-content {
    color: #666;
    font-size: 24rpx;
    margin-bottom: 20rpx;
    margin-left: 20rpx;
    letter-spacing: 2rpx;
    line-height: 40rpx;
    margin: 0 45rpx 0 30rpx;
  }
}
</style>
