<template>
  <div id="wish">
    <div class="wish-header flex">
      <div class="wish-header-lc flex">
        <div class="wish-header-left">
          <img src="/static/images/user.png">
        </div>
        <div class="wish-header-center">
          <div class="wishNum txt-title">{{wishNum}}</div>
          <div class="wishNum-detail txt-size txt-sm-color">
            <span
              class="txt-size txt-sm-color"
              @tap="toWishDetail"
            >心愿值明细</span>
            <img
              class="icon-img"
              src="/static/gift/go.png"
            >
          </div>
        </div>
      </div>
      <div class="wish-header-right">
        <img src="/static/images/user.png">
        <span
          class="txt-sm-color txt-size"
          @tap="toWishVow"
        >心愿许愿</span>
      </div>
    </div>

    <div class="sign-everyday">
      <div class="sign-everyday-header flex">
        <div class="sign-everyday-title">
          <span class="txt-title">连续签到领心愿</span>
          <img src="/static/gift/info.png">
        </div>
        <div class="btn-sign-remind">
          <span>签到提醒</span>
          <switch type="switch" />
        </div>
      </div>
      <div class="sign-everyday-content flex">
        <block
          v-for="(item, index) in signEveryday"
          :key="index"
        >
          <div :class="item.get">
            <div class="sec-top txt-size">第{{item.day}}天</div>
            <div class="sec-center">{{index+1}}</div>
            <div class="sec-bottom txt-size">{{item.txt}}</div>
          </div>
        </block>
      </div>
      <div
        class="sign-everydat-footer"
        @tap="sign"
      >签到领取心愿</div>
    </div>

    <block
      v-for="(item,index) in taskDays1"
      :key="index"
    >
      <wish-task
        :wishTask="item"
        :get="get"
      ></wish-task>
    </block>

  </div>
</template>

<script>
import WishTask from '@/components/WishTask/WishTask'
export default {
  components: { WishTask },
  data () {
    return {
      wishNum: 0,
      signEveryday: [
        {
          day: "一",
          get: "getShow",
          txt: "待领取"
        },
        {
          day: "二",
          txt: "待领取"
        },
        {
          day: "三",
          get: "",
          txt: "待领取"
        },
        {
          day: "四",
          get: "",
          txt: "待领取"
        },
        {
          day: "五",
          get: "",
          txt: "待领取"
        },
        {
          day: "六",
          get: "",
          txt: "待领取"
        },
        {
          day: "七",
          get: "",
          txt: "待领取"
        }
      ],
      taskDays1: [
        {
          title: "日常任务",
          table: [
            {
              wishTaskName: "观看完整视频一次",
              addWish: 1,
              taskAnnotation: "",
              taskTimes: {
                finishShow: true,
                taskTime: 0,
                taskSum: 5
              },
              taskFinish: false
            },
            {
              wishTaskName: "观看完整视频一次",
              addWish: 1,
              taskAnnotation: "",
              taskTimes: {
                finishShow: true,
                taskTime: 0,
                taskSum: 5
              },
              taskFinish: false
            }
          ]
        },
        {
          title: "新手任务",
          table: [
            {
              wishTaskName: "首次订阅提醒",
              addWish: 2,
              taskAnnotation: "每日最多完成一次",
              taskTimes: {
                finishShow: false,
                taskTime: 0,
                taskSum: 5
              },
              taskFinish: true,
              get: "领取"
            },
            {
              wishTaskName: "首次订阅提醒",
              addWish: 2,
              taskAnnotation: "每日最多完成一次",
              taskTimes: {
                finishShow: false,
                taskTime: 0,
                taskSum: 5
              },
              taskFinish: false
            },
            {
              wishTaskName: "首次订阅提醒",
              addWish: 2,
              taskAnnotation: "每日最多完成一次",
              taskTimes: {
                finishShow: false,
                taskTime: 0,
                taskSum: 5
              },
              taskFinish: false
            }
          ]
        },
        {
          title: "周任务",
          table: [
            {
              wishTaskName: "观看完整视频一次",
              addWish: 3,
              taskAnnotation: "",
              taskTimes: {
                finishShow: true,
                taskTime: 0,
                taskSum: 5
              },
              taskFinish: false
            },
            {
              wishTaskName: "观看完整视频一次",
              addWish: 3,
              taskAnnotation: "",
              taskTimes: {
                finishShow: true,
                taskTime: 0,
                taskSum: 5
              },
              taskFinish: false
            },
            {
              wishTaskName: "观看完整视频一次",
              addWish: 3,
              taskAnnotation: "",
              taskTimes: {
                finishShow: true,
                taskTime: 0,
                taskSum: 5
              },
              taskFinish: false
            },
            {
              wishTaskName: "观看完整视频一次",
              addWish: 3,
              taskAnnotation: "",
              taskTimes: {
                finishShow: true,
                taskTime: 0,
                taskSum: 5
              },
              taskFinish: false
            }
          ]
        }
      ],
      taskDay: {
        title: "日常任务",
        table: [
          {
            wishTaskName: "观看完整视频一次",
            addWish: 2,
            taskAnnotation: "",
            taskTimes: {
              finishShow: true,
              taskTime: 0,
              taskSum: 5
            },
            taskFinish: false
          }
        ]
      }
    }
  },
  methods: {
    sign () {
      var that = this
      if (that.signEveryday[0].txt == '待领取') {
        wx.showToast({
          title: '签到成功', //提示的内容,
          icon: 'success', //图标,
          duration: 1500, //延迟时间,
          success: res => {
            that.signEveryday[0].txt = "已领取"
            that.wishNum++
          }
        });
      } else {
        wx.showToast({
          title: '请勿重复签到', //提示的内容,
          icon: 'none', //图标,
          duration: 1500, //延迟时间,
        });
      }
    },
    get (index) {
      var that = this
      if (that.taskDays1[1].table[0].get == "领取") {
        that.wishNum += 2
        that.taskDays1[1].table[0].get = "已领"
      }
    },
    toWishDetail () {
      wx.navigateTo({ url: '../wishDetail/main' });
    },
    toWishVow () {
      wx.navigateTo({ url: '../wishVow/main' });
    }
  },
}
</script>


<style scoped>
#wish {
  background-color: #f5f1ed;
}
.txt-size {
  font-size: 28rpx;
}
.txt-sm-color {
  color: #7a7876;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon-img {
  width: 24rpx;
  height: 24rpx;
}
.txt-title {
  font-weight: bold;
}
.wish-header {
  padding: 40rpx 0 28rpx 40rpx;
  box-sizing: border-box;
}
.wish-header-left img {
  width: 97rpx;
  height: 113rpx;
  margin-right: 40rpx;
}
.wish-header-center .txt-title {
  font-size: 1.5em;
}
.wish-header-center .wishNum-detail .icon-img {
  margin-left: 6rpx;
  position: relative;
  top: 2rpx;
}
.wish-header-right {
  border-top: 1rpx #e5e5e5 solid;
  border-bottom: 1rpx #e5e5e5 solid;
  border-left: 1rpx #e5e5e5 solid;
  border-top-left-radius: 60rpx;
  border-bottom-left-radius: 60rpx;
  background-color: #fff;
  padding: 8rpx 30rpx 0rpx 18rpx;
  align-self: flex-start;
}
.wish-header-right img {
  width: 48rpx;
  height: 48rpx;
  margin-right: 10rpx;
}
.wish-header-right .txt-size {
  position: relative;
  bottom: 13rpx;
}
.sign-everyday {
  background-color: #fff;
  margin: 20rpx;
  border: 1rpx #e5e5e5 solid;
  border-radius: 10rpx;
}
.sign-everyday-header {
  padding: 30rpx;
  border-bottom: inherit;
}
.sign-everyday-title img {
  width: 36rpx;
  height: 36rpx;
  margin-left: 20rpx;
  position: relative;
  top: 5rpx;
}
.btn-sign-remind span {
  margin-right: 20rpx;
  position: relative;
  top: 4rpx;
  font-size: 26rpx;
  color: #a7a7a7;
}
.btn-sign-remind switch {
  zoom: 0.6;
}
.sign-everyday-content {
  padding: 20rpx;
}
.sign-everyday-content .sec-bottom,
.sign-everyday-content .sec-top {
  font-size: 24rpx;
  color: #bebebe;
}
.sign-everyday-content .sec-bottom {
  visibility: hidden;
}
.sign-everyday-content .getShow .sec-bottom {
  visibility: visible;
}
.sign-everyday-content .getShow {
  color: #bb7c38;
}
.sign-everyday-content .sec-center {
  text-align: center;
  padding: 16rpx;
  border-radius: 100%;
  border: 1rpx #dbd2c8 solid;
  margin-top: 14rpx;
  margin-bottom: 10rpx;
  font-size: 26rpx;
}
.sign-everyday-content .getShow .sec-center {
  color: #fff;

  background-color: #bb7c38;
}
.sign-everydat-footer {
  margin: 20rpx 36rpx 25rpx;
  text-align: center;
  background-color: #c29748;
  font-size: 1.25em;
  padding: 20rpx 0;
  color: #fff;
}
</style>

<style lang="wxss">
page {
  background-color: #f5f1ed !important;
}
</style>