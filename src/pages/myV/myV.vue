<template>
    <div>
        <div class="mv-bodyo">
            <div class="mv-bodyi">
                <div class="mv-icon">
                    <img src="/static/images/user.png">
                    <div>发起人认证</div>
                </div>
                <div class="mv-txt mv-txt1">认证作用：抽奖发起人显示为认证品牌名，携带加 V 标识。如投放自助福利，认证用户将有更高几率被置顶展示，获得更多曝光转化。</div>
                <div class="mv-txt mv-txt2">认证过程：1、提供经营信息或凭证，2、提交审核判定</div>
                <button>开始认证</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mv-bodyo {
  margin: 30rpx;
  padding: 20rpx;
  background-color: #fff;
}
.mv-bodyi {
  padding: 110rpx 60rpx;
  border: 1rpx solid #dfdfdf;
}
.mv-icon {
  text-align: center;
}
.mv-icon img {
  width: 80rpx;
  height: 80rpx;
}
.mv-icon div {
  font-size: 44rpx;
  font-weight: bold;
  color: #575757;
  margin-top: 54rpx;
}
.mv-txt {
  color: #7f7f7f;
  font-size: 32rpx;
}
.mv-txt1 {
  margin-top: 70rpx;
}
.mv-txt2 {
  margin-top: 46rpx;
}
.mv-bodyo button {
  background-color: #575757;
  width: 55%;
  color: #fff;
  font-weight: bold;
  font-size: 32rpx;
  border-radius: 0rpx;
  margin-top: 124rpx;
  margin-bottom: 60rpx;
}
</style>
<style lang="wxss">
page {
  background-color: #f0f0f0;
}
</style>