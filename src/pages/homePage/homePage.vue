<template>
  <view>
    <My
      data-current=2
      v-if="page=='my'"
    />

    <!-- <view v-if="page=='empty'" > </view> -->

    <Index
      data-current=1
      v-if="page=='index'"
      :self="indexSelf"
      :moreView="moreView"
    />
    <view id='tabBar'>
      <view
        :class='currentData==0?"clicked":""'
        data-current='0'
        @tap='tapIndex'
      >
        <img
          :src='currentData==0?tabBar[0][1]:tabBar[0][0]'
          data-current='0'
          mode='widthFix'
        >
        <text data-current='0'>首页</text>
      </view>
      <view
        :class='currentData==1?"clicked":""'
        data-current='1'
        @tap='tapGift'
      >
        <img
          :src='currentData==1?tabBar[1][1]:tabBar[1][0]'
          data-current='1'
          mode='widthFix'
        >
        <text data-current='1'>发起抽奖</text>
      </view>
      <view
        :class='currentData==2?"clicked":""'
        data-current='2'
        @tap='tapIndex'
      >
        <img
          :src='currentData==2?tabBar[2][1]:tabBar[2][0]'
          data-current='2'
          mode='widthFix'
        >
        <text data-current='2'>我的</text>
      </view>
    </view>
  </view>
</template>

<script>
import Index from '@/components/Index'
import My from '@/components/My/My'

export default {
  components: { Index, My },

  data () {
    return {
      tabBar: [['/static/image/index_1.png', '/static/image/index_2.png'], ['/static/image/gift_1.png', '/static/image/gift_2.png'], ['/static/image/my_1.png', '/static/image/my_2.png']],
      currentData: 0,
      page: 'index',
      indexSelf: [{
        imgUrl: "/static/image/exm2.png",
        text: "奖品：绿宝石高原绿茶一级铁盒 x10",
        sign: "07月02日 11:00 自动开奖",
        v_sign: "贵茶集团"
      },
      {
        imgUrl: "/static/image/exm2.png",
        text: "奖品：绿宝石高原绿茶一级铁盒 x10",
        sign: "07月02日 11:00 自动开奖"
      },
      {
        imgUrl: "/static/image/exm2.png",
        text: "奖品：绿宝石高原绿茶一级铁盒 x10",
        sign: "07月02日 11:00 自动开奖"
      },
      {
        imgUrl: "/static/image/exm2.png",
        text: "奖品：绿宝石高原绿茶一级铁盒 x10",
        sign: "07月02日 11:00 自动开奖"
      }
      ],
      len: 0,
      moreView: true
    }
  },

  methods: {
    tapIndex (e) {
      const that = this

      if (parseInt(that.currentData) === parseInt(e.target.dataset.current)) {
        return false
      } else if (parseInt(e.target.dataset.current) === 2) {
        that.currentData = e.target.dataset.current
        that.page = 'my'
        wx.setNavigationBarTitle({
          title: "我的"
        })
      } else if (parseInt(e.target.dataset.current) === 0) {
        that.currentData = e.target.dataset.current
        that.page = 'index'
        wx.setNavigationBarTitle({
          title: "公共抽奖"
        })
      } else if (parseInt(e.target.dataset.current) === 1) {
        that.currentData = e.target.dataset.current
      }
    },

    tapGift () {
      wx.navigateTo({
        url: '../gift/main',
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
    }  },
  onPullDownRefresh () {
    console.log('tag', '222')
    // let i = setTimeout(function(){
    //   wx.startPullDownRefresh();
    //   clearTimeout(i);
    // },1000);
    let j = setTimeout(function () {
      wx.stopPullDownRefresh();
      clearTimeout(j);
    }, 1000)
  },
  onReachBottom () {
    let that = this
    let self = that.indexSelf
    let len = that.len
    if (that.page === "index" && len < 4) {
      if (len < 3) {

        that.indexSelf = self.concat([{
          imgUrl: "/static/image/exm2.png",
          text: "奖品：绿宝石高原绿茶一级铁盒 x10",
          sign: "07月02日 11:00 自动开奖"
        }, {
          imgUrl: "/static/image/exm2.png",
          text: "奖品：绿宝石高原绿茶一级铁盒 x10",
          sign: "07月02日 11:00 自动开奖"
        }, {
          imgUrl: "/static/image/exm2.png",
          text: "奖品：绿宝石高原绿茶一级铁盒 x10",
          sign: "07月02日 11:00 自动开奖"
        }, {
          imgUrl: "/static/image/exm2.png",
          text: "奖品：绿宝石高原绿茶一级铁盒 x10",
          sign: "07月02日 11:00 自动开奖"
        }])
        that.len = ++len

      } else {
        that.moreView = false
        that.len = ++len
      }
    }
  }

}
</script>

<style>
page {
  background-color: #f0f0f0;
}
page {
  padding-bottom: 100rpx;
}

#tabBar {
  position: fixed;
  bottom: 0rpx;
  font-size: 26rpx;
  display: flex;
  width: 100%;
}

#tabBar > view {
  flex: 1;
  width: 100%;
  text-align: center;
  padding-bottom: 12rpx;
  padding-top: 18rpx;
  background-color: #fafafa;
}

#tabBar img {
  width: 48rpx;
}

#tabBar text {
  display: block;
}

view.clicked {
  color: #ce2324;
}
</style>

