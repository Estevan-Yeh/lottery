<template>
  <div>
    <div class="dialog-bg"></div>
    <div
      class="dialog-page"
      @tap="doSomething"
    >
      <div
        class="dialog-box"
        @tap.stop=""
      >
        <div
          class="dialog-icon"
          @tap.stop="doSomething"
        ><img src="/static/images/exit.png"></div>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },
  methods: {
  },
}
</script>

<style scoped>
.dialog-bg,
.dialog-page {
  width: 100%;
  height: 100%;
}
.dialog-bg {
  position: absolute;
  z-index: 100;
  opacity: 0.5;
  background-color: #000;
}
.dialog-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30rpx;
  position: absolute;
  z-index: 101;
  box-sizing: border-box;
}
.dialog-box {
  padding: 40rpx 30rpx;
  background-color: #fff;
  width: 100%;
}
.dialog-icon {
  right: 60rpx;
  position: absolute;
}
.dialog-icon img {
  width: 56rpx;
  height: 56rpx;
}
</style>
