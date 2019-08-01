<template>
  <view>
    <view id='header'>
      <img
        src='/static/detail/exm1.png'
        mode='scaleToFill'
      >
      <view class='content'>
        <view class='title'>{{header.title}}
          <text class='team'>团</text>
        </view>
        <view class='signTime flex'>
          <text>{{header.signTime}}</text>
          <view>商城奖品</view>
        </view>
      </view>
      <view class='cutOff'></view>
      <view class='signBoss flex'>
        <view>
          <img
            src='/static/detail/xian.png'
            mode='scaleToFill'
          >
          {{header.signBoss}}
        </view>
        <text>赞助商</text>
      </view>
    </view>

    <view id='memo'>
      <text>{{memo}}</text>
    </view>

    <view id='detBoss'>
      <text>{{detBoss}}</text>
      <img
        src='/static/detail/exm1.png'
        mode='scaleToFill'
      >
    </view>

    <view id='join'>
      <view
        class='btn'
        @tap="yichou"
      >{{btTxt}}</view>
      <view class='join_sign'>已有 111 人参与, 查看全部
        <img
          src='/static/detail/goGrey.png'
          mode='scaleToFill'
        >
      </view>
      <view class='users'>
        <block
          v-for='(item, index) in users'
          :key='index'
          v-if='index<7'
        >
          <img
            :src='item'
            mode='scaleToFill'
          >
        </block>
      </view>
    </view>

    <view class='cutOffF'>
      <view></view>·
      <view></view>
    </view>

    <view class='advertisement'>
      <img
        src='/static/detail/exm3.png'
        mode='scaleToFill'
      >
    </view>

    <!-- <transition name="slideMore"> -->
    <view
      id='slideMore'
      :class="slideMoreShow"
    >
      <button open-type="share">分享给朋友</button>
      <view>继续上滑, 更多奖品在等你</view>
    </view>
    <!-- </transition> -->
  </view>
</template>

<script>
export default {
  data () {
    return {
      slideMoreShow: "hide",
      header: {
        title: "奖品：绿宝石高原绿茶一级铁盒 x10",
        signTime: "07月02日 11:00 自动开奖",
        signBoss: "猫尔法"
      },
      memo: "怎么，还没有猫？\n在猫尔法，各式的喵主子等着你来吸",
      detBoss: "怎么，还没有猫？\n在猫尔法，各式的喵主子等着你来吸\n怎么，还没有猫？\n在猫尔法，各式的喵主子等着你来吸\n怎么，还没有猫？\n在猫尔法，各式的喵主子等着你来吸怎么，还没有猫？\n在猫尔法，各式的喵主子等着你来吸\n怎么，还没有猫\n在猫尔法，各式的喵主子等着你来吸",
      users: ["/static/detail/user.png", "/static/detail/user.png", "/static/detail/user.png", "/static/detail/user.png", "/static/detail/user.png", "/static/detail/user.png", "/static/detail/user.png"],
      btTxt: '参与抽奖'
    }
  },
  onShow () {
    this.slideMoreShow = 'hide',
      this.btTxt = '参与抽奖'
  },
  onReachBottom () {
    let that = this
    that.slideMoreShow = "show"
  },
  methods: {
    yichou () {
      var that = this
      var btTxt = that.btTxt
      wx.showToast({
        title: btTxt, //提示的内容,
        icon: 'success', //图标,
        duration: 1500, //延迟时间,
        mask: true, //显示透明蒙层，防止触摸穿透,
        success: res => {
          that.btTxt = '等待结果'
        }
      });
    }
  },
}
</script>

<style>
#header {
  background-color: #fff;
}

#header > image {
  width: 750rpx;
  height: 371rpx;
}

#header .content {
  padding: 26rpx 20rpx;
}

#header text.team {
  padding: 3rpx 8rpx 3rpx 6rpx;
  color: #ffedca;
  background-color: #e3453d;
  font-size: 0.85em;
  margin-left: 12rpx;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#header .signTime {
  font-size: 26rpx;
  margin-top: 20rpx;
}

#header .signTime > text {
  color: #575757;
}

#header .signTime > view {
  border: 1rpx solid #bfbfbf;
  padding: 6rpx 16rpx;
  font-weight: 600;
}

#header .cutOff {
  margin-left: 20rpx;
  height: 1rpx;
  background-color: #e5e5e5;
}

#header .signBoss {
  padding: 26rpx 20rpx;
  font-size: 30rpx;
}

#header .signBoss image {
  width: 36rpx;
  height: 36rpx;
  margin-right: 10rpx;
}

#header .signBoss > text {
  color: #7f7f7f;
  font-weight: 600;
}

#memo {
  padding: 36rpx 60rpx;
  background-color: #fff6e5;
  margin: 20rpx 0;
  color: #716249;
  font-size: 30rpx;
  line-height: 46rpx;
}

#detBoss {
  padding: 60rpx 20rpx;
  background-color: #fff;
}

#detBoss > text {
  line-height: 52rpx;
  font-size: 30rpx;
}

#detBoss image {
  margin-top: 26rpx;
  width: 100%;
  height: 200rpx;
}

#join {
  margin: 20rpx 0;
  background-color: #fff;
  display: flex;
  padding: 80rpx 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#join .btn {
  color: #fff;
  background-color: #d25446;
  border-radius: 100%;
  padding: 80rpx 40rpx;
  position: relative;
}

#join .btn image {
  width: 300rpx;
  position: absolute;
  top: -4rpx;
}

#join .join_sign {
  font-size: 28rpx;
  color: grey;
  margin: 30rpx 0;
}

#join .join_sign image {
  width: 28rpx;
  position: relative;
  top: 4rpx;
  height: 28rpx;
}

#join .users {
  display: flex;
  justify-content: center;
}

#join .users image {
  width: 70rpx;
  margin: 0 4rpx;
  height: 70rpx;
}

.cutOffF {
  display: flex;
  width: 100%;
  align-items: center;
  color: #ccc;
  font-size: 1.5em;
  margin-bottom: 30rpx;
}

.cutOffF view {
  width: 50%;
  height: 1rpx;
  background-color: #ccc;
  margin: 0 30rpx;
}

.advertisement {
  padding: 0 30rpx 200rpx;
}

.advertisement image {
  width: 100%;
  height: 223rpx;
}

#slideMore.hide {
  display: none;
}

/* .slideMore-enter {
  bottom: -300rpx;
}

.slideMore-enter-to {
  bottom: 0rpx;
}

.slideMore-enter-active {
  transform: bottom 5s; */
/* } */

#slideMore {
  position: fixed;
  bottom: 0rpx;
  width: 100%;
  padding: 20rpx;
  background-color: #fff;
  box-sizing: border-box;
}

#slideMore.show {
  animation: slideMore1 1s ease normal;
}

@keyframes slideMore1 {
  from {
    bottom: -200rpx;
  }
  to {
    bottom: 0rpx;
  }
}

#slideMore button {
  background-color: #575757;
  border-radius: 0;
  color: #fff;
  font-size: 32rpx;
}

#slideMore view {
  margin-top: 26rpx;
  color: #7f7f7f;
  font-size: 26rpx;
  text-align: center;
}
</style>
