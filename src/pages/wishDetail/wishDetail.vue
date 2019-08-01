<template>
    <div>
        <div class="wd-item">
            <div class="wd-name">
                <span class="wd-txt-name">签到</span>
                <span class="wd-txt-add">+1</span>
            </div>
            <div class="wd-time">
                <span>2019-07-31 16:30:56</span>
                <span>当前心愿 1</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wd-item {
  box-sizing: border-box;
  padding: 20rpx;
  background-color: #fff;
  width: 100%;
  margin-top: 20rpx;
}
.wd-item > div {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.wd-txt-name {
  font-size: 28rpx;
}
.wd-txt-add {
  font-size: 28rpx;
  color: green;
}
.wd-time {
  margin-top: 6rpx;
  font-size: 22rpx;
  color: #575757;
}
</style>

<style lang="wxss">
page {
  background-color: #f0f0f0 !important;
}
</style>