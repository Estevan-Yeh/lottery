<template>
  <view>
    <view id='header'>
      <img
        src='/static/gift/exm1.png'
        mode='scaleToFill'
      >
      <view class='btns bg'>
        <view>
          <img
            src='/static/gift/store.png'
            mode='scaleToFill'
          >
          <text>商城奖品</text>
        </view>
        <view>
          <img
            src='/static/gift/store.png'
            mode='scaleToFill'
          >
          <text>商城奖品</text>
        </view>
      </view>
      <view class='btns'>
        <view>
          <img
            src='/static/gift/store.png'
            mode='scaleToFill'
          >
          <text>商城奖品</text>
        </view>
        <view>
          <img
            src='/static/gift/img.png'
            mode='scaleToFill'
          >
          <text>更换图片</text>
        </view>
      </view>
    </view>

    <view id='header_2'>
      <view class='flex_b borderB'>
        <view>奖品名称</view>
        <view>
          <input placeholder='请输入奖品名称'>
        </view>
      </view>
      <view class='flex_b'>
        <view>奖品份数</view>
        <view>
          <input placeholder='份数'>
          <text>个</text>
        </view>
      </view>
    </view>

    <view id='add_btn'>
      <view>+ 添加新奖项</view>
    </view>

    <view id='append_btn'>
      <view class='append_left'>到达设定时间自动开奖</view>
      <view class='append_right'>修改开奖时间 ></view>
    </view>

    <view class='lebal width'>
      <view>开奖时间</view>
      <img
        src='/static/gift/go.png'
        mode='scaleToFill'
      >
    </view>

    <view class='lebal'>
      <view>
        允许参与者分享
        <img
          src='/static/gift/info.png'
          mode='scaleToFill'
        >
      </view>
      <view>
        <switch></switch>
      </view>
    </view>

    <view class='lebal'>
      <view>
        <view>更多功能</view>
        <text>抽奖说明、一键复制区</text>
      </view>
      <view>
        <switch></switch>
      </view>
    </view>

    <view class='cutOff'>
      <view class='coLine'></view>
      <text>其他抽奖功能</text>
      <view class='coLine'></view>
    </view>

    <view id='footer'>
      <view>
        <img
          src='/static/gift/pi.png'
          mode='scaleToFill'
        >
        <view class='title'>皮一下</view>
      </view>
      <view>
        <img
          src='/static/gift/gao.png'
          mode='scaleToFill'
        >
        <view class='title'>高级版</view>
      </view>
      <view>
        <img
          src='/static/gift/zi.png'
          mode='scaleToFill'
        >
        <view class='title'>自助上首页</view>
      </view>
      <view>
        <img
          src='/static/gift/xian.png'
          mode='scaleToFill'
        >
        <view class='title'>现场抽奖</view>
      </view>
    </view>

    <view id='footer_btn'>
      <button>发起新抽奖</button>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
#header {
  position: relative;
}

#header image {
  width: 100%;
  height: 370rpx;
}

#header > view.btns {
  position: absolute;
  top: 16rpx;
  right: 8rpx;
}

#header > view.btns > view {
  float: right;
  padding: 15rpx 30rpx;
  border-radius: 30rpx;

  color: #fff;
  font-size: 26rpx;

  margin-right: 25rpx;
}

#header > view.btns > view text {
  position: relative;
  bottom: 2rpx;
}

#header > view.btns > view image {
  width: 26rpx;
  height: 26rpx;
  margin-right: 15rpx;
}

#header > view.btns.bg > view {
  background: lightgray;
  opacity: 0.9;
}

#header > view.btns.bg > view text,
#header > view.btns.bg image {
  opacity: 0;
}

#header_2 {
  padding-left: 20rpx;
  background-color: #fff;
}

#header_2 view.flex_b {
  padding-left: 0rpx;
}

#header_2 view.flex_b.borderB {
  border-bottom: 1rpx solid #e5e5e5;
}

#header_2 input {
  text-align: right;
  font-size: 0.96em;
  display: inline-block;
}

#header_2 text {
  position: relative;
  bottom: 11rpx;
  margin-left: 20rpx;
}

.flex_b {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20rpx;
  background-color: #fff;
  box-sizing: border-box;
}

#add_btn {
  text-align: center;
  padding: 55rpx 0;
}

#add_btn > view {
  display: inline-block;
  border: 1rpx #575757 solid;
  color: #515151;
  font-weight: 700;
  padding: 20rpx 36rpx;
}

#append_btn {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20rpx 30rpx;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 26rpx;
}

#append_btn > view.append_left {
  color: #808080;
}

#append_btn > view.append_right {
  color: #2573b8;
}

.width.lebal {
  padding: 30rpx;
}

.lebal {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 20rpx;
  background-color: #fff;
  margin-bottom: 30rpx;
  align-items: center;
}

.lebal image {
  width: 36rpx;
  height: 36rpx;
  position: relative;
  top: 4rpx;
  margin-left: 20rpx;
}

.lebal text {
  color: #7f7f7f;
  font-size: 26rpx;
  margin-top: 6rpx;
}

.cutOff {
  display: flex;
  box-sizing: border-box;
  padding: 65rpx 0;
  color: #787878;
  font-size: 26rpx;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.cutOff text {
  margin: 0 30rpx;
}

.cutOff .coLine {
  height: 1rpx;
  background-color: #787878;
  width: 13%;
}

#footer {
  display: flex;
  box-sizing: border-box;
  padding: 0 8rpx;
  margin-bottom: 250rpx;
}

#footer > view {
  margin: 0 8rpx;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 35rpx 0 50rpx;
  background-color: #fff;
  align-items: center;
}

#footer view.title {
  color: #575757;
  font-size: 28rpx;
  margin-top: 16rpx;
}

#footer image {
  width: 60rpx;
  height: 60rpx;
}

#footer_btn {
  position: fixed;
  bottom: 0rpx;
  width: 100%;
  padding: 20rpx 30rpx;
  box-sizing: border-box;
  background-color: #fff;
}

#footer_btn button {
  background-color: #d15143;
  color: #fff;
}
</style>

