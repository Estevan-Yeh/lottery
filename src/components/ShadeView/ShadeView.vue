<template>
  <div :class="svData.hide?'sv-hide':'sv-show'">
    <div class="sv-bg"></div>
    <div
      class="sv-page"
      @tap="doSomething"
    >
      <div
        class="sv-box"
        @tap.stop=""
      >
        <div
          class="sv-icon"
          @tap.stop="doSomething"
        ><img src="/static/images/exit.png"></div>
        <div class="sv-header">
          <div class="sv-txt">{{svData.title}}</div>

        </div>
        <div class="sv-content">{{svData.content}}</div>
        <button @tap.stop="doSomething">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    svData: {
      type: Object,
      vaule: {}
    },
    doSomething: {
      type: Function
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.sv-show .sv-bg {
  animation: slideMore1 200ms ease normal;
}
@keyframes slideMore1 {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}
.sv-show .sv-page {
  animation: slideMore2 400ms ease normal;
}
@keyframes slideMore2 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.sv-hide {
  display: none;
}
.sv-bg,
.sv-page {
  width: 100%;
  height: 100%;
}
.sv-bg {
  position: absolute;
  z-index: 100;
  opacity: 0.5;
  background-color: #000;
}
.sv-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30rpx;
  position: absolute;
  z-index: 101;
  box-sizing: border-box;
}
.sv-box {
  padding: 40rpx 30rpx;
  background-color: #fff;
  width: 100%;
}
.sv-txt {
  color: #575757;
}
.sv-header {
  text-align: center;
}
.sv-icon {
  right: 60rpx;
  position: absolute;
}
.sv-icon img {
  width: 56rpx;
  height: 56rpx;
}
.sv-content {
  margin: 70rpx 0;
}
.sv-box button {
  background-color: #e2454a;
  color: #fff;
}
</style>

