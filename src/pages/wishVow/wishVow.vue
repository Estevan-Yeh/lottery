<template>
    <div class="wishVow">
        <div class="txt"><text>这是专属于你的愿望银河\n每一点期待都会上闪光\n所到之处皆会照亮</text></div>
        <div class="txt"><text>许下愿望，让心意清晰记录\n持续点亮，为愿望累计能量\n进行分享，等待好友帮你实现</text></div>
        <div class="wv-btn">许愿</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wishVow {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.wishVow div {
  text-align: center;
}
.txt {
  margin-bottom: 70rpx;
  line-height: 50rpx;
}
.wv-btn {
  margin-top: 120rpx;
  padding: 80rpx 70rpx;
  border-radius: 100%;
  background-color: burlywood;
}
</style>

<style lang="wxss">
page {
  width: 100%;
  height: 100%;
}
</style>
