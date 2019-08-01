<template>
    <div class="bp-page">
        <button @tap="doSomething">{{txt}}</button>
    </div>
</template>

<script>
export default {
    props: {
        txt: {
            type: String,
            value: ''
        },
        doSomething: {
            type: Function
        }
    }
}
</script>

<style scoped>
.bp-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}
.bp-page button {
  background-color: #e2453a;
  color: #fff;
  width: 60%;
  border-radius: 0rpx;
}
.bp-page button::after {
  border-radius: 0rpx;
}
</style>
<style lang="wxss">
page {
  background-color: #f0f0f0 !important;
}
</style>