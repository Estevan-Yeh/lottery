<template>
  <div>
    <div
      class="box"
      v-for="(item,index) in boxs"
      :key="index"
    >
      <div class="title">{{item.title}}</div>
      <div class="txt">{{item.txt}}</div>
      <div class="lists">
        <block
          v-for="(list,indexl) in item.lists"
          :key="indexl"
        >
          <div>
            <img
              class="icon"
              src="/static/images/choice.png"
            >
            <span class="txt">{{list}}</span>
          </div>
        </block>
      </div>
      <div class="btn">
        <span class="txt">{{item.btn}}</span>
        <img
          class="icon"
          src="/static/images/goRed.png"
        >
      </div>
    </div>
    <div class="footer">
      <span class="txt">
        <button open-type="share">分享给朋友</button>
      </span>
      <img
        class="icon"
        src="/static/images/goGrey.png"
      >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      boxs: [
        {
          title: '每日福利',
          txt: '针对企业合作伙伴开放，进行品牌宣传与产品推介，按天展示在首页每日福利模块。如有意向，请点击下方联系我们',
          lists: [
            '首页顶部展位', '小程序跳转引流', '优惠券奖品', '公众号宣传', '专人咨询', '按天展示'
          ],
          btn: '联系我们'
        },
        {
          title: '自助福利',
          txt: '针对企业合作伙伴开放，进行品牌宣传与产品推介，按天展示在首页每日福利模块。如有意向，请点击下方联系我们',
          lists: [
            '首页自助展位', '插入小程序码', '微信号、公众号复制', '专人审核', '以固定展示天数开奖'
          ],
          btn: '自动提交'
        }
      ]
    }
  },
}
</script>

<style scoped>
.box {
  margin: 20rpx 20rpx 0 20rpx;
  padding: 0 30rpx;
  border: 1rpx solid #ffdbd9;
}
.title {
  font-size: 1.3em;
  margin: 50rpx 0;
  color: #575757;
}
.txt {
  font-size: 28rpx;
  line-height: 46rpx;
}
.lists {
  margin-top: 10rpx;
}
.lists > div {
  margin-top: 30rpx;
}
.lists img {
  margin-right: 10rpx;
}
.icon {
  width: 24rpx;
  height: 24rpx;
}
.btn {
  display: inline-block;
  color: #dd3e34;
  background-color: #fcebea;
  padding: 6rpx 16rpx;
  margin: 50rpx 0;
}
.btn img {
  margin-left: 40rpx;
  position: relative;
  top: 4rpx;
}
.footer {
  padding: 60rpx 0;
  text-align: center;
  color: #575757;
}
.footer button::after {
  border: none;
}
.footer button {
  display: inline;
  padding: 0;
  font-size: inherit;
  color: inherit;
  background: inherit;
}
.footer img {
  margin-left: 10rpx;
  position: relative;
  top: 4rpx;
}
</style>
