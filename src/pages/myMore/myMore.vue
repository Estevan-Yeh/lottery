<template>
  <div>
    <view class='lists'>
      <block
        v-for="(item, index) in lists"
        :key="index"
      >
        <view
          class='list'
          @tap="toListPage(item.toListPage)"
        >
          <view :class='item.bm'>
            <img
              class='icon'
              :src='item.icon'
              mode='scaleToFill'
            >
            <text class='title'>{{item.title}}</text>
            <view class='sign'>
              <img
                :class='item.point'
                src='/static/my/point.png'
                mode='scaleToFill'
              >
              <text>{{item.text}}</text>
              <img
                src='/static/my/goGrey.png'
                mode='scaleToFill'
              >
            </view>
          </view>
        </view>
      </block>
    </view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: [
        {
          bm: 'borderB',
          icon: '/static/my/yue.png',
          title: '收货地址',
          point: 'hide',
          toListPage: 'remainingSum'
        },
        {
          bm: 'borderB',
          icon: '/static/my/store.png',
          title: '投诉管理',
          point: 'hide',
          toListPage: ''
        },
        {
          bm: '',
          icon: '/static/my/my.png',
          title: '常见问题',
          point: 'hide',
          toListPage: 'personalIndex'
        }
      ]
    }
  },
}
</script>

<style scoped>
page {
  background-color: #f0f0f0;
}
.lists {
  background-color: #fff;
  margin-top: 20rpx;
}

.lists > .list > view > image.icon {
  width: 46rpx;
  height: 46rpx;
}

.lists > .list {
  padding-left: 30rpx;
}

.list > view {
  padding: 30rpx 30rpx 30rpx 0;
  position: relative;
}

.list > view.borderB {
  border-bottom: 1px solid #e5e5e5;
}

.list > view.marginB {
  margin-bottom: 20rpx;
}

.lists > .list > view > text {
  position: relative;
  bottom: 13rpx;
  margin-left: 30rpx;
}

.lists > .list > view > view.sign {
  position: absolute;
  right: 30rpx;
  bottom: 37rpx;
}

.lists > .list > view > view.sign > text {
  position: relative;
  bottom: 5rpx;
  margin: 0 10rpx;
  color: #808080;
  font-size: 0.9em;
}

.lists > .list > view > view.sign > image {
  width: 32rpx;
  height: 32rpx;
}

.lists > .list > view > view.sign > image.hide {
  display: none;
}
</style>
<style lang="wxss">
page {
  background-color: #f0f0f0 !important;
}
</style>
