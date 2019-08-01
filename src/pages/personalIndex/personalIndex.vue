<template>
  <div>
    <div class="pi-header">
      <div class="pi-username">
        <open-data type="userNickName">
        </open-data>
      </div>
      <div class="pi-header-tip">累计发起抽奖 {{piNum}} 次</div>
    </div>
    <div class="pi-content">
      <div class="pi-myRecommend-box">
        <div class="title">推荐抽奖</div>
        <div class="pi-myRecommend">
          <button @tap="toMyadd">添加推荐抽奖</button>
        </div>
        <div class="pi-txt">发起者可通过此页面，生成永久「分享」二维码。用户扫码进入该主页，可随时查看最新的推荐抽奖；无需针对每个抽奖重复生成图片分享。</div>
        <div class="pi-txt"><text>步骤：\n1.选取「已发起的抽奖」至此页面\n2.获取个人主页分享图片并传播\n3.通过设置更新推荐抽奖</text></div>
        <div class="pi-txt">此场景适用于商家门店运营，公众号菜单栏活动运营等。一次分享，持续更新，分享图片固定有效。</div>
      </div>
    </div>
    <div class="pi-footer">
      <button open-type="share">分享页面</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      piNum: 0
    }
  },
  methods: {
    toMyadd () {
      wx.navigateTo({ url: '../myPIAdd/main' });
    }
  },
}
</script>
<style scoped>
.pi-header {
  background: #fff;
  padding: 38rpx 20rpx;
  border-bottom: solid 1rpx #e5e5e5;
}
.pi-content {
  background-color: #fff;
  padding-bottom: 72rpx;
  margin-bottom: 170rpx;
}
.pi-username {
  font-size: 1.45em;
  margin-bottom: 8rpx;
}
.pi-myRecommend {
  margin: 30rpx 20rpx;
  padding: 130rpx 0;
  background-color: #f7f7f7;
}
.pi-myRecommend button {
  color: #575757;
  width: 40%;
  background-color: #fff;
  border: solid 1rpx #b3b3b3;
  border-radius: 0rpx;
  font-size: 30rpx;
}
.title {
  font-weight: bold;
  margin-left: 20rpx;
  padding-top: 38rpx;
}
.pi-txt {
  color: #575757;
  font-size: 30rpx;
  padding: 20rpx;
}
.pi-footer {
  position: fixed;
  bottom: 0rpx;
  width: 100%;
  background-color: #fff;
  padding: 20rpx 30rpx;
  box-sizing: border-box;
}
.pi-footer button {
  background-color: #e2453a;
  color: #fff;
  border-radius: 0rpx;
}
</style>
<style lang="wxss">
page {
  background-color: #f0f0f0 !important;
}
</style>
