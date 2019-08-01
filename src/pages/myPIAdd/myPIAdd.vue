<template>
    <div>
        <btn-page
            :txt="btnTxt"
            :doSomething="toGift"
        ></btn-page>
    </div>
</template>

<script>
import BtnPage from '@/components/BtnPage/BtnPage'
export default {
    components: { BtnPage },
    data () {
        return {
            btnTxt: '去发起抽奖'
        }
    },
    methods: {
        toGift () {
            wx.navigateTo({ url: '../gift/main' })
        }
    },
}
</script>

<style scoped>
</style>
