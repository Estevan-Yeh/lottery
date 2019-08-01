<template>
  <div>
    <div class="mmr-img">
      <img src="/static/image/exm3.png">
    </div>
    <div class="lists">
      <block
        v-for="(item,index) in lists"
        :key="index"
      >
        <div class="mmr-flex">
          <div class="mmr-icon"><img :src="item.img"></div>
          <div class="mmr-content flex">
            <div class="mmr-cleft">{{item.title}}</div>
            <div class="mmr-cright">
              <span>{{item.tip}}</span>
              <img src="/static/my/goGrey.png">
            </div>
          </div>

        </div>
        <div :class="item.borderB?'borderB':''"></div>
      </block>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: [
        {
          img: '/static/gift/zi.png',
          title: 'Readhub',
          tip: '互联网资讯速览',
          borderB: true
        },
        {
          img: '/static/gift/zi.png',
          title: '见面助手',
          borderB: true
        },
        {
          img: '/static/gift/zi.png',
          title: '饭局通知',
          borderB: false
        }
      ]
    }
  },
}
</script>

<style scoped>
.mmr-img {
  padding: 20rpx;
  box-sizing: border-box;
}
.mmr-img img {
  width: 100%;
  height: 200rpx;
}
.lists {
  background-color: #fff;
}
.mmr-flex {
  display: flex;
  box-sizing: border-box;
  padding: 20rpx;
  align-items: center;
}
.flex {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.mmr-icon img {
  width: 100rpx;
  height: 100rpx;
  margin-right: 20rpx;
}
.mmr-cright img {
  width: 32rpx;
  height: 32rpx;
  position: relative;
  top: 6rpx;
  margin-left: 10rpx;
}
.mmr-cright span {
  font-size: 28rpx;
  color: #575757;
}
.borderB {
  border-bottom: 1rpx solid #e5e5e5;
  width: 100%;
  margin-left: 140rpx;
}
</style>
<style lang="wxss">
page {
  background-color: #f0f0f0 !important;
}
</style>