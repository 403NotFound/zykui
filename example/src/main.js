import './style.css'
import App from './App.vue'
import Vue from 'vue'

import zyk, { getAge } from '@zyk/zyk-ui'
import '@zyk/zyk-ui/css/index.css'
console.log(zyk, getAge)

Vue.use(zyk)
console.log(zyk)
new Vue({
  el: '#app',
  render: h => h(App),
})
