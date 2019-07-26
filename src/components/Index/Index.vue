<template>
  <view
    class='pageBody'
    :class='body'
  >
    <view class='header'>
      <view class='left'>
        <img
          src='/static/image/love.png'
          mode='scaleToFill'
          class='icon'
        >
        <text class='isign'> {{loveNum}} 心愿</text>
      </view>
      <view class='right'>
        <text class='isign'>去签到</text>
        <img
          src='/static/image/go.png'
          mode='scaleToFill'
          class='icon'
        >
      </view>
    </view>
    <view class='tieku clear'></view>

    <view class='head'>
      <text class='title left'>每日福利</text>
      <view class='right isign'>
        <text>我要上首页</text>
        <view></view>
        <text>分享</text>
      </view>
    </view>
    <view class='clear'></view>

    <block
      v-for="(item, index) in everyday"
      :key="index"
    >
      <view
        class='everyday'
        @tap='toDetail'
      >
        <img :src='item.imgUrl'>
        <view>
          <view class='title isign'>{{item.title}}</view>
          <view class='textBox'>
            <text class='contents'>{{item.contents}}</text>
            <text class='item.team'>团</text>
          </view>
          <view class='isign'>{{item.sign}}</view>
        </view>
      </view>
    </block>

    <view class='head'>
      <text class='title'>自助福利</text>
    </view>

    <view
      class='self_first container self'
      @tap='toDetail'
    >
      <img
        :src="self[0].imgUrl"
        mode='scaleToFill'
      >
      <view>
        <view class='textBox'>
          <text>{{self[0].text}}</text>
        </view>
        <view class='isign'>{{self[0].isign}}</view>
        <view class='iconBox'>
          <img
            src='/static/image/v.png'
            mode='scaleToFill'
          >
          <text>{{self[0].v_sign}}</text>
        </view>
      </view>
    </view>

    <block
      v-for="(item, index) in self"
      :key="index"
    >
      <view
        class='container self'
        @tap='toDetail'
      >
        <img
          :src='item.imgUrl'
          mode='scaleToFill'
        >
        <view>
          <view class='textBox'>
            <text>{{item.text}}</text>
          </view>
          <view class='isign'>{{item.sign}}</view>
        </view>
      </view>
    </block>

    <MoreView v-if="moreView"></MoreView>
    <view
      v-else
      class='footer container'
    >
      <view>
        <text class='isign'>联系客服</text>
        <img
          src='/static/image/go.png'
          mode='scaleToFill'
          class='icon'
        >
      </view>
      <img
        :src='advertise_img'
        v-if='advertise_img'
        mode='scaleToFill'
      >
      <img
        src='/static/image/exm3.png'
        v-else
      >
    </view>
  </view>
</template>

<script>
import MoreView from '@/components/More/MoreView'
export default {
  components: { MoreView },
  props: {
    self: {
      type: Array,
      value: []
    },
    moreView: {
      type: Boolean,
      value: true
    }
  },
  data () {
    return {
      body: "",
      loveNum: 1,
      team: 'team',
      everyday: [
        {
          imgUrl: '/static/image/exm1.png',
          title: 'DC 嘻嘻嘻 赞助',
          contents: '一等奖二等奖一等奖二等奖一等奖二等奖一等奖二等奖一等奖二等奖',
          team: 'team',
          sign: '07月20日'
        },
        {
          imgUrl: '/static/image/exm1.png',
          title: 'DC 嘻嘻嘻 赞助',
          contents: '一等奖二等奖一等奖二等奖一等奖二等奖一等奖二等奖一等奖二等奖',
          team: 'noteam',
          sign: '07月20日'
        },
        {
          imgUrl: '/static/image/exm1.png',
          title: 'DC 嘻嘻嘻 赞助',
          contents: '一等奖二等奖一等奖二等奖一等奖二等奖一等奖二等奖一等奖二等奖',
          team: 'noteam',
          sign: '07月20日'
        },
        {
          imgUrl: '/static/image/exm1.png',
          title: 'DC 嘻嘻嘻 赞助',
          contents: '一等奖二等奖一等奖二等奖一等奖二等奖一等奖二等奖一等奖二等奖',
          team: 'team',
          sign: '07月20日'
        }
      ],
      advertise_img: '/static/image/exm3.png'
    }
  },
  methods: {
    toDetail () {
      wx.navigateTo({
        url: '../detail/main',
        events: {
          acceptDataFromOpenedPage: function (data) {
            console.log(data)
          },
          someEvent: function (data) {
            console.log(data)
          }
        },
        success: function (res) {
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
        }
      })
    },
    beforeCreate () {
      this.body = 'hide'
    },
    created () {
      this.body = ''
    },
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.icon {
  width: 30rpx;
  height: 30rpx;
}
.left {
  float: left;
}
.right {
  float: right;
}

.isign {
  font-size: 26rpx;
  color: #575757;
}
.clear {
  clear: both;
}
.pageBody {
  padding: 0 25rpx;
  box-sizing: border-box;
}
view {
  border-color: inherit;
}

.header > view {
  padding: 35rpx 0;
}

.header > view.left > text {
  font-weight: 700;
  color: #222;
}

.header text {
  padding: 0 10rpx;
  position: relative;
  bottom: 5rpx;
}

view.tieku {
  height: 1rpx;
  margin: 0 10rpx;
  background-color: #d8d8d8;
}

view.head {
  margin-top: 35rpx;
}

view.head > text.title {
  font-size: 1.1em;
  color: #dc3e34;
  font-weight: 700;
}

view.head > view.right > view {
  display: inline-block;
  width: 3rpx;
  height: 25rpx;
  margin: 0 30rpx;
  background-color: #a8a8a8;
}

view.everyday {
  margin-top: 30rpx;
  border-radius: 8rpx;
  border: solid #d8d8d8 1rpx;
  background-color: #fafafa;
}

view.everyday image {
  width: 100%;

  height: 300rpx;
  border-radius: 8rpx 8rpx 0 0;
}

view.everyday > view {
  padding: 24rpx 45rpx 30rpx;
}

view.everyday view.title {
  color: #dc3e34;
  font-weight: 700;
}

view.everyday view.textBox {
  line-height: 50rpx;
  margin: 13rpx 0;
}

view.everyday view.textBox text.team {
  padding: 3rpx 8rpx 3rpx 6rpx;
  color: #ffedca;
  background-color: #e3453d;
  font-size: 0.85em;
  margin-left: 12rpx;
}

view.everyday view.textBox text.noteam {
  display: none;
}

view.self {
  border-radius: 8rpx;
  border: solid #d8d8d8 1rpx;
  padding: 25rpx;
  background-color: #fafafa;
}

view.self > image {
  width: 29%;
  margin-right: 25rpx;
  height: 182rpx;
}

view.self > view {
  display: inline-block;
  width: 71%;
}

view.self view.textBox {
  line-height: 45rpx;
  margin-bottom: 4rpx;
}

view.self view.iconBox {
  border: #d5c4c4 solid 1px;
  padding: 4rpx 13rpx;
  font-size: 22rpx;
  color: #d5c4c4;
  display: inline-block;
  margin-top: 10rpx;
}

view.self view.iconBox > image {
  width: 18rpx;
  height: 18rpx;
  margin-right: 10rpx;
  display: inline-block;
}

.self_first {
  margin: 30rpx 0;
}

.footer {
  justify-content: center;
  flex-direction: column;
  width: 100%;
  line-height: 150rpx;
  padding-bottom: 130rpx;
}

.footer text.sign {
  margin-right: 8rpx;
  position: relative;
  bottom: 5rpx;
}

.footer > image {
  width: 100%;
  height: 227rpx;
}
</style>
