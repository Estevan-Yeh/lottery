<template>
  <div>
    <div
      class="md-footer"
      :class="hide?'md-fhide':'md-fshow'"
      @tap="bgHide"
    >
    </div>
    <div
      class="md-fbox"
      :class="hide?'md-fhide':'md-fshow'"
      @tap.stop=""
    >
      <div class="md-fbtn">
        <div>
          <button open-type="share"><img src="/static/images/fenxiang.png">
            <div>发送给朋友</div>
          </button>
        </div>
        <div>
          <button open-type="share"><img src="/static/images/baocun.png">
            <div>保存分享图</div>
          </button>
        </div>
        <div></div>
        <div></div>
      </div>
      <div
        class="md-exit"
        @tap="bgHide"
      >取消</div>
    </div>
    <shade-view
      :svData="svData"
      :doSomething="svHide"
    ></shade-view>
    <div
      class="md-tip"
      @tap="dialog"
    >规则
      <img src="/static/images/info.png">
    </div>
    <div class="md-flex">
      <block
        v-for="(item,index) in money"
        :key="index"
      >
        <div
          class="md-money"
          :class="item.borderR?'borderR':''"
        >
          <div class="md-title">{{item.title}}
          </div>
          <div class="md-num">￥ <span>{{item.num}}</span></div>
        </div>
      </block>
    </div>
    <div class="md-invite">
      <div class="md-invite-header invite1">自助抽奖代言人</div>
      <div class="md-invite-txt">
        <div>每邀请好友购买并发起自助抽奖 1 次</div>
        即可获得 <span class="invite1">最低 100 元</span> 收益
      </div>
      <button
        class="invite1"
        @tap="invite"
      >立即邀请</button>
    </div>
    <div class="md-invite">
      <div class="md-invite-header invite2">高级版抽奖代言人</div>
      <div class="md-invite-txt">
        <div>每邀请好友购买并发起自助抽奖 1 次</div>
        即可获得 <span class="invite2">最低 0.00 元</span> 收益
      </div>
      <button
        class="invite2"
        @tap="invite"
      >立即邀请</button>
    </div>

  </div>
</template>

<script>
import ShadeView from '@/components/ShadeView/ShadeView'
export default {
  components: { ShadeView },
  data () {
    return {
      hide: true,
      money: [
        {
          borderR: true,
          title: '待结算',
          num: 0.01
        },
        {
          borderR: true,
          title: '可提现 >',
          num: 0.01
        },
        {
          borderR: false,
          title: '累计收益',
          num: 0.01
        }
      ],
      svData: {
        title: '规则',
        content: '规则就是没有规则',
        hide: true
      }
    }
  },
  methods: {
    svHide () {
      var that = this
      that.svData.hide = true
    },
    dialog () {
      var that = this
      that.svData.hide = false
    },
    invite () {
      var that = this
      that.hide = false
    },
    bgHide () {
      var that = this
      that.hide = true
    }
  },
}
</script>

<style scoped>
.md-tip {
  margin: 30rpx 0;
  color: #fff;
  font-size: 30rpx;
  border-top-right-radius: 28rpx;
  border-bottom-right-radius: 28rpx;
  background-color: rgba(0, 0, 0, 0.3);
  display: inline-block;
  padding: 0rpx 16rpx 4rpx;
}
.md-tip img {
  width: 38rpx;
  height: 38rpx;
  position: relative;
  top: 6rpx;
}
.md-flex {
  display: flex;
  width: 100%;
  text-align: center;
  color: #fff;
  margin-top: 40rpx;
  margin-bottom: 50rpx;
}
.md-flex > div {
  flex: 1;
}
.md-money .md-title {
  margin-bottom: 16rpx;
}
.md-money .md-num span {
  font-size: 56rpx;
}
.borderR {
  border-right: 1rpx #fff solid;
}
.md-invite {
  margin: 20rpx;
  text-align: center;
  background-color: #fff;
  border-radius: 10rpx;
  padding-bottom: 30rpx;
}
.md-invite-header {
  padding: 16rpx 0;
}
.md-invite-txt {
  color: #575757;
  font-size: 28rpx;
  margin-top: 40rpx;
  margin-bottom: 50rpx;
}
.md-invite-txt span {
  font-size: 40rpx;
}
.md-invite button {
  width: 40%;
  border-radius: 60rpx;
  color: #fff;
  font-size: 32rpx;
  margin-bottom: 40rpx;
  margin-top: 10rpx;
}
.md-invite button::after {
  border-radius: 30rpx;
}
.md-invite span.invite1 {
  color: #e2453a;
}
.md-invite-header.invite1 {
  color: #c38684;
  background-color: #f8eaea;
}
.md-invite button.invite1 {
  background-color: #e2453a;
}
.md-invite span.invite2 {
  color: #d79f00;
}
.md-invite-header.invite2 {
  color: #c8ab78;
  background-color: #f9f1e2;
}
.md-invite button.invite2 {
  background-color: #e4a900;
}
.md-footer {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.4;
  z-index: 100;
}
.md-fbox {
  width: 100%;
  position: absolute;
  bottom: 0rpx;
  background-color: #f0f0f0;
  z-index: 101;
}
.md-fbox > div {
  background-color: #fff;
}
.md-fbtn {
  display: flex;
  padding: 30rpx 0;
}
.md-fbtn > div {
  flex: 1;
  text-align: center;
}
.md-fbtn > div div {
  font-size: 24rpx;
  color: #575757;
}
.md-exit {
  text-align: center;
  padding: 16rpx 0;
  margin-top: 8rpx;
}
.md-fbtn img {
  width: 60rpx;
  height: 60rpx;
}
.md-fbox button {
  border: none;
  display: inline;
  text-align: center;
  padding: 0;
}
.md-fbox button::after {
  border: none;
  display: inline;
}
.md-fhide {
  display: none;
}
.md-fbox.md-fshow {
  animation: slideMore1 500ms ease normal;
}
@keyframes slideMore1 {
  from {
    bottom: -200rpx;
  }
  to {
    bottom: 0rpx;
  }
}
.md-footer.md-fshow {
  animation: slideMore2 500ms ease normal;
}
@keyframes slideMore2 {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.4;
  }
}
</style>

<style lang="wxss">
page {
  background-color: #d55045 !important;
}
</style>
