<template>
  <div class="remainingSum">
    <shade-view
      :svData="svData"
      :doSomething="svHide"
    ></shade-view>
    <div class="rs-header rs-center">
      <div class="rs-txt">当前余额</div>
      <div class="rs-num">￥{{remainingSum}}</div>
    </div>
    <div class="rs-tip">
      <div class="rs-txt">余额不能用于红包抽奖、高级版抽奖。每人每天限提 1 笔，最小 1 元，最大 2000 元。</div>
      <button
        class="rs-btn-take rs-center"
        @tap="take"
      >去公众号提现</button>
      <button
        class="rs-btn-record rs-center"
        @tap="record"
      >交易记录</button>
    </div>
    <div class="rs-footer rs-center">未收到提现超过2个工作日?<span>联系我们</span></div>
  </div>
</template>

<script>
import ShadeView from '@/components/ShadeView/ShadeView'
export default {
  components: { ShadeView },
  data () {
    return {
      remainingSum: 0.01,
      svData: {
        title: '提示',
        content: '余额达到一元可提现，继续参与积累吧',
        hide: true
      }
    }
  },
  methods: {
    svHide () {
      var that = this
      that.svData.hide = true
    },
    take () {
      var that = this
      that.svData.content = '余额达到一元可提现，继续参与积累吧'
      that.svData.hide = false
    },
    record () {
      var that = this
      that.svData.content = '没有交易记录'
      that.svData.hide = false
    }
  },
}
</script>

<style scoped>
button {
  border-radius: 0rpx;
}
.rs-center {
  text-align: center;
}
.rs-header {
  background-color: #fff;
  margin-top: 20rpx;
  padding-bottom: 64rpx;
  padding-top: 44rpx;
}
.rs-txt {
  color: #808080;
  font-size: 30rpx;
}
.rs-header .rs-txt {
  margin-bottom: 32rpx;
}
.rs-num {
  font-size: 1.6em;
}
.rs-tip {
  padding: 42rpx 30rpx;
}
.rs-tip .rs-txt {
  margin-bottom: 50rpx;
  line-height: 44rpx;
}
.rs-tip button {
  margin-top: 30rpx;
}
.rs-btn-take {
  color: #fff;
  background-color: #d15143;
  font-weight: bold;
  font-size: 34rpx;
  padding: 6rpx 0;
}
.rs-btn-record {
  background-color: #fff;
  color: #575757;
  font-weight: bold;
  font-size: 34rpx;
  padding: 6rpx 0;
}
.rs-footer {
  width: 100%;
  position: absolute;
  bottom: 40rpx;
  font-size: 28rpx;
  color: #808080;
  letter-spacing: 2rpx;
}
.rs-footer span {
  color: #317abb;
  padding-left: 4rpx;
}
</style>
<style lang="wxss">
page {
  background-color: #f0f0f0 !important;
}
</style>
