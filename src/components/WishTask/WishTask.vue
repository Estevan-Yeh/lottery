<template>
  <div id="WishTaskTable">
    <div class="wt-header">
      {{wishTask.title}}
    </div>
    <div class="taskbox">
      <block
        v-for="(item, index) in wishTask.table"
        :key="index"
      >
        <div class="flex">
          <div class="taskbar">
            <div class="wish-task-name">{{item.wishTaskName}}</div>
            <div class="wish-task-sign wt-txt-size">
              <span class="add-wish wt-txt-color">+{{item.addWish}} 心愿</span>
              <span class="task-annotation wt-txt-size wt-txt-color2">{{item.taskAnnotation}}</span>
              <span
                class="wt-txt-color2"
                :class="item.taskTimes.finishShow"
              >完成<span class="wt-txt-color">{{item.taskTimes.taskTime}}</span>/{{item.taskTimes.taskSum}}</span>
            </div>
          </div>
          <div
            v-if="item.taskFinish"
            class="wt-btn-get"
            @tap="get(index)"
          >{{item.get}}</div>
          <div
            v-else
            class="wt-btn-finish"
            @tap="toGift"
          >去完成</div>
        </div>
      </block>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wishTask: {
      type: Object,
      value: {}
    },
    get: {
      type: Function
    }
  },
  data () {
    return {
    }
  },
  methods: {
    toGift () {
      wx.navigateTo({ url: '../gift/main' });
    }
  },
}
</script>

<style scoped>
#WishTaskTable {
  margin: 20rpx;
  border: #e5e5e5 solid 1rpx;
}
#WishTaskTable > view {
  background-color: #fff;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-top: 34rpx;
  margin-bottom: 52rpx;
}
.wt-txt-size {
  font-size: 28rpx;
}
.wt-txt-color {
  color: #c28748;
}
.wt-txt-color2 {
  color: #b2b2b2;
}
.wt-header {
  font-weight: bold;
  padding: 30rpx 30rpx 30rpx 30rpx;
  border-bottom: solid 1rpx #e5e5e5;
}
.taskbox {
  padding: 10rpx 30rpx;
}
.wish-task-name {
  margin-bottom: 10rpx;
}
.add-wish {
  margin-right: 16rpx;
}
.wt-btn-finish {
  padding: 10rpx 20rpx;
  border: solid 1rpx #c28748;
  border-radius: 30rpx;
  color: #c28748;
}
.wt-btn-get {
  padding: 10rpx 40rpx;
  background-color: #c28748;
  border-radius: 30rpx;
  color: #fff;
}
</style>

