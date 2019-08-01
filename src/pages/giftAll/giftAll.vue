<template>
  <div>
    <view class='exm'>
      <view class='flex'>
        <view class='img'>
          <img
            src='/static/my/exm2.png'
            mode='scaleToFill'
          >
        </view>
        <view class='con'>
          <view>{{exm.title}}</view>
          <view class='sign'>{{exm.sign}}</view>
          <view class='bot'>去试试手气
            <img
              src='/static/my/goRed.png'
              mode='scaleToFill'
            >
          </view>
        </view>
      </view>
    </view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      exm: {
        title: '奖品：MAC 魅可口红一支 X1',
        sign: '07月02日 11:20 自动开奖'
      }
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  width: 100%;
  align-items: center;
}
.exm {
  margin: 20rpx;
  padding: 30rpx;
  background-color: #fff;
}

.exm .flex {
  align-items: inherit;
}

.exm > view > view.img {
  width: 25%;
}

.exm > view > view.img > image {
  width: 100%;
  height: 162rpx;
}

.exm view.con {
  padding: 0 30rpx;
  position: relative;
}

.exm view.con > view.sign {
  font-size: 30rpx;
  color: #808080;
  padding-top: 8rpx;
}

.exm view.con > view.bot {
  position: absolute;
  bottom: 10rpx;
}

.exm view.con > view.bot > image {
  width: 25rpx;
  margin-left: 15rpx;
  position: relative;
  top: 7rpx;
  height: 25rpx;
}
</style>

<style lang="wxss">
page {
  background-color: #f0f0f0 !important;
}
</style>
