import Vue from 'vue'
import App from './gift'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    window: {
      navigationBarTitleText: '抽奖助手'
    }
  }
}
