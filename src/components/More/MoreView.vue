<template>
  <view class='more-view'>
    <text class='more-text'>{{moreViewText}}</text>
  </view>
</template>
<script>
export default {
  props: {
    moreViewText: {
      type: String,
      value: "上拉加载更多"
    }
  }
}
</script>

<style>
.more-view {
  text-align: center;
  margin-top: 16rpx;
  margin-bottom: 22rpx;
}

.more-view > text.more-text {
  font-size: 30rpx;
  color: #888;
  background-color: #fafafa;
  padding: 4rpx 12rpx;
  border: 1rpx #d8d8d8 solid;
  border-radius: 6rpx;
}
</style>

