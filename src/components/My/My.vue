<template>
  <view :class="body">
    <view class='my'>
      <view
        class='header_1'
        @tap="toWish"
      >
        <view class='flex'>
          <view class='img'>
            <img
              :src='user.img'
              mode='scaleToFill'
            >
          </view>
          <view class='h_text flex'>
            <text>{{user.name}}</text>
            <view>
              <img
                src='/static/my/point.png'
                mode='scaleToFill'
              >
              <text>心愿</text>
              <img
                src='/static/my/go.png'
                mode='scaleToFill'
              >
            </view>
          </view>
        </view>
      </view>

      <view class='header_2 flex'>
        <block
          v-for="(item, index) in header_2"
          :key="index"
        >
          <view
            :class='item.borderR'
            @tap="toPage(item.toPage)"
          >
            <view class='num'>{{item.num}}</view>
            <view class='txt'>{{item.txt}}</view>
          </view>
        </block>
      </view>

      <view
        class='exm'
        @tap="toDetail"
      >
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

      <view class='footer flex'>
        <view>— 无码科技产品 —</view>
        <text>抽奖超过 5000,000,000 人次</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      body: "",
      user: {
        name: 'null',
        img: '/static/my/exm2.png'
      },
      header_2: [
        {
          borderR: 'borderR',
          num: 0,
          txt: '全部抽奖',
          toPage: 'toGiftAll'
        },
        {
          borderR: 'borderR',
          num: 0,
          txt: '发起抽奖',
          toPage: 'toGiftAll'
        },
        {
          num: 0,
          txt: '中奖纪录',
          toPage: 'toGiftAll'
        }
      ],
      exm: {
        title: '奖品：MAC 魅可口红一支 X1',
        sign: '07月02日 11:20 自动开奖'
      },
      lists: [
        {
          bm: 'borderB',
          icon: '/static/my/yue.png',
          title: '余额',
          point: 'hide',
          text: '',
          toListPage: 'remainingSum'
        },
        {
          bm: 'marginB',
          icon: '/static/my/store.png',
          title: '官方商城',
          point: 'hide',
          text: 'NoCode Store',
          toListPage: ''
        },
        {
          bm: 'borderB',
          icon: '/static/my/my.png',
          title: '个人主页',
          point: '',
          text: '',
          toListPage: 'personalIndex'
        },
        {
          bm: 'borderB',
          icon: '/static/my/message.png',
          title: '我的消息',
          point: 'hide',
          text: '',
          toListPage: 'myMessage'
        },
        {
          bm: 'borderB',
          icon: '/static/my/advance.png',
          title: '高级版管理',
          point: 'hide',
          text: '',
          toListPage: 'myAdvance'
        },
        {
          bm: 'marginB',
          icon: '/static/my/daiyanren.png',
          title: '抽奖助手代言人',
          point: '',
          text: '限时赚 20%',
          toListPage: 'myDaiyanren'
        },
        {
          bm: 'borderB',
          icon: '/static/my/v.png',
          title: '发起人认证',
          point: 'hide',
          text: '',
          toListPage: 'myV'
        },
        {
          bm: 'borderB',
          icon: '/static/my/partner.png',
          title: '推广合作',
          point: 'hide',
          text: '',
          toListPage: 'myPartner'
        },
        {
          bm: 'borderB',
          icon: '/static/my/mp.png',
          title: '小程序推荐',
          point: 'hide',
          text: '',
          toListPage: 'myMpRecommend'
        },
        {
          bm: 'marginB',
          icon: '/static/my/more.png',
          title: '更多',
          point: 'hide',
          text: '',
          toListPage: 'myMore'
        }
      ]
    }
  },
  methods: {
    toWish () {
      wx.navigateTo({ url: '../wish/main' });
    },
    toPage (m) {
      if (this[m])
        this[m]()
    },
    toGiftAll () {
      wx.navigateTo({ url: '../giftAll/main' })
    },
    toDetail () {
      wx.navigateTo({ url: '../myLink/main' })
    },
    toListPage (m) {
      if (m)
        wx.navigateTo({ url: '../' + m + '/main' });
    }
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  width: 100%;
}

.my view {
  background-color: #fafafa;
  box-sizing: border-box;
}

.header_1 {
  margin-top: 25rpx;
  width: 100%;
  padding: 0 20rpx;
  border-bottom: 1px solid #e5e5e5;
}

.header_1 > view,
.header_1 > view > view {
  width: 100%;
}

.header_1 > view {
  padding: 40rpx 0;
}

.header_1 > view > view.img {
  width: 15%;
}

.header_1 > view image {
  border-radius: 100%;
  width: 100%;
  height: 92rpx;
}

.header_1 > view view.h_text {
  margin-left: 13rpx;
  justify-content: space-between;
  align-items: center;
}

.header_1 > view view.h_text image {
  width: 32rpx;
  height: 32rpx;
}

.header_1 > view view.h_text view {
  color: #bb7c39;
  font-weight: 600;
}

.header_1 > view view.h_text view text {
  position: relative;
  bottom: 5rpx;
  margin: 0 10rpx;
}

.header_2 {
  padding: 40rpx 0;
}

.header_2 > view {
  flex-grow: 1;
  text-align: center;
}

.header_2 > view.borderR {
  border-right: 1px solid #e5e5e5;
}

.header_2 > view > view.num {
  font-size: 50rpx;
}

.header_2 > view > view.txt {
  font-size: 30rpx;
  color: #808080;
}

.exm {
  margin: 20rpx;
  padding: 30rpx;
}

.exm > view > view.img {
  width: 25%;
}

.exm > view > view.img > image {
  width: 100%;
  height: 162rpx;
}

.exm .flex {
  align-items: inherit;
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

.my view.lists {
  background-color: #f0f0f0;
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

view.footer {
  background-color: inherit;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50rpx 0;
}

view.footer view {
  background-color: inherit;
  color: #808080;
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 6rpx;
}

view.footer > text {
  color: #808080;
  font-size: 0.85em;
  margin-bottom: 20rpx;
}
</style>
