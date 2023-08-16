import './style.css'
import App from './App.vue'
import Vue from 'vue'
import zyk, { getAge } from '@zyk/zyk-ui'
// 按需加载
// import { ZButton } from '@zyk/zyk-ui'
import '@zyk/zyk-ui/css/index.css'
import ElementUI from 'element-ui'


import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)



Vue.use(zyk)

new Vue({
  el: '#app',
  render: h => h(App),
})
